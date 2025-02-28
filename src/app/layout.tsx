import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
// import NProgressWrapper from '@/libs/nprogress.wrapper';
import CustomThemeProvider from '@/themes/theme.provider';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import StyledComponentsRegistry from '@/libs/registry';
// import NextAuthWrapper from '@/libs/next.auth.wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitColorSchemeScript />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider>
            {/* <NProgressWrapper> */}
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <StyledComponentsRegistry>
              {/* <NextAuthWrapper> */}
              {children}
              {/* </NextAuthWrapper> */}
            </StyledComponentsRegistry>
            {/* </NProgressWrapper> */}
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
