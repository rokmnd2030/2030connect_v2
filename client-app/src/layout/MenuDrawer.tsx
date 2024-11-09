'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import CustomMenuDrawer from '@/layout/include/_menuDrawer';

export default function MenuDrawer(): React.ReactNode {
    const pathname = usePathname();
    const hideMenuDrawer = pathname.match(/^\/auth(\/|$)/);

    return (
        <>
            {!hideMenuDrawer &&
                <>
                    <CustomMenuDrawer />
                </>
            }
        </>
    );
}