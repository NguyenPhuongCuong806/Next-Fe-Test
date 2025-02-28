'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import NavBarHeader from './navbar.header';
// import ActionHeader from './action.header';
// import LoginComponent from '../auth/login';
// import RegisterComponent from '../auth/register';
import ThemeModeToggle from '@/themes/theme.mode.toggle';
import HeaderNavDropdown from './header.nav.dropdown';
import { Stack } from '@mui/material';


const Header = styled('header')(({ theme }) => [
    {
        position: 'sticky',
        top: 0,
        transition: theme.transitions.create('top'),
        zIndex: theme.zIndex.appBar,
        backdropFilter: 'blur(8px)',
        boxShadow: `inset 0px -1px 1px ${(theme.vars || theme).palette.grey[100]}`,
        backgroundColor: 'rgba(255,255,255,0.8)',
    } as const,
    theme.applyDarkStyles({
        boxShadow: `inset 0px -1px 1px ${(theme.vars || theme).palette.primaryDark[700]}`,
        backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
    }),
]);

const HEIGHT = 60;

const HeaderComponent = () => {

    const [option, setoption] = React.useState<'login' | 'register' | 'no'>("no")

    return (
        <Header>
            <GlobalStyles
                styles={{
                    ':root': {
                        '--MuiDocs-header-height': `${HEIGHT}px`,
                    },
                }}
            />
            <Container sx={{ display: 'flex', alignItems: 'center', minHeight: HEIGHT }}>
                <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
                    <NavBarHeader />
                </Box>
                <Box sx={{ ml: 'auto' }} />
                <Stack direction={'row'} spacing={1}>
                    <ThemeModeToggle />
                </Stack>
                <Box sx={{ display: { md: 'none' }, ml: 1 }}>
                    <HeaderNavDropdown />
                </Box>
            </Container>
        </Header >
    );
}

export default HeaderComponent;