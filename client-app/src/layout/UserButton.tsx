'use server'

import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import Button from '@mui/material/Button';

export default async function UserButton() {
    const router = useRouter();

    // 로그인되어 있는지 확인
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    // 로그인 상태에 따라 사용자 버튼 작성
    let userButton: React.ReactNode = <></>;

    if (!error) {
        userButton = (
            <>
                <Button onClick={() => router.push('/auth/signout')}>로그아웃</Button>
            </>
        );
    } else {
        userButton = (
            <>
                <Button onClick={() => router.push('/auth/signin')} sx={{ fontSize: '0.8rem' }} variant="contained" disableElevation>로그인</Button>
                <Button onClick={() => router.push('/auth/signup')} sx={{ ml: 1, fontSize: '0.8rem' }} variant="contained" disableElevation>계정등록</Button>
            </>
        );
    }

    return userButton;
}