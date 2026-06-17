'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Features', href: '#features' },
  { label: 'Find Church', href: '#findchurch' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function HomeNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255,250,244,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(194,98,42,0.1)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(44,26,14,0.06)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: '9px', background: '#C2622A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.05rem' }}>S</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: scrolled ? '#2C1A0E' : '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1rem', lineHeight: 1.1, transition: 'color 0.3s', display: { xs: 'none', sm: 'block' } }}>
                  Care for Shepherds
                </Typography>
                <Typography sx={{ color: scrolled ? '#6B4C35' : 'rgba(253,246,238,0.45)', fontFamily: '"Lora",serif', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s', display: { xs: 'none', sm: 'block' } }}>
                  Pastoral Wellness Platform
                </Typography>
              </Box>
            </Link>

            {/* Desktop nav */}
            <Stack direction="row" spacing={0} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks.map(link => (
                <Box key={link.href} component="a" href={link.href}
                  sx={{
                    px: 1.8, py: 0.8, textDecoration: 'none', borderRadius: 1.5,
                    color: scrolled ? '#2C1A0E' : 'rgba(253,246,238,0.8)',
                    fontFamily: '"Lora",serif', fontSize: '0.88rem', fontWeight: 500,
                    transition: 'all 0.2s', cursor: 'pointer',
                    '&:hover': { color: '#C2622A', background: scrolled ? '#FAECE7' : 'rgba(194,98,42,0.15)' },
                  }}>
                  {link.label}
                </Box>
              ))}
            </Stack>

            {/* Desktop actions */}
            <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button component={Link} href="/auth/login"
                sx={{ color: scrolled ? '#2C1A0E' : 'rgba(253,246,238,0.8)', fontFamily: '"Lora",serif', fontSize: '0.88rem', fontWeight: 600, px: 2, '&:hover': { color: '#C2622A', background: 'transparent' } }}>
                Login
              </Button>
              <Button component={Link} href="/auth/login" variant="contained" color="primary" endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                sx={{ fontFamily: '"Lora",serif', fontSize: '0.85rem', fontWeight: 600, px: 2.5, py: 0.9, boxShadow: '0 2px 12px rgba(194,98,42,0.3)' }}>
                Register Church
              </Button>
            </Stack>

            {/* Mobile hamburger */}
            <IconButton onClick={() => setMobileOpen(true)} sx={{ display: { md: 'none' }, color: scrolled ? '#2C1A0E' : '#FDF6EE' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      {/* Spacer for fixed nav */}
      <Box sx={{ height: 72 }} />

      {/* Mobile drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 280, background: '#1A0A00' } } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1rem' }}>
            Care for Shepherds
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'rgba(253,246,238,0.5)' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(253,246,238,0.08)' }} />
        <List sx={{ px: 1, pt: 2 }}>
          {navLinks.map(link => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)}
                sx={{ borderRadius: 2, mb: 0.3, py: 1.2, '&:hover': { background: 'rgba(194,98,42,0.15)' } }}>
                <Typography sx={{ color: 'rgba(253,246,238,0.75)', fontFamily: '"Lora",serif', fontSize: '0.92rem' }}>{link.label}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(253,246,238,0.08)', my: 2 }} />
        <Box sx={{ px: 2, pb: 3 }}>
          <Button component={Link} href="/auth/login" fullWidth variant="outlined"
            sx={{ mb: 1.5, color: 'rgba(253,246,238,0.8)', borderColor: 'rgba(253,246,238,0.25)', fontFamily: '"Lora",serif', '&:hover': { borderColor: '#C2622A', color: '#C2622A' } }}>
            Login
          </Button>
          <Button component={Link} href="/auth/login" fullWidth variant="contained" color="primary"
            sx={{ fontFamily: '"Lora",serif', fontWeight: 600 }}>
            Register Your Church
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
