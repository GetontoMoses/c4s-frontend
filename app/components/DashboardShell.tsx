'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { UserRole, ROLE_LABELS } from '../lib/types';

const DRAWER_WIDTH = 252;

export interface NavItem { label: string; icon: React.ReactNode; href: string; }

interface Props {
  children: React.ReactNode;
  navItems: NavItem[];
  user: { name: string; role: UserRole; initials: string; church?: string };
  accentColor?: string;
}

export default function DashboardShell({ children, navItems, user, accentColor = '#C2622A' }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isCFS = user.role === 'cfs_admin' || user.role === 'cfs_staff' || user.role === 'counselor';
  const drawerBg = isCFS ? '#0A1A10' : '#1E0F05';
  const activeItemBg = isCFS ? 'rgba(58,107,74,0.4)' : 'rgba(194,98,42,0.28)';
  const activeColor = isCFS ? '#7EC89A' : '#E8845A';
  const dividerColor = 'rgba(253,246,238,0.08)';

  const DrawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: drawerBg, overflowX: 'hidden' }}>
      <Box sx={{ px: 2.5, py: 2.5, display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
        <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#C2622A,#3A6B4A)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1rem' }}>S</Typography>
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>ShepherdCare</Typography>
          {isCFS && <Typography sx={{ color: 'rgba(253,246,238,0.4)', fontSize: '0.6rem', fontFamily: '"Lora",serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CFS Platform</Typography>}
        </Box>
      </Box>

      <Box sx={{ mx: 1.5, mb: 1.5, p: 1.5, background: 'rgba(253,246,238,0.05)', borderRadius: 2, border: `1px solid ${dividerColor}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Avatar sx={{ bgcolor: accentColor, width: 34, height: 34, fontSize: '0.75rem', flexShrink: 0 }}>{user.initials}</Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ color: '#FDF6EE', fontSize: '0.8rem', fontFamily: '"Lora",serif', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</Typography>
            <Typography sx={{ color: 'rgba(253,246,238,0.42)', fontSize: '0.65rem', fontFamily: '"Lora",serif' }}>{ROLE_LABELS[user.role]}</Typography>
          </Box>
        </Box>
        {user.church && <Typography sx={{ color: 'rgba(253,246,238,0.3)', fontSize: '0.62rem', fontFamily: '"Lora",serif', mt: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.church}</Typography>}
      </Box>

      <Divider sx={{ borderColor: dividerColor, mx: 1.5, mb: 0.5 }} />

      <List sx={{ px: 1, flexGrow: 1, overflowY: 'auto', py: 0.5 }}>
        {navItems.map(item => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <ListItem key={item.href} disablePadding sx={{ mb: 0.3 }}>
              <ListItemButton
                component={Link} href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{ borderRadius: 2, px: 1.5, py: 0.85, background: active ? activeItemBg : 'transparent', '&:hover': { background: active ? activeItemBg : 'rgba(253,246,238,0.06)' } }}
              >
                <ListItemIcon sx={{ minWidth: 34, color: active ? activeColor : 'rgba(253,246,238,0.4)', '& svg': { fontSize: 18 } }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{ primary: { sx: { fontSize: '0.82rem', fontFamily: '"Lora",serif', fontWeight: active ? 600 : 400, color: active ? activeColor : 'rgba(253,246,238,0.65)' } } }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: dividerColor }} />
      <ListItemButton onClick={() => router.push('/auth/login')} sx={{ m: 1, borderRadius: 2, px: 1.5, py: 0.9 }}>
        <ListItemIcon sx={{ minWidth: 34, color: 'rgba(253,246,238,0.28)' }}><LogoutIcon sx={{ fontSize: 17 }} /></ListItemIcon>
        <ListItemText primary="Sign out" slotProps={{ primary: { sx: { fontSize: '0.8rem', fontFamily: '"Lora",serif', color: 'rgba(253,246,238,0.35)' } } }} />
      </ListItemButton>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#FDF6EE' }}>
      <Drawer variant="permanent" sx={{ width: DRAWER_WIDTH, flexShrink: 0, display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { width: DRAWER_WIDTH, border: 'none', overflowX: 'hidden' } }}>
        {DrawerContent}
      </Drawer>
      <Drawer variant="temporary" open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}
        sx={{ display: { md: 'none' }, '& .MuiDrawer-paper': { width: DRAWER_WIDTH } }}>
        {DrawerContent}
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar sx={{ minHeight: '60px !important', gap: 1 }}>
            <IconButton sx={{ display: { md: 'none' }, color: '#2C1A0E' }} onClick={() => setMobileOpen(true)}><MenuIcon /></IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Notifications">
              <IconButton sx={{ color: '#6B4C35', border: '1px solid rgba(194,98,42,0.18)', borderRadius: 2, p: 0.7 }}>
                <NotificationsNoneIcon sx={{ fontSize: 19 }} />
              </IconButton>
            </Tooltip>
            <Box onClick={e => setAnchorEl(e.currentTarget)} sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', px: 1.5, py: 0.5, borderRadius: 2, '&:hover': { background: '#F5EDE0' }, transition: 'background 0.15s' }}>
              <Avatar sx={{ bgcolor: accentColor, width: 30, height: 30, fontSize: '0.7rem' }}>{user.initials}</Avatar>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#2C1A0E', fontFamily: '"Lora",serif', lineHeight: 1.2 }}>{user.name}</Typography>
                <Typography sx={{ fontSize: '0.65rem', color: '#6B4C35', fontFamily: '"Lora",serif' }}>{ROLE_LABELS[user.role]}</Typography>
              </Box>
            </Box>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} slotProps={{ paper: { sx: { borderRadius: 2, border: '1px solid rgba(194,98,42,0.12)', boxShadow: '0 4px 24px rgba(44,26,14,0.1)' } } }}>
              <MenuItem onClick={() => { setAnchorEl(null); router.push('/auth/login'); }} sx={{ fontFamily: '"Lora",serif', fontSize: '0.85rem', gap: 1, color: '#2C1A0E' }}>
                <LogoutIcon sx={{ fontSize: 16 }} /> Sign out
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3.5 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
