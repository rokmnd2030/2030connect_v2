import React from 'react';
import type { Metadata } from 'next';
import Content from './content';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
    title: '정책토의'
};

export default function Page(): React.ReactNode {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            width: '100%',
            margin: '0px auto',
        }}>
            <Content />
        </Box>
    )
}
