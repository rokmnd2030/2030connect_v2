'use client'

import React from 'react';
import Box from '@mui/material/Box';
import config from '@/config';

export default function Body({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: config.styles.layout.appBarHeight,
            marginLeft: {
                md: config.styles.layout.maxDrawerWidth,
                xs: 0,
            }
        }}>
            <Box sx={{
                maxWidth: {
                    md: config.styles.layout.maxContentWidth,
                    xs: 'initial'
                },
                width: '100%',
                boxSizing: 'border-box',
                padding: 4,
            }}>
                {children}
            </Box>
        </Box>
    )
}