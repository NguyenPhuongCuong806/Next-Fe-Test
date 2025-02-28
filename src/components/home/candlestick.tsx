'use client'
import { CandlestickSeries, createChart, HistogramSeries } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, ButtonGroup, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';
import { cryptoCoins, GetCandles, GetPriceBitcoin, time } from '@/utils/api';
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "4px",
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    marginBottom: 8,
    position: "relative",
    cursor: "pointer",
    '& a, & button': {
        ...theme.typography.body2,
        fontWeight: theme.typography.fontWeightBold,
        textDecoration: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        color: (theme.vars || theme).palette.text.secondary,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
        transition: theme.transitions.create('background'),
        '&:hover, &:focus-visible': {
            backgroundColor: (theme.vars || theme).palette.grey[100],
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}));


interface IProps {
    data: ICandleStick[],
}

const Candlestick = (props: IProps) => {

    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const [dataTime, setDataTime] = useState<string>('1h');
    const [crypt, setCrypt] = useState<string>('BTCUSDT');
    const [open, setOpen] = useState<boolean>(false);
    const [priceCurrent, setPriceCurrent] = useState<number | null>(null);
    const [price1m, setPrice1m] = useState<number | null>(null);

    const theme = useTheme();

    // fetch data candlestick
    const fetchData = async (currentTimeFrame: string,
        currentCoin: string): Promise<ICandleStick[]> => {
        return GetCandles(currentTimeFrame, currentCoin);
    }

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chartRef = chartContainerRef.current;

        const isDarkMode = theme.palette.mode === 'dark';

        const chartOptions: any = {
            layout: {
                textColor: isDarkMode ? 'white' : 'black',
                background: { type: 'solid', color: isDarkMode ? '#121212' : 'white' }
            }
        };

        const chart = createChart(chartRef as HTMLElement, chartOptions);

        const fetchDataApi = async () => {

            //Candlestick Chart
            const candlestickSeries = chart.addSeries(CandlestickSeries, {
                upColor: isDarkMode ? '#4CAF50' : '#26a69a',
                downColor: isDarkMode ? '#F44336' : '#ef5350',
                borderVisible: false,
                wickUpColor: isDarkMode ? '#4CAF50' : '#26a69a',
                wickDownColor: isDarkMode ? '#F44336' : '#ef5350',
            });

            const data = await fetchData(dataTime, crypt);

            // custom data result
            const formattedData: any = data.map(({ openTime, open, high, low, close }) => ({
                time: openTime / 1000,
                open,
                high,
                low,
                close,
            }));

            candlestickSeries.setData(formattedData);

            // Volume Chart
            const volumeServies = chart.addSeries(HistogramSeries, {
                color: isDarkMode ? '#90caf9' : '#26a69a',
                priceScaleId: 'volume'
            })

            chart.priceScale('volume').applyOptions({
                scaleMargins: {
                    top: 0.75,
                    bottom: 0,
                },
                borderVisible: false,
            });

            // custom data result
            const volumeData: any = data.map(item => ({
                time: item.openTime / 1000,
                value: item.volume,
                color: item.close > item.open ? (isDarkMode ? '#4CAF50' : 'green') : (isDarkMode ? '#F44336' : 'red')
            }));

            volumeServies.setData(volumeData)

            chart.timeScale().fitContent();

        }

        fetchDataApi();

        return () => {
            chart.remove();
        };

    }, [dataTime, crypt, theme.palette.mode]);


    const handleSetTime = (time: string) => {
        setDataTime(time);
    }

    const handleSetCrypt = (event: SelectChangeEvent) => {
        setCrypt(event.target.value);
    }

    const fetchPriceBTC = async () => {
        const res = await GetPriceBitcoin('1m');
        //@ts-ignore
        const priceOneMinuteAgo = parseFloat(res[0].close); // Giá đóng cửa 1 phút trước
        //@ts-ignore
        const currentPrice = parseFloat(res[1].close); // Giá đóng cửa hiện tại
        setPrice1m(priceOneMinuteAgo)
        setPriceCurrent(currentPrice)
        setOpen(true);

    }

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Item variant='outlined'>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        {time.map((item) => (
                            <Button
                                key={item}
                                onClick={() => handleSetTime(item)}
                                sx={(theme) => ({
                                    minWidth: 'auto',
                                    padding: '6px 12px',
                                    backgroundColor: dataTime === item
                                        ? `${(theme.vars || theme).palette.grey[300]} !important`
                                        : 'transparent',
                                    color: dataTime === item
                                        ? `${(theme.vars || theme).palette.primary.main} !important`
                                        : 'inherit',
                                    '&:hover': {
                                        backgroundColor: `${(theme.vars || theme).palette.grey[200]} !important`,
                                    },
                                })}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={8} container justifyContent="flex-end">
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <Button onClick={() => fetchPriceBTC()}>Giá Bitcoin</Button>
                    </ButtonGroup>

                    <FormControl size="small" sx={{ minWidth: 120, ml: 2 }}>
                        <InputLabel id="crypto-select-label">CryptoCoins</InputLabel>
                        <Select
                            labelId="crypto-select-label"
                            id="crypto-select"
                            value={crypt}
                            label="CryptoCoins"
                            onChange={handleSetCrypt}
                        >
                            {cryptoCoins.map((item, index) => (
                                <MenuItem key={`cryptoCoins-${index}`} value={item.cryptoName}>
                                    <Avatar sx={{ width: 20, height: 20 }} alt={item.cryptoName} src={item.cryptoImage} />
                                    {item.cryptoName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box mx={{ mb: 2 }} />
            <Divider />
            <Box mx={{ mt: 3 }} />
            <div ref={chartContainerRef} style={{ width: "100%", height: "600px" }} />
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={
                    <Typography
                        sx={(theme) => ({
                            color: (theme.vars || theme).palette.text.primary,
                        })}
                    >
                        {`Giá 1 phút trước: ${price1m}$ | Giá hiện tại: ${priceCurrent}$`}
                    </Typography>
                }
                action={action}
                sx={(theme) => ({
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                        color: (theme.vars || theme).palette.text.primary,
                        boxShadow: theme.shadows[3],
                    },
                })}
            />
        </Item>
    )
};

export default Candlestick;