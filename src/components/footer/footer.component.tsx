import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FooterLink from './footer.link';

const FooterComponent = () => {
    return (
        <>
            <Container component="footer">
                <Box
                    sx={{
                        py: { xs: 4, sm: 8 },
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 4,
                        gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
                        gridTemplateRows: 'auto',
                        '& a:not(.MuiIconButton-root)': {
                            pt: 0.5,
                            pb: 0.5,
                            color: 'text.secondary',
                            typography: 'body2',
                            '&:hover': {
                                color: 'primary.main',
                                textDecoration: 'underline',
                            },
                        },
                    }}
                >
                    <FooterLink />
                </Box>
                <Divider />
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent={{ sm: 'space-between' }}
                    gap={{ xs: 2, sm: 1 }}
                    sx={{ my: 4 }}
                >
                    <Typography color="text.tertiary" variant="caption" fontWeight={400}>
                        Copyright © {new Date().getFullYear()} Material UI SAS, trading as MUI.
                    </Typography>
                    <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href="https://github.com/mui"
                            aria-label="github"
                            title="GitHub"
                            size="small"
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href={"/"}

                            aria-label="RSS Feed"
                            title="RSS Feed"
                            size="small"
                        >
                            <RssFeedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href="https://x.com/MUI_hq"
                            aria-label="X/twitter"
                            title="X"
                            size="small"
                        >
                            <XIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href="https://www.linkedin.com/company/mui/"
                            aria-label="linkedin"
                            title="LinkedIn"
                            size="small"
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href="https://www.youtube.com/@MUI_hq"
                            aria-label="YouTube"
                            title="YouTube"
                            size="small"
                        >
                            <YouTubeIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            target="_blank"
                            rel="noopener"
                            href="https://mui.com/r/discord/"
                            aria-label="Discord"
                            title="Discord"
                            size="small"
                        >
                            {/* <DiscordIcon fontSize="small" /> */}
                        </IconButton>
                        {/* {stackOverflowUrl ? (
            <IconButton
              target="_blank"
              rel="noopener"
              href={stackOverflowUrl}
              aria-label="Stack Overflow"
              title="Stack Overflow"
              size="small"
            >
              <SvgStackOverflow fontSize="small" />
            </IconButton>
          ) : null} */}
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default FooterComponent;