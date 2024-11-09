// 메뉴 구조
// 현재 2단까지 구현되어 있으나, 필요시 3단까지 구현할 수 있도록...
// description은 1단계 메뉴에서만 출력 가능
type menuStructure = {
    id: string;
    label: string;
    description?: string;
    children?: menuStructure[];
}

const menu: Readonly<menuStructure[]> = [
    {
        id: 'about',
        label: '서비스 소개',
        description: '2030 Connect란?',
        children: [
            {
                id: '2030youth',
                label: '청년과 함께하는 정책',
            }
        ],
    },
    {
        id: 'forum',
        label: '정책소통',
        description: '청년자문단과 함께하는 정책토의',
        children: [
            {
                id: 'discussion',
                label: '정책토의',
            },
        ],
    },
    {
        id: 'advisorygroup',
        label: '2030 자문단',
        description: '청년과 함께하는 대한민국',
        children: [
            {
                id: 'rokmnd2030',
                label: '국방부 2030 자문단',
            },
        ],
    },
]

export default menu;