import axios from 'axios';
import z from 'zod';

// 계정 등록 양식에서 가져오는 회원 정보를 데이터베이스에 저장 (Supabase PostgreSQL)
// 계정 등록 페이지 회원 정보 필드가 변경되는 경우 타입 변경 필요
const post = (userData: Readonly<{
    email: string;
    password: string;
    verify_password: string;
    firstname: string;
    lastname: string;
    birthdate: string;
}>) => {
    const { email, password, verify_password, firstname, lastname, birthdate } = userData;

    // 입력받은 회원 정보가 적절한지, 비어있지 않은지 재확인
    // 1. 입력되지 않은 값이 있는지 확인
    if (!email || !password || !verify_password || !firstname || !lastname || !birthdate) {
        console.log('입력되지 않은 항목이 있습니다.');
        return false;
    }

    // 2. 이메일 주소 유효성 검사
    if (!z.string().email(email)) {
        console.log('유효하지 않은 이메일 주소입니다.');
        return false;
    }
}

export { post }