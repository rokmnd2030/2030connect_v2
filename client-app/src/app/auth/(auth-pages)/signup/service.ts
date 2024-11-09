// 계정등록 서비스 함수
// 서버에서 실행되는 스크립트 (서버 콘솔에 메시지 출력)
'use server'

import { createClient } from '@/utils/supabase/server';
import z from 'zod';

// 계정 등록 양식에서 가져오는 회원 정보를 데이터베이스에 저장 (Supabase PostgreSQL)
// 계정 등록 페이지 회원 정보 필드가 변경되는 경우 타입 변경 필요
const signUp = async (userData: Readonly<{
    email: string;
    password: string;
    verify_password: string;
    firstname: string;
    lastname: string;
    birthdate: string;
}>) => {
    // 입력된 사용자 정보를 각 변수에 저장
    const { email, password, verify_password, firstname, lastname, birthdate } = userData;

    // 입력받은 회원 정보가 적절한지, 비어있지 않은지 재확인
    // 입력되지 않은 값이 있는지 확인
    if (!email || !password || !verify_password || !firstname || !lastname || !birthdate) {
        console.log('입력되지 않은 항목이 있습니다.');
        return false;
    }

    // 이메일 주소 유효성 검사
    if (!z.string().email(email)) {
        console.log('유효하지 않은 이메일 주소입니다.');
        return false;
    }

    // 패스워드 일치 검사
    if (password != verify_password) {
        console.log('입력된 패스워드가 일치하지 않습니다.');
        return false;
    }

    // Supabase Client 인스턴스 가져옴
    const supabase = await createClient();

    // Supabase Auth User 테이블에 사용자 정보 저장 (이메일, 패스워드)
    // 다른 사용자 정보는 MongoDB에 저장
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    // MongoDB에 사용자 세부 정보를 저장
    // Supabase에서 생성되는 User ID 사용(미구현)

    return true;
}

export { signUp }