import React from 'react';
import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import ContentBox from '@/components/ContentBox';
import Content from './content';

export const metadata: Metadata = {
    title: '로그인'
};

export default async function Page(): Promise<React.ReactNode> {
    return (
        <ContentBox>
            <Typography variant="h3" sx={{ mb: 5 }}>로그인</Typography>
            <Content />
        </ContentBox>
    )
}
