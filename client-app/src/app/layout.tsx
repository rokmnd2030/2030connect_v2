// 최상위 레이아웃 스크립트
// 원칙적으로 클라이언트용 스크립트 사용 금지
// 'use server'

import React from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Header from '@/layout/Header';
import Body from '@/layout/Body';
import theme from '@/app/theme';
import '@/app/globals.css';

// 최상위 레이아웃에서 지정하는 메타데이터
// 기본 타이틀과 타이틀 템플릿을 지정하여 앱 전체에서 일관된 타이틀명 유지
// 각 페이지마다 타이틀 지정 가능
export const metadata: Metadata = {
  title: {
    default: '2030 Connect - 청년과 함께하는 정책',
    template: '%s | 2030 Connect',
  },
  description: '2030 자문단과 직접 소통하며 청년세대 의견을 정책에 반영하는 새로운 플랫폼',
  keywords: ['청년자문단', '2030자문단', '청년'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {

  return (
    <html lang="ko">
      <body className="antialiased">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Body>
              {children}
            </Body>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
