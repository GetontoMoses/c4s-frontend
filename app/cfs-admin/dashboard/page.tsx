'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import DashboardShell from '../../components/DashboardShell';
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChurchIcon from '@mui/icons-material/Church';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import BarChartIcon from '@mui/icons-material/BarChart';
import SpaIcon from '@mui/icons-material/Spa';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, href: '/cfs-admin/dashboard' },
  { label: 'Churches', icon: <ChurchIcon />, href: '/cfs-admin/churches' },
  { label: 'Pastors', icon: <PeopleIcon />, href: '/cfs-admin/pastors' },
  { label: 'Counseling', icon: <SpaIcon />, href: '/cfs-admin/counseling' },
  { label: 'Content & Library', icon: <MenuBookIcon />, href: '/cfs-admin/content' },
  { label: 'Events & Webinars', icon: <EventIcon />, href: '/cfs-admin/events' },
  { label: 'Partners', icon: <HandshakeIcon />, href: '/cfs-admin/reports' },
  { label: 'Analytics', icon: <BarChartIcon />, href: '/cfs-admin/reports' },
];

const user = { name: 'Dr. Esther Kamau', role: 'cfs_admin' as const, initials: 'EK' };

const atRisk = [
  { name: 'Pastor Samuel Kipchoge', church: 'Mombasa Coastal Fellowship', score: 42, flags: ['No rest in 31 days', 'Physical score ↓18pts'] },
  { name: 'Pastor Peter Mutai', church: 'Eldoret Mountain View', score: 51, flags: ['No wellness fund', 'Missed peer cohort ×3'] },
  { name: 'Pastor Agnes Otieno', church: 'Kisii Pentecostal Assembly', score: 48, flags: ['Crisis alert sent', 'No counselor assigned'] },
];

const recentChurches = [
  { name: "Nairobi Shepherd's Church", pastor: 'James Kariuki', members: 342, plan: 'Growth', wellness: 68, fund: 84500 },
  { name: 'Rift Valley Pentecostal', pastor: 'Grace Wanjiru', members: 218, plan: 'Starter', wellness: 81, fund: 61000 },
  { name: 'Mombasa Coastal Fellowship', pastor: 'Samuel Kipchoge', members: 156, plan: 'Starter', wellness: 42, fund: 12400 },
  { name: 'Kisumu Lakeside Church', pastor: 'Ruth Achieng', members: 489, plan: 'Enterprise', wellness: 75, fund: 143000 },
  { name: 'Nakuru Central Church', pastor: 'Daniel Mutuku', members: 271, plan: 'Growth', wellness: 62, fund: 38000 },
];

const wc = (s: number) => s >= 70 ? { bg: '#EAF3DE', text: '#244530' } : s >= 55 ? { bg: '#FAECE7', text: '#8B3E14' } : { bg: '#FCEBEB', text: '#A32D2D' };

export default function CFSAdminDashboard() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb: 3 }}>
        <Typography variant="overline" sx={{ color: '#3A6B4A', fontSize: '0.7rem' }}>CFS Super Admin</Typography>
        <Typography variant="h4" sx={{ mt: 0.3 }}>Platform Overview</Typography>
        <Typography variant="body2" sx={{ color: '#6B4C35', mt: 0.3 }}>Care for Shepherds · Global Dashboard · June 2025</Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        {[
          { icon: <ChurchIcon sx={{ fontSize: 24, color: '#3A6B4A' }} />, label: 'Churches', value: '187', sub: '+12 this month', bg: '#EAF3DE' },
          { icon: <PeopleIcon sx={{ fontSize: 24, color: '#C2622A' }} />, label: 'Pastors', value: '241', sub: '23 flagged at-risk', bg: '#FAECE7' },
          { icon: <FavoriteIcon sx={{ fontSize: 24, color: '#3A6B4A' }} />, label: 'Active Campaigns', value: '38', sub: 'KES 1.2M raised', bg: '#EAF3DE' },
          { icon: <TrendingUpIcon sx={{ fontSize: 24, color: '#C2622A' }} />, label: 'Platform Revenue', value: 'KES 2.4M', sub: 'Subscriptions YTD', bg: '#FAECE7' },
        ].map(s => (
          <Grid size={{ xs: 6, md: 3 }} key={s.label}><StatCard {...s} /></Grid>
        ))}
      </Grid>

      {/* At-risk alert */}
      <Card sx={{ mb: 3, border: '1px solid rgba(163,45,45,0.2)', background: '#FFF8F8' }}>
        <CardContent sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <WarningAmberIcon sx={{ color: '#A32D2D', fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#A32D2D' }}>{atRisk.length} pastors require immediate attention</Typography>
          </Box>
          <Grid container spacing={2}>
            {atRisk.map(p => (
              <Grid size={{ xs: 12, md: 4 }} key={p.name}>
                <Box sx={{ p: 2, background: '#FAECE7', borderRadius: 2, border: '1px solid rgba(194,98,42,0.2)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar sx={{ bgcolor: '#C2622A', width: 30, height: 30, fontSize: '0.65rem' }}>{p.name.split(' ').slice(1).map((n:string) => n[0]).join('')}</Avatar>
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography sx={{ fontWeight: 600, color: '#2C1A0E', fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{p.name}</Typography>
                      <Typography sx={{ color: '#6B4C35', fontSize: '0.68rem', fontFamily: '"Lora",serif' }}>{p.church}</Typography>
                    </Box>
                    <Chip label={`${p.score}`} size="small" sx={{ background: '#FCEBEB', color: '#A32D2D', fontWeight: 700, fontSize: '0.7rem' }} />
                  </Box>
                  {p.flags.map(f => <Typography key={f} sx={{ color: '#8B3E14', fontSize: '0.73rem', fontFamily: '"Lora",serif' }}>· {f}</Typography>)}
                  <Button size="small" color="primary" sx={{ mt: 1, p: 0, fontSize: '0.73rem' }}>Assign counselor →</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Churches table */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '1rem' }}>Subscribed Churches</Typography>
                <Button component={Link} href="/cfs-admin/churches" size="small" color="primary" sx={{ fontSize: '0.78rem' }}>View all</Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Church</TableCell>
                      <TableCell>Pastor</TableCell>
                      <TableCell align="center">Members</TableCell>
                      <TableCell align="center">Wellness</TableCell>
                      <TableCell align="right">Fund (KES)</TableCell>
                      <TableCell align="center">Plan</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentChurches.map(c => {
                      const w = wc(c.wellness);
                      return (
                        <TableRow key={c.name} hover>
                          <TableCell><Typography sx={{ fontWeight: 600, fontSize: '0.83rem', fontFamily: '"Lora",serif' }}>{c.name}</Typography></TableCell>
                          <TableCell><Typography sx={{ fontSize: '0.82rem', fontFamily: '"Lora",serif', color: '#6B4C35' }}>{c.pastor}</Typography></TableCell>
                          <TableCell align="center"><Typography sx={{ fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{c.members}</Typography></TableCell>
                          <TableCell align="center">
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                              <LinearProgress variant="determinate" value={c.wellness} sx={{ flex: 1, height: 5, '& .MuiLinearProgress-bar': { backgroundColor: c.wellness < 55 ? '#A32D2D' : c.wellness < 70 ? '#C2622A' : '#3A6B4A' } }} />
                              <Chip label={c.wellness} size="small" sx={{ ...w, fontWeight: 700, fontSize: '0.68rem', height: 18, minWidth: 32 }} />
                            </Box>
                          </TableCell>
                          <TableCell align="right"><Typography sx={{ fontWeight: 600, color: '#3A6B4A', fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{c.fund.toLocaleString()}</Typography></TableCell>
                          <TableCell align="center"><Chip label={c.plan} size="small" sx={{ background: '#EAF3DE', color: '#244530', fontSize: '0.68rem', fontWeight: 600 }} /></TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick stats */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontSize: '0.95rem', mb: 2 }}>Platform Health</Typography>
                  {[
                    { label: 'Churches with active wellness fund', value: 71, color: '#3A6B4A' },
                    { label: 'Pastors with counselor assigned', value: 58, color: '#C2622A' },
                    { label: 'Burnout assessments completed', value: 84, color: '#3A6B4A' },
                    { label: 'Retreats booked this quarter', value: 43, color: '#C2622A' },
                  ].map(m => (
                    <Box key={m.label} sx={{ mb: 1.8 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.4 }}>
                        <Typography sx={{ color: '#6B4C35', fontSize: '0.78rem', fontFamily: '"Lora",serif' }}>{m.label}</Typography>
                        <Typography sx={{ fontWeight: 600, color: '#2C1A0E', fontSize: '0.78rem', fontFamily: '"Lora",serif' }}>{m.value}%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={m.value} sx={{ height: 5, '& .MuiLinearProgress-bar': { backgroundColor: m.color } }} />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontSize: '0.95rem', mb: 2 }}>Recent Activity</Typography>
                  {[
                    { text: 'New church onboarded: Garissa Evangelical', time: '2h ago', icon: <CheckCircleIcon sx={{ fontSize: 14, color: '#3A6B4A' }} /> },
                    { text: 'Crisis alert: Pastor Agnes Otieno (Kisii)', time: '4h ago', icon: <WarningAmberIcon sx={{ fontSize: 14, color: '#C2622A' }} /> },
                    { text: 'Content published: "Rest Theology Guide"', time: '1d ago', icon: <CheckCircleIcon sx={{ fontSize: 14, color: '#3A6B4A' }} /> },
                    { text: 'Webinar registered: 124 pastors', time: '2d ago', icon: <CheckCircleIcon sx={{ fontSize: 14, color: '#3A6B4A' }} /> },
                  ].map((a, i) => (
                    <Box key={i}>
                      <Box sx={{ display: 'flex', gap: 1, py: 1.2 }}>
                        <Box sx={{ mt: 0.2 }}>{a.icon}</Box>
                        <Box>
                          <Typography sx={{ fontSize: '0.82rem', color: '#2C1A0E', fontFamily: '"Lora",serif', lineHeight: 1.4 }}>{a.text}</Typography>
                          <Typography sx={{ fontSize: '0.68rem', color: '#6B4C35', fontFamily: '"Lora",serif' }}>{a.time}</Typography>
                        </Box>
                      </Box>
                      {i < 3 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
