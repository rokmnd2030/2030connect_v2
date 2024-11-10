import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
    // 현재 경로를 구함
    const pathname = request.nextUrl.pathname;

    // 사용자 로그인 상태를 확인해야 하는 페이지 또는 경로
    if (pathname.startsWith('/forum') || pathname.startsWith('/advisorygroup') || pathname.startsWith('/auth')) {
        return await updateSession(request);
    }

    return NextResponse.next({ request });
}

export const config = {
    matcher: [
        // 사용자 인증이 필요한 페이지 또는 경로
        '/forum/:path*',
        '/advisorygroup/:path*',

        // 사용자 로그인 유무에 따라 달라지는 페이지 또는 경로
        '/auth/:path*',
    ],
}