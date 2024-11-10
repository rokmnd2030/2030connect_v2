// 레이아웃에서 실제 출력 부분을 담당

'use client'

import React from 'react';
import Box from '@mui/material/Box';
import MenuDrawer from './MenuDrawer';
import config from '@/config';

export default function Body({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
    return (
        <Box sx={{ display: 'flex' }}>
            <MenuDrawer />
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                marginTop: config.styles.layout.appBarHeight,
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
        </Box>
    )
}