// 사이드바를 출력하는 클라이언트 스크립트
// 경로에 따라 사이드바가 필요하지 않은 페이지가 있는데,
// 사용자 인증 페이지(계정등록, 로그인)에서는 사이드바 미출력

'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import CustomMenuDrawer from './CustomMenuDrawer';

export default function MenuDrawer(): React.ReactNode {
    // 사이드바를 출력하지 않아도 되는 페이지 경로 지정 (필요시 추가)
    const pathname = usePathname();
    const hideMenuDrawer = pathname.startsWith('/auth');

    return (
        <>
            {!hideMenuDrawer && <CustomMenuDrawer />}
        </>
    );
}