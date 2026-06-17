'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChurchIcon from '@mui/icons-material/Church';
import PeopleIcon from '@mui/icons-material/People';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/cfs-admin/dashboard' },
  { label:'Churches', icon:<ChurchIcon/>, href:'/cfs-admin/churches' },
  { label:'Pastors', icon:<PeopleIcon/>, href:'/cfs-admin/pastors' },
  { label:'Counseling', icon:<SpaIcon/>, href:'/cfs-admin/counseling' },
  { label:'Content & Library', icon:<MenuBookIcon/>, href:'/cfs-admin/content' },
  { label:'Events & Webinars', icon:<EventIcon/>, href:'/cfs-admin/events' },
  { label:'Partners', icon:<HandshakeIcon/>, href:'/cfs-admin/reports' },
  { label:'Analytics', icon:<BarChartIcon/>, href:'/cfs-admin/reports' },
];
const user = { name:'Dr. Esther Kamau', role:'cfs_admin' as const, initials:'EK' };

const counselors = [
  { name:'Dr. Ruth Achieng', speciality:'Burnout & Pastoral Care', cases:12, available:true, sessions:48 },
  { name:'Rev. Paul Kamau', speciality:'Family & Marriage', cases:8, available:true, sessions:31 },
  { name:'Dr. Miriam Osei', speciality:'Trauma & Grief', cases:5, available:false, sessions:22 },
  { name:'Pastor John Ndegwa', speciality:'Spiritual Direction', cases:10, available:true, sessions:37 },
];

const sessions = [
  { pastor:'Samuel Kipchoge', counselor:'Unassigned', type:'Crisis', date:'Urgent', status:'Unassigned', priority:'high' },
  { pastor:'Agnes Otieno', counselor:'Unassigned', type:'Crisis', date:'Urgent', status:'Unassigned', priority:'high' },
  { pastor:'James Kariuki', counselor:'Dr. Ruth Achieng', type:'Regular', date:'Jul 15, 2025', status:'Scheduled', priority:'normal' },
  { pastor:'Daniel Mutuku', counselor:'Dr. Ruth Achieng', type:'Follow-up', date:'Jul 18, 2025', status:'Scheduled', priority:'normal' },
  { pastor:'Peter Mutai', counselor:'Rev. Paul Kamau', type:'Initial', date:'Jul 20, 2025', status:'Pending', priority:'medium' },
  { pastor:'Grace Wanjiru', counselor:'Dr. Ruth Achieng', type:'Regular', date:'Jul 22, 2025', status:'Completed', priority:'normal' },
];

export default function CounselingPage() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>CFS Admin</Typography>
          <Typography variant="h4">Counseling Management</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Assign counselors, track sessions, manage crisis cases</Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<AddIcon/>} size="small">Add Counselor</Button>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[['42','Active Cases'],['2','Crisis — Urgent'],['6','CFS Counselors'],['187','Sessions YTD']].map(([v,l])=>(
          <Grid size={{ xs:6, md:3 }} key={l}>
            <Card><CardContent sx={{ p:2.5, textAlign:'center' }}>
              <Typography variant="h4" sx={{ color: l.includes('Crisis') ? '#A32D2D' : '#3A6B4A', fontWeight:700, mb:0.3 }}>{v}</Typography>
              <Typography variant="caption" sx={{ color:'#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      {/* Urgent unassigned */}
      <Card sx={{ mb:3, border:'1px solid rgba(163,45,45,0.25)', background:'#FFF8F8' }}>
        <CardContent sx={{ p:2.5 }}>
          <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2 }}>
            <WarningAmberIcon sx={{ color:'#A32D2D', fontSize:20 }}/>
            <Typography sx={{ fontWeight:600, color:'#A32D2D', fontSize:'0.9rem', fontFamily:'"Lora",serif' }}>2 crisis cases require immediate counselor assignment</Typography>
          </Box>
          <Grid container spacing={2}>
            {sessions.filter(s=>s.priority==='high').map(s=>(
              <Grid size={{ xs:12, sm:6 }} key={s.pastor}>
                <Box sx={{ p:2, background:'#FAECE7', borderRadius:2, border:'1px solid rgba(194,98,42,0.2)', display:'flex', alignItems:'center', justifyContent:'space-between', gap:1 }}>
                  <Box>
                    <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.87rem', fontFamily:'"Lora",serif' }}>Pastor {s.pastor}</Typography>
                    <Typography sx={{ color:'#8B3E14', fontSize:'0.73rem', fontFamily:'"Lora",serif' }}>Crisis · Immediate support needed</Typography>
                  </Box>
                  <Button variant="contained" color="primary" size="small" sx={{ fontSize:'0.75rem', whiteSpace:'nowrap' }}>Assign Now</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Counselors */}
        <Grid size={{ xs:12, md:5 }}>
          <Card sx={{ height:'100%' }}>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Counselor Roster</Typography>
              {counselors.map((c,i)=>(
                <Box key={c.name}>
                  <Box sx={{ display:'flex', alignItems:'flex-start', gap:1.5, py:1.5 }}>
                    <Avatar sx={{ bgcolor: c.available ? '#3A6B4A' : '#6B4C35', width:38, height:38, fontSize:'0.78rem' }}>{c.name.split(' ').map(n=>n[0]).join('')}</Avatar>
                    <Box sx={{ flexGrow:1 }}>
                      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <Typography sx={{ fontWeight:600, fontSize:'0.88rem', fontFamily:'"Lora",serif' }}>{c.name}</Typography>
                        <Chip label={c.available?'Available':'Unavailable'} size="small" sx={{ background:c.available?'#EAF3DE':'#F5EDE0', color:c.available?'#244530':'#6B4C35', fontSize:'0.65rem', fontWeight:600 }}/>
                      </Box>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>{c.speciality}</Typography>
                      <Typography sx={{ color:'#C2622A', fontSize:'0.72rem', fontFamily:'"Lora",serif', mt:0.3 }}>{c.cases} active cases · {c.sessions} sessions total</Typography>
                    </Box>
                  </Box>
                  {i<counselors.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Sessions table */}
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Upcoming Sessions</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pastor</TableCell><TableCell>Counselor</TableCell>
                      <TableCell align="center">Type</TableCell><TableCell>Date</TableCell><TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sessions.map((s,i)=>(
                      <TableRow key={i} hover>
                        <TableCell><Typography sx={{ fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>Pastor {s.pastor}</Typography></TableCell>
                        <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', color:s.counselor==='Unassigned'?'#A32D2D':'#2C1A0E' }}>{s.counselor}</Typography></TableCell>
                        <TableCell align="center"><Chip label={s.type} size="small" sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.68rem' }}/></TableCell>
                        <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', color:s.date==='Urgent'?'#A32D2D':'#6B4C35', fontWeight:s.date==='Urgent'?600:400 }}>{s.date}</Typography></TableCell>
                        <TableCell align="center">
                          <Chip label={s.status} size="small" sx={{
                            background: s.status==='Unassigned'?'#FCEBEB':s.status==='Completed'?'#EAF3DE':s.status==='Scheduled'?'#F5EDE0':'#FAECE7',
                            color: s.status==='Unassigned'?'#A32D2D':s.status==='Completed'?'#244530':s.status==='Scheduled'?'#6B4C35':'#8B3E14',
                            fontSize:'0.68rem', fontWeight:600,
                          }}/>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
