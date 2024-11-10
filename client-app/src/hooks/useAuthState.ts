'use client'

import { useAppSelector } from '@/utils/redux/hooks';

// redux store에 저장된 사용자 정보를 가져오는 hook
export const useAuthState = () => {
    const { authState, uuid, nickname } = useAppSelector((state) => state.authReducer.state);

    return { authState, uuid, nickname };
}