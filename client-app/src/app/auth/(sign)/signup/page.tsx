import React from 'react';
import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import Content from './content';

export const metadata: Metadata = {
    title: '계정등록'
};

export default function Page(): React.ReactNode {
    return (
        <>
            <Typography variant="h3" sx={{ mb: 5 }}>계정등록</Typography>
            <Content />
        </>
    )
}
