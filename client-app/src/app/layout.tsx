import React from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Header from '@/layout/Header';
import Body from '@/layout/Body';
import theme from '@/app/theme';
import '@/app/globals.css';

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
