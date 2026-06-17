'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChurchIcon from '@mui/icons-material/Church';
import PeopleIcon from '@mui/icons-material/People';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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

const partners = [
  { name:'Brackenhurst Conference Centre', type:'Retreat Centre', status:'Active', contribution:'12 retreat bookings', since:'2023' },
  { name:'Daystar University', type:'Academic Partner', status:'Active', contribution:'Research + counselors', since:'2024' },
  { name:'Africa Inland Church', type:'Church Network', status:'Active', contribution:'34 churches referred', since:'2024' },
  { name:'KCB Foundation', type:'Donor', status:'Active', contribution:'KES 500,000 grant', since:'2024' },
  { name:'Nairobi Chapel', type:'Church Partner', status:'Active', contribution:'8 churches referred', since:'2025' },
];

const metrics = [
  { label:'Pastoral burnout cases reduced (self-reported)', value:62, unit:'%', color:'#3A6B4A' },
  { label:'Admin time saved per pastor/week', value:78, unit:'%', color:'#3A6B4A' },
  { label:'Pastor NPS score', value:74, unit:'/100', color:'#C2622A' },
  { label:'Church admin satisfaction', value:88, unit:'%', color:'#3A6B4A' },
  { label:'Wellness fund disbursement accuracy', value:99, unit:'%', color:'#3A6B4A' },
  { label:'Counseling session completion rate', value:84, unit:'%', color:'#C2622A' },
];

export default function ReportsPage() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>CFS Admin</Typography>
          <Typography variant="h4">Partners & Analytics</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Platform performance, success metrics, and partner management</Typography>
        </Box>
        <Button variant="outlined" color="primary" startIcon={<FileDownloadIcon/>} size="small">Export Report</Button>
      </Box>

      {/* KPI Grid */}
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[['KES 2.4M','Subscription Revenue YTD'],['KES 4.2M','Wellness Funds Raised'],['340','Retreats Facilitated'],['9,200','Monthly Active Users']].map(([v,l])=>(
          <Grid size={{ xs:6, md:3 }} key={l}>
            <Card><CardContent sx={{ p:2.5 }}>
              <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:1 }}>
                <TrendingUpIcon sx={{ color:'#3A6B4A', fontSize:18 }}/>
                <Typography sx={{ color:'#3A6B4A', fontSize:'0.68rem', fontFamily:'"Lora",serif', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em' }}>YTD</Typography>
              </Box>
              <Typography variant="h4" sx={{ color:'#2C1A0E', fontWeight:700, mb:0.3, fontSize:'1.5rem' }}>{v}</Typography>
              <Typography variant="caption" sx={{ color:'#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Success metrics */}
        <Grid size={{ xs:12, md:6 }}>
          <Card sx={{ height:'100%' }}>
            <CardContent sx={{ p:3 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2.5 }}>Success Metrics</Typography>
              {metrics.map(m=>(
                <Box key={m.label} sx={{ mb:2 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.79rem', fontFamily:'"Lora",serif', flex:1, pr:1 }}>{m.label}</Typography>
                    <Typography sx={{ fontWeight:700, color:m.color, fontSize:'0.85rem', fontFamily:'"Lora",serif', whiteSpace:'nowrap' }}>{m.value}{m.unit}</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={Math.min(m.value,100)} sx={{ height:5, '& .MuiLinearProgress-bar':{ backgroundColor:m.color } }}/>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Partners */}
        <Grid size={{ xs:12, md:6 }}>
          <Card sx={{ height:'100%' }}>
            <CardContent sx={{ p:3 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:2 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>Active Partners</Typography>
                <Button size="small" color="primary" sx={{ fontSize:'0.75rem' }}>Add Partner</Button>
              </Box>
              {partners.map((p,i)=>(
                <Box key={p.name}>
                  <Box sx={{ display:'flex', alignItems:'center', gap:1.5, py:1.5 }}>
                    <Avatar sx={{ bgcolor:'#3A6B4A', width:36, height:36, fontSize:'0.72rem' }}>{p.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</Avatar>
                    <Box sx={{ flexGrow:1 }}>
                      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <Typography sx={{ fontWeight:600, fontSize:'0.85rem', fontFamily:'"Lora",serif' }}>{p.name}</Typography>
                        <Chip label={p.type} size="small" sx={{ background:'#EAF3DE', color:'#244530', fontSize:'0.65rem', fontWeight:600 }}/>
                      </Box>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.73rem', fontFamily:'"Lora",serif' }}>{p.contribution} · Since {p.since}</Typography>
                    </Box>
                  </Box>
                  {i<partners.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
