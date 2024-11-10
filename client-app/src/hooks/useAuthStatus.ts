import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/utils/redux/store';
import { createClient } from '@/utils/supabase/client';
import { setAuthState, removeAuthState } from '@/utils/redux/store/authSlice';

export const useAuthStatus = async () => {
    const dispatch = useDispatch<AppDispatch>();

    // Supabase 인스턴스 생성
    const supabase = await createClient();

    // 사용자 정보 가져옴
    // 로그인되지 않은 경우 가져오는 정보 없음
    const { data: { user } } = await supabase.auth.getUser();

    // 사용자 로그인이 된 경우
    if (user) {
        const auth = {
            authStatus: true,
            uuid: user.id,
            nickname: '닉네임',
        }

        dispatch(setAuthState(auth));

        return auth;
    }

    // 로그인되지 않은 경우
    else {
        dispatch(removeAuthState());

        return false;
    }
}
