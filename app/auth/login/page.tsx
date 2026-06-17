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

const demoAccounts = [
  { email: 'admin@cfs.org', role: 'CFS Super Admin', color: '#3A6B4A', bg: '#EAF3DE' },
  { email: 'churchadmin@nsc.org', role: 'Church Admin', color: '#C2622A', bg: '#FAECE7' },
  { email: 'pastor@nsc.org', role: 'Pastor', color: '#C2622A', bg: '#FAECE7' },
  { email: 'finance@nsc.org', role: 'Finance Officer', color: '#3A6B4A', bg: '#EAF3DE' },
  { email: 'leader@nsc.org', role: 'Ministry Leader', color: '#C2622A', bg: '#FAECE7' },
  { email: 'counselor@cfs.org', role: 'Counselor', color: '#3A6B4A', bg: '#EAF3DE' },
  { email: 'member@nsc.org', role: 'Church Member', color: '#6B4C35', bg: '#F5EDE0' },
  { email: 'donor@org.ke', role: 'Donor / Partner', color: '#6B4C35', bg: '#F5EDE0' },
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
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(160deg,#1E0F05 0%,#2C1A0E 45%,#3A6B4A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 980 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Branding */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 0 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#C2622A,#3A6B4A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.4rem' }}>S</Typography>
                </Box>
                <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.5rem' }}>ShepherdCare</Typography>
              </Box>
              <Typography variant="h3" sx={{ color: '#FDF6EE', fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.3, mb: 2 }}>
                A sanctuary for shepherds
              </Typography>
              <Typography sx={{ color: 'rgba(253,246,238,0.6)', fontSize: '0.97rem', lineHeight: 1.8, fontFamily: '"Lora",serif' }}>
                Pastoral wellness, church administration, community support, and burnout prevention — all in one platform built for African churches.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, mt: 3, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {['Fundraising','Admin Automation','Counseling','Knowledge Base'].map(f => (
                  <Chip key={f} label={f} size="small" sx={{ background: 'rgba(253,246,238,0.1)', color: 'rgba(253,246,238,0.7)', fontSize: '0.72rem', border: '1px solid rgba(253,246,238,0.15)' }} />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Login form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ background: '#FFFAF4' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography variant="h5" sx={{ mb: 0.5 }}>Sign in to your account</Typography>
                <Typography variant="body2" sx={{ color: '#6B4C35', mb: 3 }}>Use a demo account below to explore any role</Typography>

                {error && <Alert severity="error" sx={{ mb: 2.5, fontFamily: '"Lora",serif', fontSize: '0.85rem' }}>{error}</Alert>}

                <TextField fullWidth label="Email address" value={email} onChange={e => setEmail(e.target.value)} size="small" sx={{ mb: 2 }}
                  slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailIcon sx={{ fontSize: 17, color: '#6B4C35' }} /></InputAdornment> } }}
                />
                <TextField fullWidth label="Password" value={password} onChange={e => setPassword(e.target.value)} size="small" type={showPw ? 'text' : 'password'} sx={{ mb: 3 }}
                  slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockIcon sx={{ fontSize: 17, color: '#6B4C35' }} /></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton size="small" onClick={() => setShowPw(!showPw)}>{showPw ? <VisibilityOffIcon sx={{ fontSize: 17 }} /> : <VisibilityIcon sx={{ fontSize: 17 }} />}</IconButton></InputAdornment> } }}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                />
                <Button variant="contained" color="primary" fullWidth size="large" onClick={handleLogin} disabled={loading} sx={{ py: 1.3, fontSize: '1rem', mb: 3 }}>
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>

                <Divider sx={{ mb: 2.5 }}><Typography variant="caption" sx={{ color: '#6B4C35', fontFamily: '"Lora",serif' }}>Demo accounts — click to fill</Typography></Divider>

                <Grid container spacing={1}>
                  {demoAccounts.map(d => (
                    <Grid size={{ xs: 6, sm: 3 }} key={d.email}>
                      <Box onClick={() => quickLogin(d.email)} sx={{ p: 1.2, borderRadius: 2, border: `1px solid ${d.bg === '#FAECE7' ? 'rgba(194,98,42,0.2)' : d.bg === '#EAF3DE' ? 'rgba(58,107,74,0.2)' : 'rgba(107,76,53,0.2)'}`, cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s', '&:hover': { background: d.bg, transform: 'translateY(-1px)' } }}>
                        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: d.color, fontFamily: '"Lora",serif', lineHeight: 1.3 }}>{d.role}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="caption" sx={{ color: '#6B4C35', display: 'block', textAlign: 'center', mt: 2 }}>
                  All passwords follow the pattern: role + 123 (e.g. admin123, pastor123)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
