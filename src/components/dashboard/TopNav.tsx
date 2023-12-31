'use client';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Image from 'next/image';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Button,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SideNav from './SideNav';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/auth/login/config';
import Logo from '../images/ShrimpLogo1.png';

export default function TopNav({ openNav, setOpenNav }: { openNav: boolean, setOpenNav: Function }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', width:'100%', bgcolor:'#90A7BF' }}>
            <AppBar 
                position="static"
                sx={{bgcolor:'#204E7C'}}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => { setOpenNav(true) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image src={Logo} height={40} width={40} alt='Logo Simodang'/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Simodang Admin
                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label='account of current user'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={() => {
                                signOut(auth);
                                delete localStorage['token'];
                                router.push('/auth/login');
                            }}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <SideNav openNav={openNav} setOpenNav={setOpenNav} />
        </Box>
    )
}