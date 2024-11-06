'use client'

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import config from '@/config';

export default function MenuDrawer(): React.ReactNode {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    display: {
                        md: 'block',
                        xs: 'none',
                    },
                    width: '100%',
                    maxWidth: config.styles.layout.maxDrawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: '100%', maxWidth: config.styles.layout.maxDrawerWidth, boxSizing: 'border-box', top: config.styles.layout.appBarHeight },
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    dd
                </Box>
            </Drawer></>
    )
}