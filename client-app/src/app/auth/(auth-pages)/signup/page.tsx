import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Typography from '@mui/material/Typography';
import { createClient } from '@/utils/supabase/server';
import Content from './content';

export const metadata: Metadata = {
    title: '계정등록'
};

export default async function Page(): Promise<React.ReactNode> {
    // 이미 로그인이 되어있는지 확인
    // 로그인되어 있으면 첫 페이지로 리다이렉트
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (!error || data?.user) {
        redirect('/');
    }

    return (
        <>
            <Typography variant="h3" sx={{ mb: 5 }}>계정등록</Typography>
            <Content />
        </>
    )
}
