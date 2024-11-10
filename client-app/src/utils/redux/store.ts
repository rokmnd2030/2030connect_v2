import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/utils/redux/store/authSlice';

export const store = configureStore({
    reducer: {
        authReducer,
    }
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;