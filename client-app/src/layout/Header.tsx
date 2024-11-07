'use client'

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import config from '@/config';

export default function Header(): React.ReactNode {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: '(blur: 10px)',
                    WebkitBackdropFilter: '(blur: 10px)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    color: 'rgba(0, 0, 0, 0.5)',
                    height: config.styles.layout.appBarHeight,
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Box sx={{
                    height: config.styles.layout.appBarHeight,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 2,
                }}
                >
                    <Typography sx={{ flexGrow: 1, fontWeight: 600, }} component="div">
                        <Link href="/">2030 Connect</Link>
                    </Typography>
                    <Box>
                        Sign In
                    </Box>
                </Box>
            </AppBar>
        </Box>
    )
}