'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import ContentBox from '@/components/ContentBox';
import { useTheme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FormModal from './FormModal';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const dummy = [
    {
        id: 1,
        subject: '병사 봉급을 250만 원까지 인상하는 것에 대해서 다른 자문단원분들의 의견이 궁금합니다.',
        author: '황민식',
        tag: ['병 복지', '병 봉급'],
        checked: true,
        opinion: true,
    },
    {
        id: 2,
        subject: '육군에 해군이나 공군과 유사한 병 자대복무 배치 제도가 도입되었으면 합니다.',
        author: '김동현',
        tag: ['병 복지', '공정과 상식'],
        checked: true,
        opinion: true,
    },
    {
        id: 3,
        subject: '예비역 재임용 제도 개선 건의',
        author: '황민식',
        tag: ['예비군', '초급간부'],
        checked: true,
        opinion: false,
    },
    {
        id: 4,
        subject: '예비군 훈련 시 대학교 공문 발송 관련 의견 제시',
        author: '예비군',
        tag: ['예비군', '대학생'],
        checked: true,
        opinion: true,
    },
    {
        id: 5,
        subject: '국방부 2030 자문단 운영 방향 건의',
        author: '이동민',
        tag: ['국방부 2030 자문단'],
        checked: false,
        opinion: null,
    },
];

export default function Content(): React.ReactNode {
    // 테마를 가져옴
    const theme = useTheme();

    const router = useRouter();

    // 작은 화면에서 사이즈를 지정하기 위한 미디어쿼리
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <FormModal />
            {dummy.map((article, index) => (
                <ContentBox
                    key={`discussion-article-${index}`}
                    onClick={() => router.push(`/forum/discussion/${article.id}`)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mb: '24px',
                        p: 0,
                        cursor: 'pointer',
                    }}
                >
                    <Box sx={{
                        minHeight: '200px',
                        height: 'auto',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                        px: 3.5,
                        py: 3,
                    }}>
                        <Typography
                            component="div"
                            sx={{
                                flexGrow: 1,
                                color: '#777777',
                                fontWeight: 600,
                                fontSize: { xs: '1.0rem', sm: '1.3rem' },
                                textAlign: 'justify',
                                boxSizing: 'border-box'
                            }}
                        >
                            {article.subject}
                        </Typography>
                        <Box sx={{ mb: 1 }}>
                            <Chip
                                icon={<FaceIcon />}
                                label={article.author}
                                variant="outlined"
                                size={isSmallScreen ? 'small' : 'medium'}
                                sx={{
                                    mr: { xs: '3px', sm: '6px' },
                                    fontWeight: 600,
                                }}
                            />
                            {article.tag.map((item, tagindex) => (
                                <Chip
                                    key={`discussion-article-${index}-tags-${tagindex}`}
                                    label={item}
                                    color="primary"
                                    variant="outlined"
                                    size={isSmallScreen ? 'small' : 'medium'}
                                    sx={{
                                        mr: { xs: '3px', sm: '6px' },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        flexGrow: 0,
                        flexShrink: 0,
                        width: '100px',
                        borderTopRightRadius: '16px',
                        borderBottomRightRadius: '16px',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        /*background: article.opinion ? `linear-gradient(
                            to bottom right,
                            rgba(255, 255, 255, 0),
                            rgba(180, 255, 210, 0.3) 30%,
                            rgba(160, 255, 200, 0.4) 60%,
                            rgba(140, 255, 190, 0.5) 80%,
                            rgba(120, 255, 180, 0.6) 100%
                        )` : `linear-gradient(
                                to bottom right,
                                rgba(255, 255, 255, 0),
                                rgba(255, 180, 180, 0.3) 30%,
                                rgba(255, 160, 160, 0.4) 60%,
                                rgba(255, 140, 140, 0.5) 80%,
                                rgba(255, 120, 120, 0.6) 100%
                        )`,*/
                    }}>
                        <>
                            {article.checked && (
                                <>
                                    {article.opinion ? (
                                        <CheckCircleOutlineOutlinedIcon sx={{ fontSize: '5.0rem', color: '#3dcf725c', margin: '0px auto' }} />
                                    ) : (
                                        <CancelOutlinedIcon sx={{ fontSize: '5.0rem', color: '#cf3d3d5c', margin: '0px auto' }} />
                                    )}
                                    <Typography component="div" sx={{
                                        pt: '12px',
                                        textAlign: 'center',
                                        fontSize: '1.3rem',
                                        fontWeight: 900,
                                        lineHeight: 1.3,
                                        color: article.opinion ? '#3dcf72a3' : '#cf3d3d5c',
                                    }}>
                                        {article.opinion ? '찬성' : '반대'}
                                    </Typography>
                                </>
                            )}
                        </>
                    </Box>
                </ContentBox >
            ))
            }
        </>
    )
}