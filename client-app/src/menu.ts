type menuStructure = {
    id: string;
    label: string;
    description?: string;
    children: menuStructure[];
}

const menu: Readonly<menuStructure[]> = [
    {
        id: 'introduction',
        label: '서비스 소개',
        description: '2030 Connect란?',
        children: [],
    },
    {
        id: 'forum',
        label: '정책소통',
        description: '청년자문단과 함께하는 정책토의',
        children: [],
    },
    {
        id: 'rokmnd2030',
        label: '국방부 2030 자문단',
        description: '국방정책 제언 시스템',
        children: [],
    },
]

export default menu;