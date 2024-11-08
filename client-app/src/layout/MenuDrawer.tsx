'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import CustomMenuDrawer from '@/layout/include/_menuDrawer';
import config from '@/config';

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