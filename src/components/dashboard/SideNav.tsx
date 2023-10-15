import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Stack,
    SvgIcon,
    Typography,
    useMediaQuery
} from '@mui/material';
import { items } from './config';
import { SideNavItem } from './SideNavItem';
// import { Scrollbar } from '../scrollbar/scrollbar';

export const SideNav = (props: any) => {
    const { open, onClose } = props;
    const pathName = usePathname();
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const content = (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Box sx={{
                    alignmentItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    borderRadius: 1,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2,
                    p: '12px'
                }}>
                    <div>
                        <Typography
                            color='inherit'
                            variant='subtitle1'
                        >
                            Simodang
                        </Typography>
                        <Typography
                            color='neutral.400'
                            variant='body2'
                        >
                            Admin
                        </Typography>
                        <SvgIcon
                            fontSize="small"
                            sx={{ color: 'neutral.500' }}
                        >
                            <ChevronUpDownIcon />
                        </SvgIcon>
                    </div>
                </Box>
            </Box>
            <Divider sx={{ borderColor: 'neutral.700' }} />
        </div>
    )
}

