'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';

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

const events = [
  { title:'Pastoral Wellness Summit 2025', type:'Conference', format:'In-person', date:'Aug 15–17, 2025', location:'KICC, Nairobi', registered:312, capacity:400, status:'Open', fee:'KES 2,500' },
  { title:'Burnout Prevention Webinar Series — Session 4', type:'Webinar', format:'Online', date:'Jul 25, 2025', location:'Zoom', registered:124, capacity:200, status:'Open', fee:'Free' },
  { title:'Couples in Ministry Retreat', type:'Retreat', format:'In-person', date:'Sep 5–8, 2025', location:'Brackenhurst, Limuru', registered:28, capacity:30, status:'Almost Full', fee:'KES 8,000' },
  { title:'Church Leaders & Burnout Workshop', type:'Workshop', format:'Hybrid', date:'Oct 12, 2025', location:'Nairobi / Zoom', registered:67, capacity:150, status:'Open', fee:'KES 1,000' },
  { title:'Annual Pastoral Care Conference', type:'Conference', format:'In-person', date:'Nov 20–22, 2025', location:'Mombasa', registered:0, capacity:300, status:'Planning', fee:'TBD' },
  { title:'PKs & Ministry Families Support Day', type:'Workshop', format:'In-person', date:'Aug 30, 2025', location:'Nairobi', registered:41, capacity:60, status:'Open', fee:'Free' },
];

const statusColor = (s:string) => {
  if(s==='Open') return {bg:'#EAF3DE',color:'#244530'};
  if(s==='Almost Full') return {bg:'#FAECE7',color:'#8B3E14'};
  if(s==='Planning') return {bg:'#F5EDE0',color:'#6B4C35'};
  return {bg:'#EAF3DE',color:'#244530'};
};

export default function EventsPage() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>CFS Admin</Typography>
          <Typography variant="h4">Events & Webinars</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Manage CFS awareness events, retreats, and webinar series</Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<AddIcon/>} size="small">Create Event</Button>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[['6','Upcoming Events'],['572','Total Registrations'],['KES 1.1M','Revenue This Year'],['4','Webinar Series']].map(([v,l])=>(
          <Grid size={{ xs:6, md:3 }} key={l}>
            <Card><CardContent sx={{ p:2.5, textAlign:'center' }}>
              <Typography variant="h4" sx={{ color:'#3A6B4A', fontWeight:700, mb:0.3 }}>{v}</Typography>
              <Typography variant="caption" sx={{ color:'#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {events.map((e,i)=>{
          const sc = statusColor(e.status);
          const pct = e.capacity>0 ? Math.round((e.registered/e.capacity)*100) : 0;
          return (
            <Grid size={{ xs:12, md:6 }} key={i}>
              <Card sx={{ height:'100%', display:'flex', flexDirection:'column' }}>
                <CardContent sx={{ p:3, flexGrow:1 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', mb:1.5 }}>
                    <Box sx={{ display:'flex', gap:1, flexWrap:'wrap' }}>
                      <Chip label={e.type} size="small" sx={{ background:'#FAECE7', color:'#8B3E14', fontSize:'0.68rem', fontWeight:600 }}/>
                      <Chip label={e.format} size="small" icon={e.format==='Online'||e.format==='Hybrid'?<VideoCallIcon sx={{ fontSize:'13px !important' }}/>:<PeopleAltIcon sx={{ fontSize:'13px !important' }}/>} sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.68rem' }}/>
                    </Box>
                    <Chip label={e.status} size="small" sx={{ ...sc, fontSize:'0.68rem', fontWeight:600 }}/>
                  </Box>
                  <Typography variant="h6" sx={{ fontSize:'0.98rem', mb:1, lineHeight:1.3 }}>{e.title}</Typography>
                  <Box sx={{ display:'flex', alignItems:'center', gap:0.5, mb:0.5 }}>
                    <EventIcon sx={{ fontSize:14, color:'#6B4C35' }}/>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.8rem', fontFamily:'"Lora",serif' }}>{e.date}</Typography>
                  </Box>
                  <Box sx={{ display:'flex', alignItems:'center', gap:0.5, mb:2 }}>
                    <LocationOnIcon sx={{ fontSize:14, color:'#C2622A' }}/>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.8rem', fontFamily:'"Lora",serif' }}>{e.location}</Typography>
                  </Box>
                  {e.status!=='Planning' && (
                    <Box sx={{ mb:1.5 }}>
                      <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                        <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>Registrations</Typography>
                        <Typography sx={{ fontWeight:600, fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>{e.registered} / {e.capacity} ({pct}%)</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={pct} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: pct>85?'#A32D2D':pct>60?'#C2622A':'#3A6B4A' } }}/>
                    </Box>
                  )}
                  <Divider sx={{ mb:1.5 }}/>
                  <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <Typography sx={{ color:'#C2622A', fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{e.fee}</Typography>
                    <Box sx={{ display:'flex', gap:1 }}>
                      <Button size="small" variant="outlined" color="primary" sx={{ fontSize:'0.75rem', py:0.4 }}>Manage</Button>
                      <Button size="small" variant="contained" color="primary" sx={{ fontSize:'0.75rem', py:0.4 }}>View List</Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </DashboardShell>
  );
}
