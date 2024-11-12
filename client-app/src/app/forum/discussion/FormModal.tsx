'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FormModal({ id }: { id?: string }): React.ReactNode {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <Box>
                <Button
                    disableRipple
                    onClick={handleOpen}
                    variant="contained"
                    sx={{
                        maxWidth: '200px',
                        width: '100%',
                        height: '50px',
                        mb: '36px',
                        borderRadius: '13px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        boxShadow: '0px 4px 10px rgba(75, 0, 130, 0.2)',
                        transition: 'box-shadow 0.3s ease-in-out, background 0.2s ease-in-out',
                        '&:hover': {
                            boxShadow: '0px 6px 20px rgba(75, 0, 130, 0.3)',
                        },
                    }}
                >정책안건 작성</Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="정책안건 작성 Modal"
                aria-describedby="관리자는 정책안건을 작성할 수 있습니다."
                slotProps={{
                    backdrop: {
                        sx: {
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        },
                        timeout: 400,
                    },
                }}
            >
                <Fade in={open} timeout={400}>
                    <Box
                        sx={{
                            maxWidth: '1000px',
                            width: '100%',
                            position: 'absolute',
                            top: '30px',
                            left: '50%',
                            transform: 'translate(-50%, 0)',
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                                mx: 2,
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                boxSizing: 'border-box',
                                boxShadow: 24,
                            }}
                        >
                            <Typography component="h3" sx={{ mb: '36px', fontSize: '1.5rem', fontWeight: 900 }}>정책제안 작성</Typography>
                            <Box>
                                <TextField sx={{ mb: 4 }} helperText="정책제안의 의도를 파악할 수 있는 한 문장을 입력하세요." id="input-discussion-subject" name="discussion-subject" label="정책제안 안건 주제" autoFocus fullWidth />
                                <TextField sx={{ mb: 4 }} id="input-discussion-content" name="discussion-content" label="정책안건 상세" rows={7} fullWidth multiline />
                                <Button disableRipple variant="contained">등록</Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}