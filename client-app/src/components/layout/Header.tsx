'use client'

import React from 'react';
import Link from 'next/link';
import { signOut } from '@/utils/supabase/signout';
import { useRouter } from 'next-nprogress-bar';
import { useTheme } from '@mui/material/styles';
import { useAuthState } from '@/hooks/useAuthState';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import config from '@/config';

export default function Header(): React.ReactNode {
    const theme = useTheme();
    const router = useRouter();
    const authState = useAuthState();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.04)',
                    color: 'rgba(0, 0, 0, 0.5)',
                    height: config.styles.layout.appBarHeight,
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Box sx={{
                    height: config.styles.layout.appBarHeight,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    pl: 4,
                    pr: 4,
                }}
                >
                    <Typography sx={{ display: 'flex', flexGrow: 1, fontWeight: 600, alignItems: 'center' }} component="div">
                        <Link href="/">2030 Connect</Link>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!authState.authState ? (
                            <>
                                <Button onClick={() => router.push('/auth/signin')}>로그인</Button>
                                <Button onClick={() => router.push('/auth/signup')} sx={{ ml: 1, fontSize: '0.8rem' }} variant="contained" disableElevation disableRipple>계정등록</Button>
                            </>
                        ) : (
                            <IconButton size="large" color="inherit" onClick={() => signOut()}>
                                <ExitToAppIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </AppBar>
        </Box>
    )
}