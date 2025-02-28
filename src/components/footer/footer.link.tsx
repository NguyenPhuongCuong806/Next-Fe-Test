'use client'
import Link from "next/link";
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FooterLink = () => {
    return (
        <>
            <div>
                <Link prefetch={false} href="/" aria-label="Go to homepage" style={{ marginBottom: 2 }}>
                    {/* <SvgMuiLogotype height={28} width={91} /> */}
                </Link>
                <Typography variant="body2" fontWeight="semiBold" gutterBottom>
                    Keep up to date
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Join our newsletter for regular updates. No spam ever.
                </Typography>
                {/* <EmailSubscribe /> */}
            </div>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                    gridAutoColumns: '1fr',
                    gap: 2,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontWeight="semiBold" variant="body2" sx={{ mb: 0.5 }}>
                        Products
                    </Typography>
                    <Link prefetch={false}
                        href={"/"}
                    >
                        Material UI
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Base UI
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        MUI X
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Toolpad
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontWeight="semiBold" variant="body2" sx={{ mb: 0.5 }}>
                        Resources
                    </Typography>
                    <Link prefetch={false} href={"/"}
                    >
                        Material Icons
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Templates
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Components
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Customization
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Design Kits
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontWeight="semiBold" variant="body2" sx={{ mb: 0.5 }}>
                        Explore
                    </Typography>
                    <Link prefetch={false} href={"/"}
                    >
                        Documentation
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Store
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Blog
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Showcase
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Roadmap
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontWeight="semiBold" variant="body2" sx={{ mb: 0.5 }}>
                        Company
                    </Typography>
                    <Link prefetch={false} href={"/"}
                    >
                        About
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Vision
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link prefetch={false} href={"/"}
                        >
                            Careers{' '}
                        </Link>
                        <Chip
                            size="small"
                            variant="outlined"
                            color="success"
                            label="Hiring"
                            sx={(theme) => ({
                                height: 18,
                                '& .MuiChip-label': {
                                    px: '4px',
                                    fontSize: theme.typography.pxToRem(10),
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '.04rem',
                                },
                            })}
                        />
                    </Box>
                    <Link prefetch={false} href={"/"}
                    >
                        Support
                    </Link>
                    <Link prefetch={false} href={"/"}
                    >
                        Privacy policy
                    </Link>
                    <Link prefetch={false} target="_blank" rel="noopener" href="mailto:contact@mui.com">
                        Contact us
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default FooterLink;