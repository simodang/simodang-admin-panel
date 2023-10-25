'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton
} from '@mui/material';
import { items } from './config';

type Anchor = 'left';

export default function SideNav({openNav, setOpenNav}: {openNav:boolean, setOpenNav:Function}){
    const list = (anchor: Anchor) => (
        <Box>
            <List>
                { items.map((item) => {
                    return(
                        <ListItem key={item.key}>
                            <ListItemButton href={item.path}>
                                <Image src={item.icon} height={24} width={24} alt='Icon SideNavBar' style={{margin:'0px 5px 5px 0px'}}/>
                                {item.title}
                            </ListItemButton>
                        </ListItem>
                    )
                }) }
            </List>
        </Box>
    )
    return (
        <div>
            <Drawer
                anchor='left'
                open={openNav}
                onClose={() => setOpenNav(false)}
                sx={{display:'flex', padding:'60px'}}
            >
                {list('left')}
            </Drawer>
        </div>
    )
}