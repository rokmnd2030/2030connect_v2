'use client'

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import config from '@/config';

export default function Header(): React.ReactNode {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: '(blur: 10px)',
                    WebkitBackdropFilter: '(blur: 10px)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    height: config.styles.layout.appBarHeight,
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Box sx={{
                    height: config.styles.layout.appBarHeight,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: 2,
                }}
                >
                    <Typography sx={{ flexGrow: 0, color: 'rgba(0, 0, 0, 0.5)', fontWeight: 600, }} component="div">
                        2030 Connect
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    )
}