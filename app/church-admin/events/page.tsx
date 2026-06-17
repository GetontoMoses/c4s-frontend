'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChurchIcon from '@mui/icons-material/Church';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/church-admin/dashboard' },
  { label:'Members', icon:<PeopleIcon/>, href:'/church-admin/members' },
  { label:'Wellness Fund', icon:<FavoriteIcon/>, href:'/church-admin/wellness-fund' },
  { label:'Finance', icon:<AccountBalanceIcon/>, href:'/church-admin/finance' },
  { label:'Service Program', icon:<ChurchIcon/>, href:'/church-admin/service-program' },
  { label:'Events', icon:<EventIcon/>, href:'/church-admin/events' },
  { label:'Communications', icon:<MessageIcon/>, href:'/church-admin/communications' },
  { label:'Tasks', icon:<AssignmentIcon/>, href:'/church-admin/tasks' },
  { label:'Resources', icon:<InventoryIcon/>, href:'/church-admin/resources' },
];
const user = { name:'Mary Njoroge', role:'church_admin' as const, initials:'MN', church:"Nairobi Shepherd's Church" };

export default function EventsPage() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
          <Typography variant="h4">Events</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Create and manage church events</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small">Add New</Button>
      </Box>
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>4</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Upcoming Events</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>312</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Total Registered</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>Jul 20</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Next Event</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>2</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Pending</Typography></CardContent></Card></Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p:2.5 }}>
          <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Upcoming Events</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead><TableRow><TableCell>Event</TableCell><TableCell>Date</TableCell><TableCell>Venue</TableCell><TableCell>Registered</TableCell><TableCell>Status</TableCell></TableRow></TableHead>
              <TableBody>
              <TableRow key={0} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Sunday Service</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 20, 2025</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Main Sanctuary</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>—</Typography></TableCell><TableCell align="center"><Chip label="Recurring" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={1} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Youth Conference 2025</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 26-27, 2025</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Church Hall</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>87</Typography></TableCell><TableCell align="center"><Chip label="Open" size="small" sx={{ background:"#FAECE7", color:"#8B3E14", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={2} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Women of Faith Breakfast</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Aug 2, 2025</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Church Hall</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>34</Typography></TableCell><TableCell align="center"><Chip label="Open" size="small" sx={{ background:"#FAECE7", color:"#8B3E14", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={3} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Annual Fundraising Gala</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Sep 6, 2025</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>KICC Nairobi</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>0</Typography></TableCell><TableCell align="center"><Chip label="Planning" size="small" sx={{ background:"#F5EDE0", color:"#6B4C35", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
