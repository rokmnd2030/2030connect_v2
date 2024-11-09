'use client'

import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { signUp } from './service';

// 계정 등록에 필요한 사용자 정보
const initialUserData = {
    email: '',
    password: '',
    verify_password: '',
    firstname: '',
    lastname: '',
    birthdate: '',
}

export default function Content(): React.ReactNode {
    // 각 필드 값은 React state로 관리
    const [userData, setUserData] = useState<typeof initialUserData>(initialUserData);

    // 캘린더 한국어 로케일 선택
    dayjs.locale('ko');

    // 필드 값을 변경할 때 실행되는 함수
    const handleTextField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value,
        }));
    }

    // MUI X Datepicker 날짜 변경 시 실행되는 함수
    const handleDatePicker = (date: Dayjs | null) => {
        // 선택된 날짜가 있으면 React state 변경
        if (date != null) {
            setUserData((prevUserData) => ({
                ...prevUserData,
                birthdate: date.format('YYYY-MM-DD'),
            }));
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <Box component="form" onSubmit={(e) => {
                e.preventDefault();
                signUp(userData);
            }}>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <TextField onChange={handleTextField} required fullWidth id="signup-email" name="email" label="이메일" type="email" variant="outlined" />
                    </Grid>
                    <Grid size={6}>
                        <TextField onChange={handleTextField} required fullWidth id="signup-password" name="password" label="패스워드" type="password" variant="outlined" />
                    </Grid>
                    <Grid size={6}>
                        <TextField onChange={handleTextField} required fullWidth id="signup-verify-password" name="verify_password" label="패스워드 확인" type="password" variant="outlined" />
                    </Grid>
                    {(userData.verify_password.length > 0 && userData.password.length > 0 && (userData.password != userData.verify_password)) && (
                        // 입력된 패스워드가 일치하지 않는 경우 오류 메시지 출력
                        < Grid size={12}>
                            <Alert severity="error">패스워드가 일치하지 않습니다.</Alert>
                        </Grid>
                    )}
                </Grid>
                <Divider sx={{ mb: 3, mt: 3 }} />
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TextField onChange={handleTextField} required fullWidth id="signup-lastname" name="lastname" label="성" variant="outlined" />
                    </Grid>
                    <Grid size={8}>
                        <TextField onChange={handleTextField} required fullWidth id="signup-firstname" name="firstname" label="이름" variant="outlined" />
                    </Grid>
                    <Grid size={12}>
                        <MobileDatePicker
                            label="생년월일"
                            defaultValue={dayjs()}
                            format="YYYY/MM/DD"
                            maxDate={dayjs()}
                            slotProps={{
                                toolbar: { toolbarFormat: 'MMMM DD일 dd요일', hidden: false },
                                calendarHeader: { format: 'YYYY년 MMMM' },
                            }}
                            localeText={{
                                clearButtonLabel: '초기화',
                                okButtonLabel: '확인',
                                cancelButtonLabel: '취소',
                            }}
                            onChange={handleDatePicker}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Button type="submit" variant="contained" disableElevation>계정등록</Button>
                </Box>
            </Box>
        </LocalizationProvider >
    )
}