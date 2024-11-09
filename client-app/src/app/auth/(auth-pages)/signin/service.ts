'use server'

import { createClient } from '@/utils/supabase/server';
import z from 'zod';

const signIn = async (userData: Readonly<{ email: string, password: string }>) => {
    // 입력된 사용자 정보를 각 변수에 저장
    const { email, password } = userData;

    // 입력받은 회원 정보가 적절한지, 비어있지 않은지 재확인
    // 입력되지 않은 값이 있는지 확인
    if (!email || !password) {
        console.log('입력되지 않은 항목이 있습니다.');
        return false;
    }

    // 이메일 주소 유효성 검사
    if (!z.string().email(email)) {
        console.log('유효하지 않은 이메일 주소입니다.');
        return false;
    }

    // Supabase Client 인스턴스 가져옴
    const supabase = await createClient();

    // Supabase Auth Sign in
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
}

export { signIn }