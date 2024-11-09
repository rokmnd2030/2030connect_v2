// 사용자 인증 페이지에서만 적용되는 레이아웃
// 사이드바 제거

import React from 'react';
import Box from '@mui/material/Box';

export default function SignLayout({ children }: { children: React.ReactNode }): React.ReactNode {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: '400px',
            }}>
                {children}
            </Box>
        </Box>
    )
}