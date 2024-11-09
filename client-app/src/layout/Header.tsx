'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import config from '@/config';
import UserButton from './UserButton';

export default function Header(): React.ReactNode {
    const theme = useTheme();
    const router = useRouter();

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
                    padding: 1.5,
                }}
                >
                    <Typography sx={{ display: 'flex', flexGrow: 1, fontWeight: 600, alignItems: 'center' }} component="div">
                        <Link href="/">2030 Connect</Link>
                    </Typography>
                    <UserButton />
                </Box>
            </AppBar>
        </Box>
    )
}