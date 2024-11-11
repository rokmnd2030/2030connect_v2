// 메뉴 구조 스크립트
// 아이콘은 Material Icon 사용

import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import Groups3Icon from '@mui/icons-material/Groups3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


// description은 1단계 메뉴에서만 출력됨
type siteStructure = {
    id: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
    children?: siteStructure[];
}

const siteStructure: Readonly<siteStructure[]> = [
    {
        id: 'about',
        label: '서비스 소개',
        icon: <PeopleAltIcon />,
        description: '2030 Connect란?',
        children: [
            {
                id: '2030youth',
                label: '청년과 함께하는 정책',
                icon: <InterpreterModeIcon />
            }
        ],
    },
    {
        id: 'forum',
        label: '정책소통',
        icon: <QuickreplyIcon />,
        description: '청년자문단과 함께하는 정책토의',
        children: [
            {
                id: 'discussion',
                label: '정책토의',
                icon: <Groups3Icon />
            },
            {
                id: 'free',             // 가제
                label: '정책제안',        // 가제
                icon: <HandshakeIcon />
            },
        ],
    },
    {
        id: 'advisorygroup',
        label: '2030 자문단',
        icon: <Diversity3Icon />,
        description: '청년과 함께하는 대한민국',
        children: [
            {
                id: 'rokmnd2030',
                label: '국방부 2030 자문단',
                icon: <MilitaryTechIcon />
            },
        ],
    },
]

export default siteStructure;