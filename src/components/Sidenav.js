import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TuneIcon from '@mui/icons-material/Tune';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import { useAppStore } from '../appStore';
import GroupsIcon from '@mui/icons-material/Groups';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (

    <Box sx={{ display: 'flex' }}>

      <Box height={30} />
      <CssBaseline />

      <Drawer variant="permanent" anchor='right' open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <DashboardIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </DashboardIcon>
              {/* <ListItemText className='slider-text' primary="الرئيسيه"  sx={{ opacity: open ? 1 : 0 }} /> */}
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الرئيسيه</h4>

            </ListItemButton>
          </ListItem>

          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/about") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <GroupsIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                < InboxIcon />
              </GroupsIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الاعضاء</h4>
            </ListItemButton>
          </ListItem>

          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <TuneIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </TuneIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الطلبات</h4>
            </ListItemButton>
          </ListItem>

          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <MarkUnreadChatAltIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </MarkUnreadChatAltIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>المراسلات</h4>
            </ListItemButton>
          </ListItem>

          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/governorates") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <FeedIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </FeedIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>معلومات</h4>
            </ListItemButton>
          </ListItem>

          <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/settings") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <SettingsIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </SettingsIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الأعدادات</h4>
            </ListItemButton>
          </ListItem>

          <ListItem className=' logout' disablePadding sx={{ display: "block", marginTop: "50%" }} onClick={() => { navigate("") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <LogoutIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </LogoutIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>تسجيل الخروج</h4>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}





