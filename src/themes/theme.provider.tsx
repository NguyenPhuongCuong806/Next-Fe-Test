'use client'
import deepmerge from "@/utils/deepmerge";
import {
    CssBaseline,
    experimental_extendTheme as extendTheme,
    Experimental_CssVarsProvider as CssVarsProvider,
    PaletteColorOptions,
} from "@mui/material";
import React from "react";
import { getDesignTokens, getThemedComponents } from "./theme";

declare module '@mui/material/styles' {
    interface PaletteOptions {
        primaryDark?: PaletteColorOptions;
    }
}

const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');

const theme = extendTheme({
    cssVarPrefix: 'muidocs',
    colorSchemes: {
        light: {
            palette: lightPalette,
        },
        dark: {
            palette: darkPalette,
        },
    },
    ...designTokens,
    typography: deepmerge(typography, {
        h1: {
            ':where([data-mui-color-scheme="dark"]) &': {
                color: 'var(--muidocs-palette-common-white)',
            },
        },
        h2: {
            ':where([data-mui-color-scheme="dark"]) &': {
                color: 'var(--muidocs-palette-grey-100)',
            },
        },
        h5: {
            ':where([data-mui-color-scheme="dark"]) &': {
                color: 'var(--muidocs-palette-primary-300)',
            },
        },
    }),
    ...getThemedComponents(),
});

const CustomThemeProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <CssVarsProvider theme={theme} defaultMode="system" disableTransitionOnChange>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    )
}

export default CustomThemeProvider;