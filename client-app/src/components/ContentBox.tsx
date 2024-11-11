import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

interface ContentBoxProps extends BoxProps {
    children: React.ReactNode;
}

export default function ContentBox({ children, sx, ...props }: ContentBoxProps): React.ReactNode {
    return (
        <Box
            sx={{
                padding: 3.5,
                boxSizing: 'border-box',
                background: 'rgba(255,255,255,1)',
                borderRadius: '16px',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                ...sx,
            }}
            {...props}
        >
            {children}
        </Box>
    )
}