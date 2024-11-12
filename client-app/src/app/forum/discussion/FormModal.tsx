'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function FormModal({ id }: { id?: string }): React.ReactNode {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <Typography sx={{ color: '#bbbbbb', fontWeight: 600, fontSize: '1.2rem' }} onClick={handleOpen}>자신이 생각하는 정책을 한 줄로 적어보세요.</Typography>
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
                        }
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1000px',
                        width: '100%',
                        position: 'absolute',
                        top: '10%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: 24,
                        boxSizing: 'border-box',
                        p: 4,
                    }}
                >
                    <Typography component="h3" sx={{ fontSize: '1.5rem', fontWeight: 900, }}>정책제안 작성</Typography>
                </Box>
            </Modal >
        </>
    );
}