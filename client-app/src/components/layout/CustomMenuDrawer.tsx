import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import config from '@/config';
import siteStructure from '@/site-structure';

import HomeIcon from '@mui/icons-material/Home';

// 사용자정의 사이드메뉴 상단 박스 생성
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

// 사용자정의 사이드메뉴 컴포넌트
export default function CustomMenuDrawer(): React.ReactNode {
    // 사이드바 1단계 메뉴 열림/펼침 변수 저장 state 생성
    const [open, setOpen] = useState<Record<string, boolean>>({});

    // 라우터 hook
    const router = useRouter();

    // 현재 경로를 분해하여 배열에 저장
    // selectedPath[0]: 사용되지 않음
    // selectedPath[1]: 1단계 경로 (1단계 경로가 없으면 루트)
    // selectedPath[2]: 2단계 경로 (1단계 경로는 있으나 2단계 경로가 없으면 1단계 경로)
    const pathname = usePathname();
    const selectedPath = pathname.split('/');

    useEffect(() => {
        const initialOpen: Record<string, boolean> = {};

        siteStructure.forEach((item) => {
            // 현재 1단계 경로에 접근한 경우 해당 메뉴의 1단계 메뉴는 펼침
            if (selectedPath[1] == item.id) {
                initialOpen[item.id] = true;
            } else {
                initialOpen[item.id] = false;
            }
        });

        setOpen(initialOpen);
    }, []);

    const handleToggle = (id: string) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            [id]: !prevOpen[id],
        }));
    }

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
                [`& .MuiDrawer-paper`]: {
                    width: '100%',
                    maxWidth: config.styles.layout.maxDrawerWidth,
                    boxSizing: 'border-box',
                    top: config.styles.layout.appBarHeight,
                    background: 'rgba(255, 255, 255, 0)',
                    borderRight: '2px solid rgba(0, 0, 0, 0.04)',
                },
            }}
        >
            <Box sx={{ overflow: 'auto', padding: 1, boxSizing: 'border-box' }}>
                <NavBox component="nav" disablePadding>
                    <Box sx={{
                        mt: 2,
                        mb: 4,
                    }}>
                        <ListItemButton
                            disableRipple
                            alignItems="flex-start"
                            onClick={() => router.push('/')}
                            sx={{
                                px: 3,
                                py: 1,
                                borderRadius: '8px',
                                transition: 'box-shadow 0.3s, padding 0.3s, background 0.3s',
                                '&.Mui-selected': {
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.1)',
                                    '&:hover': {
                                        background: 'rgba(255,255,255,1)',
                                    }
                                },
                                '&:hover': {
                                    background: 'rgba(255,255,255,1)',
                                },
                            }}
                            selected={!selectedPath[2] ? true : false}
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ my: 0 }}
                                primary="홈"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: 400,
                                    lineHeight: '36px',
                                }}
                            />
                        </ListItemButton>
                    </Box>
                    {siteStructure.map((item, index) => (
                        <Box
                            key={`mainmenu-${index}`}
                            sx={{
                                pb: open[item.id] ? 4 : 1,
                            }}
                        >
                            <ListItemButton
                                disableRipple
                                alignItems="flex-start"
                                onClick={() => handleToggle(item.id)}
                                sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: open[item.id] ? 0 : 2.5,
                                    borderRadius: '8px',
                                    transition: 'padding 0.3s, background 0.3s',
                                    '&:hover': {
                                        background: 'rgba(255,255,255,1)',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{
                                    mt: open[item.id] ? '0px' : 'initial',
                                }}>{item.icon}</ListItemIcon>
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: 15,
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
                                        sx: {
                                            transition: 'color 0.3s, opacity 0.3s',
                                        }
                                    }}
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
                            {typeof item.children &&
                                <Collapse in={open[item.id]}>
                                    {
                                        item.children?.map((subitem, index) => (
                                            <ListItemButton
                                                key={`submenu-${index}`}
                                                disableRipple
                                                sx={{
                                                    py: 1,
                                                    minHeight: 32,
                                                    color: 'rgba(20,20,20,0.8)',
                                                    borderRadius: '8px',
                                                    transition: 'box-shadow 0.3s, background 0.3s',
                                                    '&.Mui-selected': {
                                                        backgroundColor: '#ffffff',
                                                        boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.1)',
                                                        '&:hover': {
                                                            background: 'rgba(255,255,255,1)',
                                                        }
                                                    },
                                                    '&:hover': {
                                                        background: 'rgba(255,255,255,1)',
                                                    }
                                                }}
                                                selected={selectedPath[2] == subitem.id ? true : false}
                                            >
                                                <ListItemIcon>{subitem.icon}</ListItemIcon>
                                                <ListItemText
                                                    primary={subitem.label}
                                                    primaryTypographyProps={{
                                                        fontSize: 15,
                                                        fontWeight: 'medium',
                                                    }}
                                                    onClick={() => router.push(`/${item.id}/${subitem.id}`)}
                                                />
                                            </ListItemButton>
                                        ))
                                    }
                                </Collapse>
                            }
                        </Box>
                    ))}
                </NavBox>
            </Box>
        </Drawer>
    )
}