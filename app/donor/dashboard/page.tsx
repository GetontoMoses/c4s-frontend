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
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/donor/dashboard' },
  { label:'Campaigns', icon:<CampaignIcon/>, href:'/donor/campaigns' },
  { label:'My Giving', icon:<FavoriteIcon/>, href:'/donor/dashboard' },
  { label:'Impact Reports', icon:<BarChartIcon/>, href:'/donor/dashboard' },
  { label:'Partnership', icon:<HandshakeIcon/>, href:'/donor/dashboard' },
];
const user = { name:'Peter Mutua', role:'donor' as const, initials:'PM' };

const campaigns = [
  { pastor:'Pastor James Kariuki', church:"Nairobi Shepherd's Church", title:'Sabbatical & Family Retreat 2025', raised:84500, goal:120000, daysLeft:23, myContrib:5000 },
  { pastor:'Pastor Grace Wanjiru', church:'Rift Valley Pentecostal', title:'Pastoral Wellness Package', raised:61000, goal:75000, daysLeft:11, myContrib:2000 },
  { pastor:'Cohort — Nairobi Region', church:'5 Churches', title:'Annual Peer Retreat Fund', raised:143000, goal:200000, daysLeft:30, myContrib:10000 },
];

const contributions = [
  { campaign:"Pastor James — Sabbatical Fund", amount:5000, date:'Jul 12', receipt:'RCP-001245' },
  { campaign:'Pastor Grace — Wellness Package', amount:2000, date:'Jul 8', receipt:'RCP-001198' },
  { campaign:'Annual Peer Retreat Fund', amount:10000, date:'Jun 30', receipt:'RCP-001102' },
  { campaign:'CFS General Support Fund', amount:15000, date:'Jun 15', receipt:'RCP-001050' },
];

export default function DonorDashboard() {
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>Donor Portal</Typography>
        <Typography variant="h4">Welcome, Peter</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Thank you for supporting pastoral wellness across Africa</Typography>
      </Box>
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[
          { icon:<FavoriteIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Total Contributed', value:'KES 32,000', sub:'This year', bg:'#EAF3DE' },
          { icon:<CampaignIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Campaigns Supported', value:'4', sub:'3 active', bg:'#FAECE7' },
          { icon:<HandshakeIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Pastors Impacted', value:'12', sub:'Through your giving', bg:'#EAF3DE' },
          { icon:<BarChartIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Retreats Funded', value:'3', sub:'Fully or partially', bg:'#FAECE7' },
        ].map(s=>(
          <Grid size={{ xs:6, md:3 }} key={s.label}><StatCard {...s}/></Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Active Campaigns You Support</Typography>
              {campaigns.map((c,i)=>{
                const pct = Math.round((c.raised/c.goal)*100);
                return (
                  <Box key={i}>
                    <Box sx={{ py:2 }}>
                      <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                        <Typography sx={{ fontWeight:600, fontSize:'0.88rem', fontFamily:'"Lora",serif' }}>{c.pastor}</Typography>
                        <Chip label={`${c.daysLeft}d left`} size="small" sx={{ background:'#FAECE7', color:'#8B3E14', fontSize:'0.65rem', fontWeight:600 }}/>
                      </Box>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.78rem', fontFamily:'"Lora",serif', mb:1 }}>{c.title} · {c.church}</Typography>
                      <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                        <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>KES {c.raised.toLocaleString()} of {c.goal.toLocaleString()}</Typography>
                        <Typography sx={{ color:'#3A6B4A', fontSize:'0.75rem', fontFamily:'"Lora",serif', fontWeight:600 }}>Your gift: KES {c.myContrib.toLocaleString()}</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={pct} sx={{ height:5, borderRadius:3, '& .MuiLinearProgress-bar':{ backgroundColor:'#3A6B4A' } }}/>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.7rem', mt:0.3, fontFamily:'"Lora",serif' }}>{pct}% funded</Typography>
                    </Box>
                    {i<campaigns.length-1 && <Divider/>}
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs:12, md:5 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>My Contribution History</Typography>
              {contributions.map((c,i)=>(
                <Box key={i}>
                  <Box sx={{ py:1.5 }}>
                    <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.4 }}>
                      <Typography sx={{ fontWeight:600, color:'#3A6B4A', fontSize:'0.9rem', fontFamily:'"Lora",serif' }}>KES {c.amount.toLocaleString()}</Typography>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.73rem', fontFamily:'"Lora",serif' }}>{c.date}</Typography>
                    </Box>
                    <Typography sx={{ color:'#2C1A0E', fontSize:'0.82rem', fontFamily:'"Lora",serif', mb:0.3 }}>{c.campaign}</Typography>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.7rem', fontFamily:'"Lora",serif' }}>Receipt: {c.receipt}</Typography>
                  </Box>
                  {i<contributions.length-1 && <Divider/>}
                </Box>
              ))}
              <Button variant="outlined" color="primary" fullWidth size="small" sx={{ mt:2, fontSize:'0.8rem' }}>Download All Receipts</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
