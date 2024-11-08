import React from 'react';
import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
    title: '계정등록'
};

export default function Page(): React.ReactNode {
    return (
        <>
            <h1>계정등록</h1>
        </>
    );
}
