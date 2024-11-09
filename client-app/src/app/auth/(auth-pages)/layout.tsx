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