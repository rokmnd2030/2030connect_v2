'use client'

import { useAppSelector } from '@/utils/redux/hooks';

export default function useAuthState() {
    const { authState, uuid, nickname } = useAppSelector((state) => state.authReducer.state);

    return { authState, uuid, nickname };
}