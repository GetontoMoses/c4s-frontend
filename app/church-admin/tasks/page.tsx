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

export default function TasksPage() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
          <Typography variant="h4">Tasks</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Delegate and track tasks across church teams</Typography>
        </Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small">Add New</Button>
      </Box>
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>18</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Total Tasks</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>7</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Completed</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>8</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>In Progress</Typography></CardContent></Card></Grid>
        <Grid size={{ xs:6, md:3 }}><Card><CardContent sx={{ p:2.5, textAlign:"center" }}><Typography variant="h4" sx={{ color:"#C2622A", fontWeight:700, mb:0.3 }}>3</Typography><Typography variant="caption" sx={{ color:"#6B4C35" }}>Overdue</Typography></CardContent></Card></Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p:2.5 }}>
          <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Task Board</Typography>
          <TableContainer>
            <Table size="small">
              <TableHead><TableRow><TableCell>Task</TableCell><TableCell>Assigned To</TableCell><TableCell>Due Date</TableCell><TableCell>Priority</TableCell><TableCell>Status</TableCell></TableRow></TableHead>
              <TableBody>
              <TableRow key={0} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Prepare Sunday bulletin</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Grace Akinyi</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 19</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>High</Typography></TableCell><TableCell align="center"><Chip label="In Progress" size="small" sx={{ background:"#F5EDE0", color:"#6B4C35", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={1} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Update member register</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Mary Njoroge</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 18</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Medium</Typography></TableCell><TableCell align="center"><Chip label="Completed" size="small" sx={{ background:"#EAF3DE", color:"#244530", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={2} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Sound check — Sunday</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Samuel Kipchoge</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 20</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>High</Typography></TableCell><TableCell align="center"><Chip label="Pending" size="small" sx={{ background:"#F5EDE0", color:"#6B4C35", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={3} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Follow up: 3 absent members</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Care Team Lead</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 17</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>High</Typography></TableCell><TableCell align="center"><Chip label="Overdue" size="small" sx={{ background:"#FCEBEB", color:"#A32D2D", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              <TableRow key={4} hover><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#2C1A0E" }}>Submit Q2 financial report</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>David Ochieng</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>Jul 20</Typography></TableCell><TableCell><Typography sx={{ fontSize:"0.82rem", fontFamily:"\"Lora\",serif", color:"#6B4C35" }}>High</Typography></TableCell><TableCell align="center"><Chip label="In Progress" size="small" sx={{ background:"#F5EDE0", color:"#6B4C35", fontSize:"0.68rem", fontWeight:600 }}/></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
