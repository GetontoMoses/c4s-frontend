'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#C2622A', light: '#E8845A', dark: '#8B3E14', contrastText: '#FDF6EE' },
    secondary: { main: '#3A6B4A', light: '#5A9B6A', dark: '#244530', contrastText: '#F5F0E8' },
    background: { default: '#FDF6EE', paper: '#FFFAF4' },
    text: { primary: '#2C1A0E', secondary: '#6B4C35' },
    success: { main: '#3A6B4A', light: '#EAF3DE' },
    warning: { main: '#C2622A', light: '#FAECE7' },
    error: { main: '#A32D2D' },
    divider: 'rgba(194,98,42,0.15)',
  },
  typography: {
    fontFamily: '"Lora","Georgia",serif',
    h1: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 600 },
    h5: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 600 },
    h6: { fontFamily: '"Playfair Display","Georgia",serif', fontWeight: 600 },
    button: { fontFamily: '"Lora","Georgia",serif', fontWeight: 600, textTransform: 'none' },
    overline: { fontFamily: '"Lora","Georgia",serif', letterSpacing: '0.1em', fontWeight: 600 },
    caption: { fontFamily: '"Lora","Georgia",serif' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: '9px 22px', boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
        contained: {
          '&.MuiButton-colorPrimary': { background: '#C2622A', '&:hover': { background: '#8B3E14' } },
          '&.MuiButton-colorSecondary': { background: '#3A6B4A', '&:hover': { background: '#244530' } },
        },
        outlined: { borderWidth: '1.5px', '&:hover': { borderWidth: '1.5px' } },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16, boxShadow: '0 2px 16px rgba(44,26,14,0.07)', border: '1px solid rgba(194,98,42,0.1)' } },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontFamily: '"Lora","Georgia",serif', fontWeight: 600 } } },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 8, height: 7, backgroundColor: 'rgba(194,98,42,0.15)' },
        bar: { borderRadius: 8, backgroundColor: '#C2622A' },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: { fontWeight: 700, backgroundColor: '#FDF6EE', color: '#6B4C35', fontFamily: '"Lora","Georgia",serif', fontSize: '0.73rem', textTransform: 'uppercase', letterSpacing: '0.08em' },
        body: { fontFamily: '"Lora","Georgia",serif', fontSize: '0.87rem' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#1E0F05', color: '#FDF6EE' } } },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: 'transparent', boxShadow: 'none', color: '#2C1A0E' } } },
    MuiAccordion: {
      styleOverrides: {
        root: { fontFamily: '"Lora",serif', '&:before': { display: 'none' } },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { fontFamily: '"Lora",serif' },
        content: { margin: '14px 0' },
      },
    },
    MuiAvatar: { styleOverrides: { root: { fontFamily: '"Playfair Display",serif', fontWeight: 700 } } },
    MuiTextField: { styleOverrides: { root: { '& .MuiInputBase-root': { fontFamily: '"Lora",serif' }, '& .MuiInputLabel-root': { fontFamily: '"Lora",serif' } } } },
    MuiTab: { styleOverrides: { root: { fontFamily: '"Lora",serif', textTransform: 'none', fontWeight: 400, '&.Mui-selected': { fontWeight: 600, color: '#C2622A' } } } },
    MuiTabs: { styleOverrides: { indicator: { backgroundColor: '#C2622A' } } },
    MuiListItemText: { styleOverrides: { primary: { fontFamily: '"Lora",serif' }, secondary: { fontFamily: '"Lora",serif' } } },
  },
});
export default theme;
