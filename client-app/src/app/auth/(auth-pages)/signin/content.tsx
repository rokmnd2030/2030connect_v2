'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { signIn } from './service';

export default function Content(): React.ReactNode {
    const [userData, setUserData] = useState<{ email: string; password: string }>({ email: '', password: '' });

    // 로그인 양식 필드 값을 수정하면 실시간으로 상태에 반영
    // Material UI에서 값을 검증하지만 2차적으로 검사 필요
    const handleTextField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <Box component="form" onSubmit={(e) => {
            e.preventDefault();

            // Supabase Auth Sign In
            signIn(userData);
        }}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextField onChange={handleTextField} required fullWidth id="signin-email" name="email" label="이메일" type="email" variant="outlined" />
                </Grid>
                <Grid size={12}>
                    <TextField onChange={handleTextField} required fullWidth id="signin-password" name="password" label="패스워드" type="password" variant="outlined" />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Button type="submit" variant="contained" disableElevation>로그인</Button>
            </Box>
            <Box>
                <Image
                    alt='카카오 로그인' src='/kakao_login_large_wide.png' height={100} width={200} />
            </Box>
        </Box>
    )
}