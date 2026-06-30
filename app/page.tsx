'use client';
import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import HomeNavigation from './components/HomeNavigation';
import HomeFooter from './components/HomeFooter';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Link from 'next/link';
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


// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Stat counter component ────────────────────────────────────────────────────
function StatCounter({ value, suffix = '', prefix = '', label }: { value: number; suffix?: string; prefix?: string; label: string }) {
  const { ref, inView } = useInView();
  const count = useCountUp(value, 1800, inView);
  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2.4rem', md: '3.2rem' }, color: '#FF6E21', lineHeight: 1 }}>
        {prefix}{count.toLocaleString()}{suffix}
      </Typography>
      <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.88rem', mt: 0.5 }}>{label}</Typography>
    </Box>
  );
}

// ── Church search section ─────────────────────────────────────────────────────
const DEMO_CHURCHES = [
  { name: "Nairobi Shepherd's Church", county: 'Nairobi', members: 342, pastor: 'Pastor James Kariuki', campaigns: 2, code: 'NSC-2024' },
  { name: 'Rift Valley Pentecostal Assembly', county: 'Nakuru', members: 218, pastor: 'Pastor Grace Wanjiru', campaigns: 1, code: 'RVP-2024' },
  { name: 'Kisumu Lakeside Church', county: 'Kisumu', members: 489, pastor: 'Pastor Ruth Achieng', campaigns: 3, code: 'KLC-2023' },
  { name: 'Mombasa Coastal Fellowship', county: 'Mombasa', members: 156, pastor: 'Pastor Samuel Kipchoge', campaigns: 1, code: 'MCF-2024' },
  { name: 'Nyeri Highland Church', county: 'Nyeri', members: 312, pastor: 'Pastor Moses Wainaina', campaigns: 2, code: 'NHC-2023' },
];

function ChurchSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof DEMO_CHURCHES>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearched(true);
    const q = query.toLowerCase();
    setResults(DEMO_CHURCHES.filter(c => c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.pastor.toLowerCase().includes(q)));
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto' }}>
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <TextField
          fullWidth value={query} onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder="Search by church name, county, pastor, or church code…"
          size="medium"
          sx={{
            '& .MuiOutlinedInput-root': { borderRadius: 2, background: '#FAF4E1', fontFamily: '"Lora",serif', fontSize: '0.95rem' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,110,33,0.25)' },
          }}
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: '#FF6E21', fontSize: 22 }} /></InputAdornment> } }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ px: 3.5, whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
          Find Church
        </Button>
      </Box>

      {searched && (
        <Box sx={{ mt: 2.5 }}>
          {results.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 3, color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.9rem' }}>
              No churches found for &quot;{query}&quot;. Try a different name, county, or code.
            </Box>
          ) : (
            <Grid container spacing={2}>
              {results.map((c, i) => (
                <Grid size={{ xs: 12 }} key={i}>
                  <Box sx={{ p: 2.5, background: '#FAF4E1', borderRadius: 2, border: '1px solid rgba(255,110,33,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1.5, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 20px rgba(34,34,34,0.1)' } }}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#FF6E21', width: 44, height: 44, fontFamily: '"Playfair Display",serif', fontSize: '1rem' }}>
                        {c.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: '#222222', fontFamily: '"Playfair Display",serif', fontSize: '1rem', mb: 0.2 }}>{c.name}</Typography>
                        <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.8rem' }}>{c.pastor} · {c.county} County</Typography>
                        <Box sx={{ display: 'flex', gap: 0.8, mt: 0.5 }}>
                          <Chip label={`${c.members} members`} size="small" sx={{ background: '#FAF4E1', color: '#FF6E21', fontSize: '0.65rem' }} />
                          <Chip label={`${c.campaigns} active campaign${c.campaigns > 1 ? 's' : ''}`} size="small" sx={{ background: 'rgba(45,45,45,0.08)', color: '#2D2D2D', fontSize: '0.65rem' }} />
                          <Chip label={c.code} size="small" sx={{ background: 'rgba(241,230,197,0.3)', color: '#2D2D2D', fontSize: '0.65rem' }} />
                        </Box>
                      </Box>
                    </Box>
                    <Button variant="contained" color="primary" size="small" component={Link} href="/auth/login" endIcon={<ArrowForwardIcon />} sx={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                      View Dashboard
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}

      <Typography sx={{ textAlign: 'center', color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.8rem', mt: 2 }}>
        Try: &quot;Nairobi&quot;, &quot;Kisumu&quot;, &quot;NSC-2024&quot;, or a pastor name
      </Typography>
    </Box>
  );
}

// ── Pricing plans ─────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Starter', price: 'Free', period: 'forever', color: '#2D2D2D', bg: '#FAF4E1',
    desc: 'For small churches getting started with pastoral wellness.',
    features: ['1 active wellness campaign', 'Up to 50 donors', 'M-Pesa integration', 'Public campaign page', 'Email receipts', 'Basic reporting'],
    cta: 'Start Free', featured: false,
  },
  {
    name: 'Growth', price: 'KES 2,500', period: '/month', color: '#FF6E21', bg: '#FF6E21',
    desc: 'For growing churches serious about pastoral care.',
    features: ['Unlimited campaigns', 'Unlimited donors', 'M-Pesa + Card payments', 'Wellness tracker & assessments', 'Retreat marketplace access', '2-sig approval workflows', 'Full audit trail & receipts', 'WhatsApp notifications', 'Priority support'],
    cta: 'Start 30-day trial', featured: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', color: '#2D2D2D', bg: '#FAF4E1',
    desc: 'For denominations and networks of multiple churches.',
    features: ['Everything in Growth', 'Multi-church dashboard', 'Custom branding', 'CFS counselor network access', 'Dedicated account manager', 'API access', 'Custom integrations', 'SLA guarantee'],
    cta: 'Contact Sales', featured: false,
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How do congregation members donate?', a: 'Members can donate via M-Pesa STK Push (no app needed), Visa/Mastercard, or PayPal. A shareable campaign link and QR code are generated automatically. No account required to donate.' },
  { q: 'How do I know the money reaches the pastor?', a: 'Every disbursement requires two authorised signatures before funds are released. All transactions appear on a public fund ledger visible to the congregation. Proof of use (receipts, booking confirmations) must be uploaded for every withdrawal.' },
  { q: 'Can I use this if our church is not in Nairobi?', a: 'Yes. ShepherdCare works for any church in Kenya. We support all counties. International expansion (Uganda, Tanzania, Rwanda) is on our roadmap for 2026.' },
  { q: 'What is the difference between this and a church bank account?', a: 'A church account holds all funds together. ShepherdCare creates a ring-fenced Pastoral Wellness Fund that is legally and operationally separate from church operations. The money raised here can only be used for the pastor\'s wellbeing — no exceptions.' },
  { q: 'Does the pastor see how much has been raised for them?', a: 'Yes. The pastor has their own secure dashboard showing their wellness fund balance, upcoming booked retreats, wellness score history, and counseling appointments.' },
  { q: 'How does the wellness score work?', a: 'Our built-in monthly assessment (5 dimensions, 25 questions) generates a wellness score that tracks over time. No external subscription needed. CFS-assigned counselors can also update scores directly after sessions.' },
];

const testimonials = [
  { quote: 'For 12 years I carried everything — the admin, the counseling, the finance. ShepherdCare gave my congregation a way to carry something for me. That sabbatical changed my family.', author: 'Pastor James Kariuki', role: 'Senior Pastor', church: "Nairobi Shepherd's Church", initials: 'JK' },
  { quote: 'The 2-signature approval gave our board confidence. Every shilling is accounted for. Our congregation gave more generously because they could see exactly where it went.', author: 'Mary Njoroge', role: 'Church Administrator', church: "Nairobi Shepherd's Church", initials: 'MN' },
  { quote: 'Our denomination rolled this out to 14 churches last quarter. The counseling and wellness tracking features alone have transformed how we care for our pastoral staff.', author: 'Bishop Daniel Mutuku', role: 'Presiding Bishop', church: 'East Africa Evangelical Council', initials: 'DM' },
];

// ── Main page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsInView(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <ThemeProvider theme={homeTheme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAF4E1' }}>
        <HomeNavigation />

        {/* ── HERO ─────────────────────────────────────────────────────────────── */}
        <Box sx={{
          position: 'relative', overflow: 'hidden',
          background: '#222222',
          pt: { xs: 10, md: 14 }, pb: { xs: 10, md: 16 },
          '&::before': {
            content: '""', position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,110,33,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(241,230,197,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
            background: 'linear-gradient(to bottom, transparent, #FAF4E1)',
            pointerEvents: 'none', zIndex: 2,
          },
        }}>
          {/* Decorative geometric shapes */}
          <Box sx={{ position: 'absolute', top: '8%', right: '5%', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(255,110,33,0.12)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', top: '15%', right: '8%', width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(255,110,33,0.08)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', bottom: '20%', left: '3%', width: 240, height: 240, borderRadius: '50%', border: '1px solid rgba(241,230,197,0.1)', pointerEvents: 'none' }} />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={6} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Chip label="Trusted by 187 churches across Kenya" size="small" sx={{ background: 'rgba(255,110,33,0.15)', color: '#FF6E21', border: '1px solid rgba(255,110,33,0.3)', fontFamily: '"Lora",serif', fontSize: '0.72rem', fontWeight: 600, mb: 3 }} />
                <Typography variant="h1" sx={{
                  fontFamily: '"Playfair Display",serif', fontWeight: 700,
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                  color: '#FAF4E1', lineHeight: 1.12, letterSpacing: '-0.02em', mb: 2.5,
                }}>
                  The shepherd<br />
                  <Box component="span" sx={{ color: '#f1E6C5', fontStyle: 'italic' }}>deserves rest</Box><br />
                  too.
                </Typography>
                <Typography sx={{ color: 'rgba(250,244,225,0.65)', fontFamily: '"Lora",serif', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.85, mb: 4, maxWidth: 480 }}>
                  ShepherdCare gives African churches a structured, transparent way to fundraise for their pastor&apos;s wellbeing — sabbaticals, counseling, retreats, and rest — powered by M-Pesa and built on accountability.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button variant="contained" color="primary" size="large" component={Link} href="/auth/register"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 3.5, py: 1.5, fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(255,110,33,0.35)' }}>
                    Register Your Church
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {[['No credit card required', ''], ['M-Pesa integrated', ''], ['Free to start', '']].map(([t]) => (
                    <Box key={t} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <CheckIcon sx={{ fontSize: 15, color: '#FF6E21' }} />
                      <Typography sx={{ color: 'rgba(250,244,225,0.5)', fontFamily: '"Lora",serif', fontSize: '0.8rem' }}>{t}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Hero visual — dashboard mockup */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ position: 'relative' }}>
                  {/* Main card */}
                  <Box sx={{ background: 'rgba(250,244,225,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(250,244,225,0.12)', borderRadius: 3, p: 3, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#FF6E21', width: 42, height: 42, fontFamily: '"Playfair Display",serif' }}>JK</Avatar>
                      <Box>
                        <Typography sx={{ color: '#FAF4E1', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '0.95rem' }}>Pastor James Kariuki</Typography>
                        <Typography sx={{ color: 'rgba(250,244,225,0.5)', fontFamily: '"Lora",serif', fontSize: '0.72rem' }}>Nairobi Shepherd&apos;s Church · Sabbatical Fund</Typography>
                      </Box>
                      <Chip label="Active" size="small" sx={{ ml: 'auto', background: '#FAF4E1', color: '#222222', fontSize: '0.65rem', fontWeight: 700 }} />
                    </Box>
                    <Box sx={{ mb: 1.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                        <Typography sx={{ color: 'rgba(250,244,225,0.5)', fontSize: '0.75rem', fontFamily: '"Lora",serif' }}>Raised</Typography>
                        <Typography sx={{ color: '#FAF4E1', fontWeight: 700, fontSize: '0.88rem', fontFamily: '"Lora",serif' }}>KES 84,500 / 120,000</Typography>
                      </Box>
                      <Box sx={{ height: 8, borderRadius: 4, background: 'rgba(250,244,225,0.1)', overflow: 'hidden' }}>
                        <Box sx={{ height: '100%', width: '70%', background: 'linear-gradient(90deg,#FF6E1f,#FF6E21,#f1E6C5)', borderRadius: 4, transition: 'width 2s ease' }} />
                      </Box>
                      <Typography sx={{ color: 'rgba(250,244,225,0.4)', fontSize: '0.68rem', fontFamily: '"Lora",serif', mt: 0.4 }}>70% funded · 47 donors · 23 days left</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                      {[['KES 84.5K', 'Raised'], ['47', 'Donors'], ['23d', 'Remaining']].map(([v, l]) => (
                        <Box key={l} sx={{ flex: 1, p: 1.2, background: 'rgba(250,244,225,0.05)', borderRadius: 1.5, textAlign: 'center' }}>
                          <Typography sx={{ color: '#f1E6C5', fontWeight: 700, fontSize: '0.9rem', fontFamily: '"Playfair Display",serif', lineHeight: 1 }}>{v}</Typography>
                          <Typography sx={{ color: 'rgba(250,244,225,0.4)', fontSize: '0.63rem', fontFamily: '"Lora",serif' }}>{l}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Floating notification */}
                  <Box sx={{ position: 'absolute', top: -16, right: -12, background: '#FAF4E1', borderRadius: 2, px: 2, py: 1, border: '1px solid rgba(255,110,33,0.25)', display: 'flex', alignItems: 'center', gap: 1, boxShadow: '0 8px 24px rgba(0,0,0,0.2)', animation: 'float 3s ease-in-out infinite', '@keyframes float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } } }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#FF6E21', flexShrink: 0 }} />
                    <Typography sx={{ color: '#222222', fontFamily: '"Lora",serif', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>+KES 5,000 via M-Pesa</Typography>
                  </Box>

                  {/* Second card */}
                  <Box sx={{ background: 'rgba(250,244,225,0.04)', backdropFilter: 'blur(8px)', border: '1px solid rgba(250,244,225,0.08)', borderRadius: 3, p: 2.5 }}>
                    <Typography sx={{ color: 'rgba(250,244,225,0.4)', fontFamily: '"Lora",serif', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>Next Retreat</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ color: '#FAF4E1', fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '0.9rem' }}>Naivasha Family Retreat</Typography>
                        <Typography sx={{ color: 'rgba(250,244,225,0.45)', fontFamily: '"Lora",serif', fontSize: '0.72rem' }}>Aug 14–21, 2025 · Great Rift Valley Lodge</Typography>
                      </Box>
                      <Chip label="Booked ✓" size="small" sx={{ background: 'rgba(255,110,33,0.3)', color: '#FF6E21', fontSize: '0.65rem', fontWeight: 600 }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <Box ref={statsRef} sx={{ background: '#FAF4E1', borderBottom: '1px solid rgba(255,110,33,0.08)', py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            {[
              { value: 187, suffix: '+', label: 'Churches on platform', prefix: '' },
              { value: 241, suffix: '', label: 'Pastors supported', prefix: '' },
              { value: 4200000, suffix: '', label: 'Wellness funds raised (KES)', prefix: '' },
              { value: 340, suffix: '+', label: 'Retreat days facilitated', prefix: '' },
            ].map((s, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <StatCounter {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PROBLEM SECTION ──────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FAF4E1' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>
                The Problem We Solve
              </Typography>
              <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2, mb: 3, color: '#222222' }}>
                Who carries the shepherd?
              </Typography>
              <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '1rem', lineHeight: 1.9, mb: 3 }}>
                In the African church, the pastor is simultaneously the administrator, counselor, accountant, event planner, and spiritual anchor. The burnout is silent, systemic, and devastating — yet almost entirely preventable.
              </Typography>
              <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '1rem', lineHeight: 1.9, mb: 4 }}>
                ShepherdCare gives congregations the tools to actively, structurally, and transparently care for the people who care for them — not just on Appreciation Sunday, but every single month.
              </Typography>
              <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} component={Link} href="/auth/register" sx={{ px: 3 }}>
                Start caring for your pastor
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2.5}>
                {[
                  { n: '1 in 3', label: 'pastors report burnout symptoms', sub: 'Within their first 5 years of ministry', color: 'rgba(255,110,33,0.08)', tc: '#FF6E21' },
                  { n: '72%', label: 'have no formal rest structure', sub: 'No sabbatical policy or wellness fund', color: 'rgba(241,230,197,0.3)', tc: '#2D2D2D' },
                  { n: '68%', label: 'of pastor families report strain', sub: 'Marriage & family health affected', color: 'rgba(45,45,45,0.08)', tc: '#2D2D2D' },
                  { n: 'KES 0', label: 'formal pastoral wellness budget', sub: 'In the average Kenyan church', color: 'rgba(255,110,33,0.08)', tc: '#FF6E1f' },
                ].map((s, i) => (
                  <Grid size={{ xs: 6 }} key={i}>
                    <Box sx={{ p: 3, background: s.color, borderRadius: 3, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
                      <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '2rem', color: s.tc, lineHeight: 1, mb: 1 }}>{s.n}</Typography>
                      <Typography sx={{ fontWeight: 600, color: '#222222', fontFamily: '"Lora",serif', fontSize: '0.87rem', mb: 0.5, lineHeight: 1.3 }}>{s.label}</Typography>
                      <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.75rem', lineHeight: 1.6 }}>{s.sub}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#222222', position: 'relative', overflow: 'hidden' }} id="howitworks">
        <Box sx={{ position: 'absolute', top: '20%', right: '-5%', width: 350, height: 350, borderRadius: '50%', border: '1px solid rgba(255,110,33,0.1)', pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>How It Works</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#FAF4E1', lineHeight: 1.2 }}>
              From registration to <Box component="span" sx={{ color: '#f1E6C5', fontStyle: 'italic' }}>rest</Box> in three steps
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { n: '01', title: 'Register & set up your fund', desc: 'Create your church account, add your pastor, and launch a pastoral wellness campaign in under 10 minutes. A shareable public page is generated automatically.', detail: 'M-Pesa · Card · QR Code · WhatsApp sharing' },
              { n: '02', title: 'Congregation gives — transparently', desc: 'Members donate via M-Pesa STK push with no app required. Every shilling appears on a public ledger. Automated receipts go to every donor. The fund is ring-fenced.', detail: 'Real-time ledger · Auto receipts · Anonymous giving option' },
              { n: '03', title: 'Pastor rests — accountably', desc: 'Church admin requests disbursement. Two authorised leaders sign. Funds release to a curated retreat, counselor, or wellness package. The pastor completes a post-rest assessment.', detail: '2-signature approval · Proof of use · Wellness tracking' },
            ].map((s, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <Box sx={{ p: 3.5, background: 'rgba(250,244,225,0.04)', border: '1px solid rgba(250,244,225,0.08)', borderRadius: 3, height: '100%', transition: 'background 0.2s, border-color 0.2s', '&:hover': { background: 'rgba(255,110,33,0.08)', borderColor: 'rgba(255,110,33,0.2)' } }}>
                    <Typography sx={{ color: '#f1E6C5', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '3rem', lineHeight: 1, mb: 2, opacity: 1 }}>{s.n}</Typography>
                    <Typography sx={{ color: '#FAF4E1', fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '1.1rem', mb: 1.5, lineHeight: 1.3 }}>{s.title}</Typography>
                    <Typography sx={{ color: 'rgba(250,244,225,0.6)', fontFamily: '"Lora",serif', fontSize: '0.87rem', lineHeight: 1.8, mb: 2 }}>{s.desc}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {s.detail.split(' · ').map(d => (
                        <Chip key={d} label={d} size="small" sx={{ background: 'rgba(255,110,33,0.15)', color: '#FF6E21', fontSize: '0.62rem', border: '1px solid rgba(255,110,33,0.2)' }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── FEATURES GRID ────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FAF4E1' }} id="features">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>Platform Features</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#222222' }}>
              Everything your church needs to care for its shepherd
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            {[
              { icon: '💳', title: 'M-Pesa & Card Payments', desc: 'STK Push, Paybill, Visa, Mastercard, PayPal. Frictionless giving for any donor anywhere in Kenya.', size: { xs: 12, sm: 6, md: 4 } },
              { icon: '🔐', title: '2-Signature Disbursements', desc: 'Every withdrawal requires two authorised leaders to digitally sign with their PIN. Zero exceptions.', size: { xs: 12, sm: 6, md: 4 } },
              { icon: '📊', title: 'Public Fund Ledger', desc: 'Every shilling in, every shilling out — visible to your congregation in real time. Radical transparency.', size: { xs: 12, sm: 6, md: 4 } },
              { icon: '🌿', title: 'Retreat Marketplace', desc: 'Book curated rest experiences directly from the platform — from a day away to a full family sabbatical week.', size: { xs: 12, sm: 6, md: 3 } },
              { icon: '📈', title: 'Wellness Tracking', desc: 'Monthly assessments across 5 dimensions build a wellness history. Burnout caught before it happens.', size: { xs: 12, sm: 6, md: 3 } },
              { icon: '🧑‍⚕️', title: 'CFS Counselor Network', desc: 'Connect pastors to vetted pastoral counselors for confidential sessions, crisis support, and care plans.', size: { xs: 12, sm: 6, md: 3 } },
              { icon: '📧', title: 'Auto Receipts & Reports', desc: 'Beautiful email receipts to donors. Monthly reports to church leadership. Downloadable CSVs.', size: { xs: 12, sm: 6, md: 3 } },
              { icon: '📱', title: 'WhatsApp & SMS Integration', desc: 'Campaign links, giving reminders, donor thank-yous, and admin alerts — all via WhatsApp and SMS.', size: { xs: 12, sm: 12, md: 6 } },
              { icon: '🏛️', title: 'Multi-Church Dashboard', desc: 'Denominations and networks can oversee all their churches, pastors, and wellness funds from one view.', size: { xs: 12, sm: 12, md: 6 } },
            ].map((f, i) => (
              <Grid size={f.size} key={i}>
                <Box sx={{ p: 3, background: '#FAF4E1', border: '1px solid rgba(255,110,33,0.1)', height: '100%', transition: 'all 0.2s', '&:hover': { borderColor: '#FF6E21', boxShadow: '0 8px 32px rgba(34,34,34,0.1)', transform: 'translateY(-2px)' } }}>
                  <Typography sx={{ fontSize: '1.8rem', mb: 1.5 }}>{f.icon}</Typography>
                  <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '0.98rem', color: '#222222', mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.83rem', lineHeight: 1.7 }}>{f.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── FIND YOUR CHURCH ─────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 11 }, background: '#FAF4E1', borderTop: '1px solid rgba(255,110,33,0.08)', borderBottom: '1px solid rgba(255,110,33,0.08)' }} id="findchurch">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>Find Your Church</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#222222', mb: 2 }}>
              Already on ShepherdCare?
            </Typography>
            <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '1rem', maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 5 }}>
              Search for your church to access your congregation&apos;s wellness fund dashboard, view active campaigns, and give directly to your pastor&apos;s wellness fund.
            </Typography>
            <ChurchSearch />
          </Box>
          <Divider sx={{ my: 5 }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.92rem', mb: 2 }}>
              Your church isn&apos;t listed yet?
            </Typography>
            <Button variant="contained" color="primary" component={Link} href="/auth/register" endIcon={<ArrowForwardIcon />} sx={{ px: 3.5 }}>
              Register your church — it&apos;s free
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FAF4E1' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 7 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>Voices of Restoration</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#222222' }}>
              What churches are saying
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((t, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ p: 3.5, background: '#FAF4E1', borderRadius: 3, border: '1px solid rgba(255,110,33,0.1)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(34,34,34,0.1)' } }}>
                  <FormatQuoteIcon sx={{ color: '#FF6E21', fontSize: 32, mb: 2, opacity: 0.5 }} />
                  <Typography sx={{ fontFamily: '"Lora",serif', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.85, color: '#222222', mb: 3, flexGrow: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ bgcolor: '#FF6E21', width: 42, height: 42, fontFamily: '"Playfair Display",serif', fontSize: '0.9rem' }}>{t.initials}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.87rem', fontFamily: '"Lora",serif', color: '#222222' }}>{t.author}</Typography>
                      <Typography sx={{ color: '#2D2D2D', fontSize: '0.75rem', fontFamily: '"Lora",serif' }}>{t.role} · {t.church}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PRICING ──────────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FAF4E1', borderTop: '1px solid rgba(255,110,33,0.08)' }} id="pricing">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>Pricing</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: '#222222', mb: 2 }}>
              Simple, honest pricing
            </Typography>
            <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '1rem', maxWidth: 480, mx: 'auto' }}>
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            {plans.map((p, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ p: 3.5, background: p.featured ? '#FF6E21' : '#FAF4E1', borderRadius: 3, border: p.featured ? 'none' : '1.5px solid rgba(255,110,33,0.15)', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: p.featured ? '0 20px 60px rgba(255,110,33,0.3)' : 'none', transform: p.featured ? { md: 'scale(1.03)' } : 'none' }}>
                  {p.featured && <Chip label="Most Popular" size="small" sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#222222', color: '#FAF4E1', fontWeight: 700, fontSize: '0.7rem', px: 1 }} />}
                  <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.1rem', color: p.featured ? '#FAF4E1' : '#222222', mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ color: p.featured ? 'rgba(250,244,225,0.65)' : '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.82rem', mb: 2.5 }}>{p.desc}</Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '2rem', color: p.featured ? '#FAF4E1' : '#FF6E21', lineHeight: 1 }}>{p.price}</Typography>
                    {p.period && <Typography sx={{ color: p.featured ? 'rgba(250,244,225,0.5)' : '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.82rem' }}>{p.period}</Typography>}
                  </Box>
                  <Divider sx={{ mb: 2.5, borderColor: p.featured ? 'rgba(250,244,225,0.15)' : 'rgba(255,110,33,0.12)' }} />
                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    {p.features.map(f => (
                      <Box key={f} sx={{ display: 'flex', gap: 1, mb: 1.2 }}>
                        <CheckIcon sx={{ fontSize: 16, color: p.featured ? '#FAF4E1' : '#FF6E21', mt: 0.1, flexShrink: 0 }} />
                        <Typography sx={{ color: p.featured ? 'rgba(250,244,225,0.85)' : '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.83rem', lineHeight: 1.4 }}>{f}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button variant={p.featured ? 'outlined' : 'contained'} color="primary" fullWidth component={Link} href="/auth/register"
                    sx={{ py: 1.3, fontSize: '0.9rem', background: p.featured ? 'transparent' : '#FF6E21', borderColor: p.featured ? 'rgba(250,244,225,0.5)' : '#FF6E21', color: p.featured ? '#FAF4E1' : '#FAF4E1', '&:hover': { background: p.featured ? 'rgba(250,244,225,0.1)' : '#FF6E1f', borderColor: p.featured ? '#FAF4E1' : '#FF6E1f' } }}>
                    {p.cta}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FAF4E1' }} id="about">
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 1.5 }}>Common Questions</Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.6rem' }, color: '#222222' }}>
              Everything you need to know
            </Typography>
          </Box>
          {faqs.map((f, i) => (
            <Accordion key={i} sx={{ background: '#FAF4E1', border: '1px solid rgba(255,110,33,0.1)', borderRadius: '12px !important', mb: 1.5, boxShadow: 'none', '&:before': { display: 'none' }, '&.Mui-expanded': { border: '1.5px solid rgba(255,110,33,0.25)', boxShadow: '0 4px 20px rgba(34,34,34,0.07)' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FF6E21' }} />} sx={{ px: 3, py: 1 }}>
                <Typography sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '0.97rem', color: '#222222' }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
                <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.9rem', lineHeight: 1.85 }}>{f.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography sx={{ color: '#2D2D2D', fontFamily: '"Lora",serif', fontSize: '0.9rem', mb: 1.5 }}>Still have questions?</Typography>
            <Button variant="outlined" color="primary" href="mailto:hello@shepherdcare.co.ke" sx={{ px: 3 }}>Email us at hello@shepherdcare.co.ke</Button>
          </Box>
        </Container>
      </Box>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 10, md: 16 }, background: '#222222', position: 'relative', overflow: 'hidden' }} id="contact">
        <Box sx={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,110,33,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: '#FF6E21', fontSize: '0.72rem', letterSpacing: '0.14em', fontFamily: '"Lora",serif', display: 'block', mb: 2 }}>
            Ready to Begin?
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: { xs: '2.2rem', md: '3.2rem' }, color: '#FAF4E1', lineHeight: 1.15, mb: 3 }}>
            Your pastor has given<br />
            <Box component="span" sx={{ color: '#f1E6C5', fontStyle: 'italic' }}>everything.</Box><br />
            Give something back.
          </Typography>
          <Typography sx={{ color: 'rgba(250,244,225,0.55)', fontFamily: '"Lora",serif', fontSize: '1.05rem', lineHeight: 1.8, mb: 5, maxWidth: 520, mx: 'auto' }}>
            Launch a dedicated wellness fund for your church in under 10 minutes. Start free. No credit card required.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button variant="contained" color="primary" size="large" component={Link} href="/auth/register" endIcon={<ArrowForwardIcon />} sx={{ px: 4, py: 1.6, fontSize: '1rem', boxShadow: '0 4px 24px rgba(255,110,33,0.4)' }}>
              Register Your Church
            </Button>
            <Button variant="outlined" size="large" sx={{ px: 4, py: 1.6, fontSize: '1rem', color: 'rgba(250,244,225,0.8)', borderColor: 'rgba(250,244,225,0.3)', '&:hover': { borderColor: 'rgba(250,244,225,0.7)', background: 'rgba(250,244,225,0.05)' } }}>
              Book a Demo
            </Button>
          </Box>
          <Typography sx={{ color: 'rgba(250,244,225,0.3)', fontFamily: '"Lora",serif', fontSize: '0.8rem' }}>
            Free Starter plan · No credit card · Cancel anytime
          </Typography>
        </Container>
      </Box>

      <HomeFooter />
    </Box>
  </ThemeProvider>
  );
}
