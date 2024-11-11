import React from 'react';
import ContentBox from '@/components/ContentBox';
import Typography from '@mui/material/Typography';

export default function Content(): React.ReactNode {
    return (
        <>
            <ContentBox sx={{ mb: '36px' }}>
                <Typography sx={{ color: '#bbbbbb', fontWeight: 600, fontSize: '1.2rem' }}>자신이 생각하는 정책을 한 줄로 적어보세요.</Typography>
            </ContentBox>
            <ContentBox sx={{ mb: '24px' }}>
                <Typography sx={{ color: '#777777', fontWeight: 600, fontSize: '1.3rem' }}>
                    병사 봉급을 250만 원까지 인상하는 것에 대해서 다른 자문단원분들의 의견이 궁금합니다.
                </Typography>
            </ContentBox>
            <ContentBox sx={{ mb: '24px' }}>
                <Typography sx={{ color: '#777777', fontWeight: 600, fontSize: '1.3rem' }}>
                    육군에 해군이나 공군과 유사한 병 자대복무 배치 제도가 도입되었으면 합니다.
                </Typography>
            </ContentBox>
            <ContentBox sx={{ mb: '24px' }}>
                <Typography sx={{ color: '#777777', fontWeight: 600, fontSize: '1.3rem' }}>
                    예비역 재임용 제도 개선 건의
                </Typography>
            </ContentBox>
            <ContentBox sx={{ mb: '24px' }}>
                <Typography sx={{ color: '#777777', fontWeight: 600, fontSize: '1.3rem' }}>
                    예비군 훈련 시 대학교 공문 발송 관련 의견 제시
                </Typography>
            </ContentBox>
            <ContentBox sx={{ mb: '24px' }}>
                <Typography sx={{ color: '#777777', fontWeight: 600, fontSize: '1.3rem' }}>
                    국방부 2030 자문단 운영 방향 건의
                </Typography>
            </ContentBox>
        </>
    )
}