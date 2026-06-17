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

export default function ServiceProgramPage() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
          <Typography variant="h4">Service Program</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Roster, sermon planning, and service scheduling</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small">Add New</Button>
      </Box>
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>Sun Jul 20</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Next Service</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>8</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Volunteers Assigned</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>Rev 12:11</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Sermon Text</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>10:00 AM</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Service Time</Typography></CardContent></Card></Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p:2.5 }}>
          <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Sunday Roster — July 20, 2025</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead><TableRow><TableCell>Role</TableCell><TableCell>Assigned To</TableCell><TableCell>Confirmed</TableCell><TableCell>Notes</TableCell></TableRow></TableHead>
              <TableBody>
              <TableRow key={0} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Worship Leader</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Grace Akinyi</Typography></TableCell><TableCell align="center"><Chip label="Yes" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>3 songs + opener</Typography></TableCell></TableRow>
              <TableRow key={1} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Preacher</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Pastor James Kariuki</Typography></TableCell><TableCell align="center"><Chip label="Yes" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Sermon: Rev 12:11</Typography></TableCell></TableRow>
              <TableRow key={2} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Offering Coordinator</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>John Kamau</Typography></TableCell><TableCell align="center"><Chip label="Yes" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Buckets ready</Typography></TableCell></TableRow>
              <TableRow key={3} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Children Church Lead</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Faith Wanjiru</Typography></TableCell><TableCell align="center"><Chip label="Yes" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Theme: Daniel</Typography></TableCell></TableRow>
              <TableRow key={4} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>PA / Sound</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Samuel Kipchoge</Typography></TableCell><TableCell align="center"><Chip label="Yes" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Setup by 8:30AM</Typography></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
