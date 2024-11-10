'use client'

import React from 'react';
import { checkAuthStatus } from '@/utils/checkAuthStatus';

export default function Auth({ children }: { children: React.ReactNode }): React.ReactNode {
    // 사용자 로그인 확인
    const auth = checkAuthStatus();

    return (
        <>{children}</>
    )
}