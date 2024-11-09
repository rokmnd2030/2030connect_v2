'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signIn } from './service';

export default function Content(): React.ReactNode {
    const [userData, setUserData] = useState<{ email: string; password: string }>({ email: '', password: '' });

    const handleTextField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <Box component="form" onSubmit={(e) => {
            e.preventDefault();
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
        </Box>
    )
}