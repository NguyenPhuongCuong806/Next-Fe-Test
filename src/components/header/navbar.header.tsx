import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const Navigation = styled('nav')(({ theme }) => [
    {
        '& > div': {
            cursor: 'default',
        },
        '& a, & button': {
            display: 'inline-block',
            color: (theme.vars || theme).palette.text.primary,
            ...theme.typography.body2,
            textDecoration: 'none',
            padding: theme.spacing('6px', '8px'),
            borderRadius: (theme.vars || theme).shape.borderRadius,
            '&:hover': {
                color: (theme.vars || theme).palette.grey[700],
                backgroundColor: (theme.vars || theme).palette.grey[50],
            },
        },
    },

]);

const NavBarHeader = () => {
    return (
        <>
            <Navigation sx={{
                display: "flex",
                gap: 1
            }}>
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 3,
                        alignItems: "center"
                    }}
                >
                    <Link href={'/'}
                    >
                        Trang chủ
                    </Link>

                    <Box sx={{ ml: 'auto' }} />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
            </Navigation>
        </>
    )
}

export default NavBarHeader;