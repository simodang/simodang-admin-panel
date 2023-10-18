'use client';
import { useState } from 'react';
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
                        <ListItem>
                            <ListItemButton href={item.path}>
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