'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/pastor/dashboard' },
  { label:'My Wellness', icon:<SpaIcon/>, href:'/pastor/wellness' },
  { label:'Counseling', icon:<PsychologyIcon/>, href:'/pastor/counseling' },
  { label:'Sermons', icon:<MenuBookIcon/>, href:'/pastor/sermons' },
  { label:'Retreats & Rest', icon:<NatureIcon/>, href:'/pastor/retreats' },
  { label:'Peer Community', icon:<GroupsIcon/>, href:'/pastor/community' },
  { label:'My Tasks', icon:<AssignmentIcon/>, href:'/pastor/tasks' },
];
const user = { name:'Pastor James Kariuki', role:'pastor' as const, initials:'JK', church:"Nairobi Shepherd's Church" };

export default function Page() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Pastor Portal</Typography>
        <Typography variant="h4" sx={{ textTransform:'capitalize' }}>tasks</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>This section is ready for content</Typography>
      </Box>
      <Card>
        <CardContent sx={{ p:4, textAlign:'center' }}>
          <Typography variant="h5" sx={{ color:'#6B4C35', mb:1 }}>Coming Soon</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35' }}>This module is under development</Typography>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
