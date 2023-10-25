import { SvgIcon } from "@mui/material";
import HomeLogo from '../images/svg/home-icon.svg'
import ArticleLogo from '../images/svg/article-icon.svg';
import DeviceLogo from '../images/svg/device-icon.svg';
import MasterLogo from '../images/svg/master-icon.svg';
import UserLogo from '../images/svg/user-icon.svg';
import LogLogo from '../images/svg/log-icon.svg';

export const items = [
    {
        title: 'Home',
        path: '/',
        icon: (
            HomeLogo
        ),
        key: 'home'
    },
    {
        title: 'Devices',
        path:'/devices',
        icon: (
            DeviceLogo
        ),
        key: 'devices'
    },
    {
        title: 'Masters',
        path:'/masters',
        icon: (
            MasterLogo
        ),
        key: 'masters'
    },
    {
        title: 'Articles',
        path:'/articles',
        icon: (
            ArticleLogo
        ),
        key: 'articles'
    },
    {
        title: 'Users',
        path:'/users',
        icon: (
            UserLogo
        ),
        key: 'users'
    },
    {
        title: 'Logs',
        path:'/logs',
        icon: (
            LogLogo
        ),
        key: 'logs'
    }
];