import Candlestick from "@/components/home/candlestick";
import { GetCandles } from "@/utils/api";
import { Box, Container } from "@mui/material";

export default async function UserPage() {

    const resTest = await GetCandles('1h', 'BTCUSDT');

    return (
        <Container>
            <Box sx={{ mt: 2 }} />
            <Candlestick
                data={resTest}
            />
            <Box sx={{ mt: 2 }} />
        </Container>
    )
}