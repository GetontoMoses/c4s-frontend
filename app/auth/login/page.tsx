'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { DEMO_USERS, ROLE_DASHBOARDS } from '../../lib/types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const homeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f1E6C5',
      light: '#FAF4E1',
      dark: '#2D2D2D',
      contrastText: '#222222',
    },
    secondary: {
      main: '#FF6E21',
      light: '#FF6E1f',
      dark: '#222222',
      contrastText: '#FAF4E1',
    },
    background: {
      default: '#FAF4E1',
      paper: '#FAF4E1',
    },
    text: {
      primary: '#222222',
      secondary: '#2D2D2D',
    },
    divider: 'rgba(34,34,34,0.15)',
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
          '&.MuiButton-colorPrimary': { background: '#f1E6C5', color: '#222222', '&:hover': { background: '#FAF4E1' } },
          '&.MuiButton-colorSecondary': { background: '#FF6E21', color: '#FAF4E1', '&:hover': { background: '#FF6E1f' } },
        },
        outlined: { borderWidth: '1.5px', '&:hover': { borderWidth: '1.5px' } },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16, boxShadow: '0 2px 16px rgba(34,34,34,0.07)', border: '1px solid rgba(255,110,33,0.1)' } },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontFamily: '"Lora","Georgia",serif', fontWeight: 600 } } },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 8, height: 7, backgroundColor: 'rgba(255,110,33,0.15)' },
        bar: { borderRadius: 8, backgroundColor: '#FF6E21' },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: { fontWeight: 700, backgroundColor: '#FAF4E1', color: '#2D2D2D', fontFamily: '"Lora","Georgia",serif', fontSize: '0.73rem', textTransform: 'uppercase', letterSpacing: '0.08em' },
        body: { fontFamily: '"Lora","Georgia",serif', fontSize: '0.87rem' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#222222', color: '#FAF4E1' } } },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: 'transparent', boxShadow: 'none', color: '#222222' } } },
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
    MuiTab: { styleOverrides: { root: { fontFamily: '"Lora",serif', textTransform: 'none', fontWeight: 400, '&.Mui-selected': { fontWeight: 600, color: '#FF6E21' } } } },
    MuiTabs: { styleOverrides: { indicator: { backgroundColor: '#FF6E21' } } },
    MuiListItemText: { styleOverrides: { primary: { fontFamily: '"Lora",serif' }, secondary: { fontFamily: '"Lora",serif' } } },
  },
});

const demoAccounts = [
  { email: 'admin@cfs.org', role: 'CFS Super Admin', color: '#2D2D2D', bg: 'rgba(45,45,45,0.08)' },
  { email: 'churchadmin@nsc.org', role: 'Church Admin', color: '#FF6E21', bg: 'rgba(255,110,33,0.08)' },
  { email: 'pastor@nsc.org', role: 'Pastor', color: '#FF6E21', bg: 'rgba(255,110,33,0.08)' },
  { email: 'finance@nsc.org', role: 'Finance Officer', color: '#2D2D2D', bg: 'rgba(45,45,45,0.08)' },
  { email: 'leader@nsc.org', role: 'Ministry Leader', color: '#FF6E21', bg: 'rgba(255,110,33,0.08)' },
  { email: 'counselor@cfs.org', role: 'Counselor', color: '#2D2D2D', bg: 'rgba(45,45,45,0.08)' },
  { email: 'member@nsc.org', role: 'Church Member', color: '#2D2D2D', bg: 'rgba(241,230,197,0.3)' },
  { email: 'donor@org.ke', role: 'Donor / Partner', color: '#2D2D2D', bg: 'rgba(241,230,197,0.3)' },
];

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      const user = DEMO_USERS[email.toLowerCase().trim()];
      if (!user) { setError('No account found with that email address.'); setLoading(false); return; }
      if (user.password !== password) { setError('Incorrect password. Check the demo credentials below.'); setLoading(false); return; }
      router.push(ROLE_DASHBOARDS[user.role]);
    }, 600);
  };

  const quickLogin = (demoEmail: string) => {
    const user = DEMO_USERS[demoEmail];
    if (user) { setEmail(demoEmail); setPassword(user.password); }
  };

  return (
    <ThemeProvider theme={homeTheme}>
      <Box sx={{ minHeight: '100vh', background: '#FAF4E1', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Card sx={{ width: '100%', maxWidth: 960, borderRadius: 4, boxShadow: '0 12px 40px rgba(34,34,34,0.12)', border: '1px solid rgba(255,110,33,0.15)', overflow: 'hidden', background: '#FAF4E1' }}>
          <Grid container>
            {/* Branding side */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ background: '#222222', p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 'auto', md: 500 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: '9px', background: '#FF6E21', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Typography sx={{ color: '#FAF4E1', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.1rem' }}>S</Typography>
                </Box>
                <Typography sx={{ color: '#FAF4E1', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.4rem' }}>ShepherdCare</Typography>
              </Box>
              <Typography variant="h3" sx={{ color: '#f1E6C5', fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.25, fontWeight: 700, mb: 3 }}>
                A sanctuary<br />for shepherds
              </Typography>
              <Typography sx={{ color: 'rgba(250,244,225,0.7)', fontSize: '0.92rem', lineHeight: 1.8, fontFamily: '"Lora",serif', mb: 4 }}>
                Pastoral wellness, church administration, community support, and burnout prevention — all in one platform built for African churches.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['Fundraising','Admin Automation','Counseling','Knowledge Base'].map(f => (
                  <Chip key={f} label={f} size="small" sx={{ background: 'rgba(250,244,225,0.08)', color: 'rgba(250,244,225,0.85)', fontSize: '0.68rem', border: '1px solid rgba(250,244,225,0.12)' }} />
                ))}
              </Box>
            </Grid>

            {/* Login form side */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ background: '#FAF4E1', p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700, color: '#222222', fontFamily: '"Playfair Display",serif' }}>Sign in to your account</Typography>
              <Typography variant="body2" sx={{ color: '#2D2D2D', mb: 4, fontFamily: '"Lora",serif' }}>Use a demo account below to explore any role</Typography>

              {error && <Alert severity="error" sx={{ mb: 3, fontFamily: '"Lora",serif', fontSize: '0.85rem' }}>{error}</Alert>}

              <TextField fullWidth label="Email address" value={email} onChange={e => setEmail(e.target.value)} size="small" sx={{ mb: 2.5 }}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailIcon sx={{ fontSize: 17, color: '#FF6E21' }} /></InputAdornment> } }}
              />
              <TextField fullWidth label="Password" value={password} onChange={e => setPassword(e.target.value)} size="small" type={showPw ? 'text' : 'password'} sx={{ mb: 4 }}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockIcon sx={{ fontSize: 17, color: '#FF6E21' }} /></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton size="small" onClick={() => setShowPw(!showPw)}>{showPw ? <VisibilityOffIcon sx={{ fontSize: 17, color: '#2D2D2D' }} /> : <VisibilityIcon sx={{ fontSize: 17, color: '#2D2D2D' }} />}</IconButton></InputAdornment> } }}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
              <Button variant="contained" color="secondary" fullWidth size="large" onClick={handleLogin} disabled={loading} sx={{ py: 1.4, fontSize: '0.95rem', fontWeight: 600, mb: 4 }}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>

              <Divider sx={{ mb: 3 }}><Typography variant="caption" sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontWeight: 600 }}>Demo accounts — click to fill</Typography></Divider>

              <Grid container spacing={1}>
                {demoAccounts.map(d => (
                  <Grid size={{ xs: 6, sm: 3 }} key={d.email}>
                    <Box onClick={() => quickLogin(d.email)} sx={{ p: 1.2, borderRadius: 2, border: '1px solid rgba(255,110,33,0.2)', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s', '&:hover': { background: d.bg, transform: 'translateY(-1px)' } }}>
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: d.color, fontFamily: '"Lora",serif', lineHeight: 1.3 }}>{d.role}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="caption" sx={{ color: '#2D2D2D', display: 'block', textAlign: 'center', mt: 3, fontFamily: '"Lora",serif' }}>
                All passwords follow the pattern: role + 123 (e.g. admin123, pastor123)
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
