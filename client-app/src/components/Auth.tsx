'use client'

import React from 'react';
import { useAuthStatus } from '@/hooks/useAuthStatus';

export default function Auth({ children }: { children: React.ReactNode }): React.ReactNode {
    // 사용자 로그인 확인
    useAuthStatus();

    return (
        <>{children}</>
    )
}