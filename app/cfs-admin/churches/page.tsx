'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChurchIcon from '@mui/icons-material/Church';
import PeopleIcon from '@mui/icons-material/People';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

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

const churches = [
  { id:1, name:"Nairobi Shepherd's Church", county:'Nairobi', pastor:'James Kariuki', members:342, plan:'Growth', status:'Active', wellness:68, fund:84500, joined:'Jan 2024' },
  { id:2, name:'Rift Valley Pentecostal', county:'Nakuru', pastor:'Grace Wanjiru', members:218, plan:'Starter', status:'Active', wellness:81, fund:61000, joined:'Mar 2024' },
  { id:3, name:'Mombasa Coastal Fellowship', county:'Mombasa', pastor:'Samuel Kipchoge', members:156, plan:'Starter', status:'Active', wellness:42, fund:12400, joined:'Feb 2024' },
  { id:4, name:'Kisumu Lakeside Church', county:'Kisumu', pastor:'Ruth Achieng', members:489, plan:'Enterprise', status:'Active', wellness:75, fund:143000, joined:'Nov 2023' },
  { id:5, name:'Nakuru Central Church', county:'Nakuru', pastor:'Daniel Mutuku', members:271, plan:'Growth', status:'Active', wellness:62, fund:38000, joined:'Apr 2024' },
  { id:6, name:'Eldoret Mountain View', county:'Uasin Gishu', pastor:'Peter Mutai', members:93, plan:'Starter', status:'Onboarding', wellness:55, fund:0, joined:'Jun 2025' },
  { id:7, name:'Kisii Pentecostal Assembly', county:'Kisii', pastor:'Agnes Otieno', members:178, plan:'Starter', status:'Active', wellness:48, fund:21000, joined:'May 2024' },
  { id:8, name:'Nyeri Highland Church', county:'Nyeri', pastor:'Moses Wainaina', members:312, plan:'Growth', status:'Active', wellness:77, fund:92000, joined:'Oct 2023' },
];

const planColors: Record<string, {bg:string,color:string}> = {
  Starter: { bg:'#F5EDE0', color:'#6B4C35' },
  Growth: { bg:'#FAECE7', color:'#8B3E14' },
  Enterprise: { bg:'#EAF3DE', color:'#244530' },
};
const wc = (s:number) => s>=70 ? {bg:'#EAF3DE',color:'#244530'} : s>=55 ? {bg:'#FAECE7',color:'#8B3E14'} : {bg:'#FCEBEB',color:'#A32D2D'};

export default function ChurchesPage() {
  const [search, setSearch] = React.useState('');
  const filtered = churches.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.pastor.toLowerCase().includes(search.toLowerCase()) ||
    c.county.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="overline" sx={{ color: '#3A6B4A', fontSize: '0.7rem' }}>CFS Admin</Typography>
          <Typography variant="h4">Churches</Typography>
          <Typography variant="body2" sx={{ color: '#6B4C35', mt: 0.3 }}>{filtered.length} churches on the platform</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button variant="outlined" color="primary" startIcon={<FileDownloadIcon />} size="small">Export</Button>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />} size="small">Onboard Church</Button>
        </Box>
      </Box>

      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {[['187','Total Churches'],['KES 4.2M','Total Wellness Funds'],['94%','Active Rate'],['23','At-Risk Pastors']].map(([v,l]) => (
          <Grid size={{ xs: 6, md: 3 }} key={l}>
            <Card><CardContent sx={{ p: 2.5, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#3A6B4A', fontWeight: 700, mb: 0.3 }}>{v}</Typography>
              <Typography variant="caption" sx={{ color: '#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent sx={{ p: 2.5 }}>
          <TextField fullWidth placeholder="Search by church name, pastor, or county…" value={search} onChange={e => setSearch(e.target.value)} size="small" sx={{ mb: 2.5 }}
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchIcon sx={{ fontSize: 17, color: '#6B4C35' }} /></InputAdornment> } }}
          />
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Church</TableCell><TableCell>County</TableCell><TableCell>Pastor</TableCell>
                  <TableCell align="center">Members</TableCell><TableCell align="center">Wellness</TableCell>
                  <TableCell align="right">Fund (KES)</TableCell><TableCell align="center">Plan</TableCell>
                  <TableCell align="center">Status</TableCell><TableCell>Joined</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map(c => {
                  const w = wc(c.wellness);
                  const p = planColors[c.plan] || { bg: '#F5EDE0', color: '#6B4C35' };
                  return (
                    <TableRow key={c.id} hover>
                      <TableCell><Typography sx={{ fontWeight: 600, fontSize: '0.83rem', fontFamily: '"Lora",serif' }}>{c.name}</Typography></TableCell>
                      <TableCell><Typography sx={{ fontSize: '0.82rem', fontFamily: '"Lora",serif', color: '#6B4C35' }}>{c.county}</Typography></TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ bgcolor: '#C2622A', width: 26, height: 26, fontSize: '0.62rem' }}>{c.pastor.split(' ').map(n => n[0]).join('')}</Avatar>
                          <Typography sx={{ fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{c.pastor}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center"><Typography sx={{ fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{c.members}</Typography></TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                          <LinearProgress variant="determinate" value={c.wellness} sx={{ flex: 1, height: 5, '& .MuiLinearProgress-bar': { backgroundColor: c.wellness < 55 ? '#A32D2D' : c.wellness < 70 ? '#C2622A' : '#3A6B4A' } }} />
                          <Chip label={c.wellness} size="small" sx={{ ...w, fontWeight: 700, fontSize: '0.68rem', height: 18, minWidth: 30 }} />
                        </Box>
                      </TableCell>
                      <TableCell align="right"><Typography sx={{ fontWeight: 600, color: '#3A6B4A', fontSize: '0.82rem', fontFamily: '"Lora",serif' }}>{c.fund > 0 ? c.fund.toLocaleString() : '—'}</Typography></TableCell>
                      <TableCell align="center"><Chip label={c.plan} size="small" sx={{ ...p, fontSize: '0.68rem', fontWeight: 600 }} /></TableCell>
                      <TableCell align="center"><Chip label={c.status} size="small" sx={{ background: c.status === 'Active' ? '#EAF3DE' : '#F5EDE0', color: c.status === 'Active' ? '#244530' : '#6B4C35', fontSize: '0.68rem', fontWeight: 600 }} /></TableCell>
                      <TableCell><Typography sx={{ fontSize: '0.78rem', color: '#6B4C35', fontFamily: '"Lora",serif' }}>{c.joined}</Typography></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
