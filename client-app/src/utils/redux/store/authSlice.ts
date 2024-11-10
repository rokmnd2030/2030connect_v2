import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 전역 상태로 사용되는 사용자 정보 지정
type authState = {
    authState: boolean;     // 로그인 여부
    uuid: string;           // 사용자 UUID
    nickname: string;       // 사용자 닉네임
}

type initialState = {
    state: authState;
}

// 사용자 정보 기본값(로그인되지 않았을 때)
const initialState: initialState = {
    state: {
        authState: false,
        uuid: 'uuid',
        nickname: 'nickname',
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<boolean>) => {
            return {
                state: {
                    authState: action.payload,
                    uuid: '',
                    nickname: '',
                }
            }
        },
        removeAuthState: () => {
            return initialState;
        },
    },
});

export const { setAuthState, removeAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;