'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import config from '@/config';
import menu from '@/menu';

const NavBox = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

export default function MenuDrawer(): React.ReactNode {
    const [open, setOpen] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const initialOpen: Record<string, boolean> = {};

        menu.forEach((item) => {
            initialOpen[item.id] = false;
        });

        setOpen(initialOpen);
    }, []);

    const handleToggle = (id: string) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            [id]: !prevOpen[id],
        }));
    }

    const router = useRouter();

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: {
                    md: 'block',
                    xs: 'none',
                },
                width: '100%',
                maxWidth: config.styles.layout.maxDrawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: '100%', maxWidth: config.styles.layout.maxDrawerWidth, boxSizing: 'border-box', top: config.styles.layout.appBarHeight },
            }}
        >
            <Box sx={{ overflow: 'auto', padding: 1, boxSizing: 'border-box' }}>
                <NavBox component="nav" disablePadding>
                    {menu.map((item, index) => (
                        <Box key={`mainmenu-${index}`} sx={[
                            open[item.id] ? { pb: 2 } : { pb: 0 }
                        ]}>
                            <ListItemButton
                                disableRipple
                                alignItems="flex-start"
                                onClick={() => handleToggle(item.id)}
                                sx={[
                                    {
                                        px: 3,
                                        pt: 2.5,
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(200,200,200,0.2)',
                                        },
                                    },
                                    open[item.id] ? { pb: 0 } : { pb: 2.5 },
                                ]}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        fontWeight: 600,
                                        lineHeight: '20px',
                                        mb: '2px',
                                    }}
                                    secondary={item.description}
                                    secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: open[item.id] ? 'rgba(0,0,0,0)' : 'rgba(50,50,50,0.5)',
                                    }}
                                    sx={{ my: 0 }}
                                />
                                <KeyboardArrowDown
                                    sx={[
                                        {
                                            mr: -1,
                                            opacity: 1,
                                            transition: '0.2s'
                                        },
                                        open[item.id] ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0)' },
                                    ]}
                                />
                            </ListItemButton>
                            {open[item.id] && typeof item.children &&
                                item.children?.map((subitem, index) => (
                                    <ListItemButton key={`submenu-${index}`} disableRipple sx={{
                                        py: 0,
                                        minHeight: 32,
                                        color: 'rgba(20,20,20,0.8)',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(200,200,200,0.2)',
                                        }
                                    }}>
                                        <ListItemIcon sx={{ color: '#666666' }}></ListItemIcon>
                                        <ListItemText
                                            primary={subitem.label}
                                            primaryTypographyProps={{
                                                fontSize: 13,
                                                fontWeight: 'medium',
                                            }}
                                            onClick={() => router.push(`${item.id}/${subitem.id}`)}
                                        />
                                    </ListItemButton>
                                ))}
                        </Box>
                    ))}
                </NavBox>
            </Box >
        </Drawer >
    )
}