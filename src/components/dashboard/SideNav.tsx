'use client';
import { useState } from 'react';
import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
} from '@mui/material';

type Anchor = 'left';

export default function SideNav(){
    const [state, setState] = useState ({left: false});

    const list = (anchor: Anchor) => (
        <Box>
            
        </Box>
    )
}