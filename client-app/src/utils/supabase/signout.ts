'use server'

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const signOut = async () => {

    // Supabase 인스턴스 가져옴
    const supabase = await createClient();

    // 로그아웃 처리
    const { error } = await supabase.auth.signOut();

    // 오류가 없다면 로그아웃 완료
    // 첫 페이지로 리다이렉트
    if (!error) {
        redirect('/');
    } else {
        console.log('로그아웃 실패', error);
    }
}

export { signOut }