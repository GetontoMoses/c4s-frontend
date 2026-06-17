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
import LinearProgress from '@mui/material/LinearProgress';
import DashboardShell from '../../components/DashboardShell';
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockIcon from '@mui/icons-material/Lock';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/counselor/dashboard' },
  { label:'My Cases', icon:<PeopleIcon/>, href:'/counselor/cases' },
  { label:'Sessions', icon:<CalendarMonthIcon/>, href:'/counselor/sessions' },
];
const user = { name:'Dr. Ruth Achieng', role:'counselor' as const, initials:'RA' };

const cases = [
  { pastor:'James Kariuki', church:"Nairobi Shepherd's Church", score:68, status:'Stable', nextSession:'Jul 15', sessions:4, crisis:false },
  { pastor:'Grace Wanjiru', church:'Rift Valley Pentecostal', score:81, status:'Healthy', nextSession:'Jul 22', sessions:6, crisis:false },
  { pastor:'Daniel Mutuku', church:'Nakuru Central Church', score:62, status:'Monitor', nextSession:'Jul 18', sessions:3, crisis:false },
  { pastor:'Samuel Kipchoge', church:'Mombasa Coastal Fellowship', score:42, status:'At Risk', nextSession:'Urgent', sessions:1, crisis:true },
];

const upcoming = [
  { pastor:'Samuel Kipchoge', date:'Jul 14 — Urgent', type:'Crisis', duration:'60 min', format:'Video' },
  { pastor:'James Kariuki', date:'Jul 15 · 2:00 PM', type:'Regular', duration:'50 min', format:'Video' },
  { pastor:'Daniel Mutuku', date:'Jul 18 · 3:00 PM', type:'Follow-up', duration:'45 min', format:'Video' },
  { pastor:'Grace Wanjiru', date:'Jul 22 · 11:00 AM', type:'Regular', duration:'50 min', format:'In-Person' },
];

const wc = (s:string) => {
  if(s==='Healthy') return { bg:'#EAF3DE', color:'#244530' };
  if(s==='Stable') return { bg:'#F5EDE0', color:'#6B4C35' };
  if(s==='Monitor') return { bg:'#FAECE7', color:'#8B3E14' };
  return { bg:'#FCEBEB', color:'#A32D2D' };
};

export default function CounselorDashboard() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>CFS Counselor</Typography>
        <Typography variant="h4">My Case Dashboard</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>All counseling records are strictly confidential and encrypted</Typography>
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap:1, p:2, mb:3, background:'#EAF3DE', borderRadius:2, border:'1px solid rgba(58,107,74,0.2)' }}>
        <LockIcon sx={{ color:'#244530', fontSize:16 }}/>
        <Typography sx={{ color:'#244530', fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>
          Confidentiality enforced. Session notes visible only to you and the pastor. CFS admin sees case status only.
        </Typography>
      </Box>

      {/* Crisis alert */}
      <Box sx={{ display:'flex', alignItems:'center', gap:1.5, p:2, mb:3, background:'#FAECE7', borderRadius:2, border:'1px solid rgba(194,98,42,0.25)' }}>
        <WarningAmberIcon sx={{ color:'#C2622A', fontSize:20 }}/>
        <Box sx={{ flexGrow:1 }}>
          <Typography sx={{ fontWeight:600, color:'#8B3E14', fontSize:'0.87rem', fontFamily:'"Lora",serif' }}>Crisis case: Pastor Samuel Kipchoge requires immediate attention</Typography>
          <Typography sx={{ color:'#8B3E14', fontSize:'0.77rem', fontFamily:'"Lora",serif' }}>Score: 42/100 · No counselor contact in 12 days · Flagged by CFS admin</Typography>
        </Box>
        <Button variant="contained" color="primary" size="small" sx={{ whiteSpace:'nowrap', fontSize:'0.78rem' }}>Contact Now</Button>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[
          { icon:<PeopleIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Active Cases', value:'12', sub:'4 assigned to me', bg:'#EAF3DE' },
          { icon:<CalendarMonthIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Sessions This Month', value:'18', sub:'4 upcoming', bg:'#FAECE7' },
          { icon:<WarningAmberIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'At-Risk Cases', value:'2', sub:'Needs immediate follow-up', bg:'#FAECE7' },
          { icon:<CheckCircleIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Completed Sessions', value:'48', sub:'Since joining CFS', bg:'#EAF3DE' },
        ].map(s=>(
          <Grid size={{ xs:6, md:3 }} key={s.label}><StatCard {...s}/></Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>My Pastoral Cases</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pastor</TableCell>
                      <TableCell>Church</TableCell>
                      <TableCell align="center">Wellness</TableCell>
                      <TableCell>Next Session</TableCell>
                      <TableCell align="center">Sessions</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cases.map(c=>{
                      const sc = wc(c.status);
                      return (
                        <TableRow key={c.pastor} hover>
                          <TableCell>
                            <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
                              <Avatar sx={{ bgcolor:c.crisis?'#A32D2D':'#3A6B4A', width:28, height:28, fontSize:'0.62rem' }}>
                                {c.pastor.split(' ').map(n=>n[0]).join('')}
                              </Avatar>
                              <Typography sx={{ fontWeight:600, fontSize:'0.83rem', fontFamily:'"Lora",serif' }}>Pastor {c.pastor}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell><Typography sx={{ fontSize:'0.8rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{c.church}</Typography></TableCell>
                          <TableCell align="center">
                            <Box sx={{ display:'flex', alignItems:'center', gap:0.8 }}>
                              <LinearProgress variant="determinate" value={c.score} sx={{ flex:1, height:5, '& .MuiLinearProgress-bar':{ backgroundColor:c.score<55?'#A32D2D':c.score<70?'#C2622A':'#3A6B4A' } }}/>
                              <Typography sx={{ fontSize:'0.75rem', fontWeight:600, fontFamily:'"Lora",serif', minWidth:22 }}>{c.score}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography sx={{ fontSize:'0.8rem', fontFamily:'"Lora",serif', color:c.nextSession==='Urgent'?'#A32D2D':'#6B4C35', fontWeight:c.nextSession==='Urgent'?600:400 }}>{c.nextSession}</Typography>
                          </TableCell>
                          <TableCell align="center"><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{c.sessions}</Typography></TableCell>
                          <TableCell align="center"><Chip label={c.status} size="small" sx={{ ...sc, fontSize:'0.68rem', fontWeight:600 }}/></TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs:12, md:5 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Upcoming Sessions</Typography>
              {upcoming.map((s,i)=>(
                <Box key={i}>
                  <Box sx={{ py:1.5 }}>
                    <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                      <Typography sx={{ fontWeight:600, fontSize:'0.85rem', fontFamily:'"Lora",serif' }}>Pastor {s.pastor}</Typography>
                      <Chip label={s.type} size="small" sx={{ background:s.type==='Crisis'?'#FCEBEB':s.type==='Regular'?'#EAF3DE':'#FAECE7', color:s.type==='Crisis'?'#A32D2D':s.type==='Regular'?'#244530':'#8B3E14', fontSize:'0.65rem', fontWeight:600 }}/>
                    </Box>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>{s.date} · {s.duration} · {s.format}</Typography>
                    <Button size="small" color="primary" sx={{ mt:0.5, p:0, fontSize:'0.73rem' }}>View session notes →</Button>
                  </Box>
                  {i<upcoming.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
