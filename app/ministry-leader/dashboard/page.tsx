'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DashboardShell from '../../components/DashboardShell';
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddIcon from '@mui/icons-material/Add';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/ministry-leader/dashboard' },
  { label:'My Team', icon:<GroupsIcon/>, href:'/ministry-leader/members' },
  { label:'Tasks', icon:<AssignmentIcon/>, href:'/ministry-leader/tasks' },
];
const user = { name:'Grace Waweru', role:'ministry_leader' as const, initials:'GW', church:"Nairobi Shepherd's Church" };

const tasks = [
  { text:'Confirm worship team for Sunday service', done:false, due:'Jul 19', priority:'High' },
  { text:'Prepare Sunday bulletin & order of service', done:false, due:'Jul 19', priority:'High' },
  { text:'Collect offering envelopes from storeroom', done:true, due:'Jul 18', priority:'Medium' },
  { text:'Youth conference planning meeting agenda', done:false, due:'Jul 20', priority:'Medium' },
  { text:'Update Sunday school register', done:true, due:'Jul 17', priority:'Low' },
];

const team = [
  { name:'Faith Wanjiru', role:'Children Ministry', status:'Confirmed' },
  { name:'John Kamau', role:'Offering Coordinator', status:'Confirmed' },
  { name:'Samuel Kipchoge', role:'PA / Sound', status:'Confirmed' },
  { name:'David Omondi', role:'Usher Team Lead', status:'Pending' },
  { name:'Mary Otieno', role:'Prayer Team', status:'Confirmed' },
];

export default function MinistryLeaderDashboard() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Ministry Leader</Typography>
        <Typography variant="h4">Ministry Dashboard</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Nairobi Shepherd&apos;s Church · Church Administration Team</Typography>
      </Box>
      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[
          { icon:<GroupsIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Team Members', value:'12', sub:'5 assigned Sunday', bg:'#FAECE7' },
          { icon:<AssignmentIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Active Tasks', value:'8', sub:'3 completed today', bg:'#EAF3DE' },
          { icon:<CheckCircleIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Sunday Ready', value:'80%', sub:'1 pending confirmation', bg:'#EAF3DE' },
          { icon:<AddIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Events This Month', value:'3', sub:'Next: Youth Conf Jul 26', bg:'#FAECE7' },
        ].map(s=>(
          <Grid size={{ xs:6, md:3 }} key={s.label}><StatCard {...s}/></Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:6 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:2 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>Sunday Roster — Jul 20</Typography>
                <Chip label="1 pending" size="small" sx={{ background:'#FAECE7', color:'#C2622A', fontSize:'0.68rem', fontWeight:600 }}/>
              </Box>
              {team.map((m,i)=>(
                <React.Fragment key={m.name}>
                  <Box sx={{ display:'flex', alignItems:'center', gap:1.5, py:1.2 }}>
                    <Avatar sx={{ bgcolor:m.status==='Pending'?'#6B4C35':'#3A6B4A', width:30, height:30, fontSize:'0.65rem' }}>{m.name.split(' ').map(n=>n[0]).join('')}</Avatar>
                    <Box sx={{ flexGrow:1 }}>
                      <Typography sx={{ fontWeight:600, fontSize:'0.83rem', fontFamily:'"Lora",serif' }}>{m.name}</Typography>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.72rem', fontFamily:'"Lora",serif' }}>{m.role}</Typography>
                    </Box>
                    <Chip label={m.status} size="small" sx={{ background:m.status==='Confirmed'?'#EAF3DE':'#FAECE7', color:m.status==='Confirmed'?'#244530':'#8B3E14', fontSize:'0.65rem', fontWeight:600 }}/>
                  </Box>
                  {i<team.length-1 && <Divider/>}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs:12, md:6 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', mb:2 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>My Tasks</Typography>
                <Chip label={`${tasks.filter(t=>!t.done).length} pending`} size="small" sx={{ background:'#FAECE7', color:'#C2622A', fontSize:'0.68rem', fontWeight:600 }}/>
              </Box>
              <List dense disablePadding>
                {tasks.map((t,i)=>(
                  <React.Fragment key={i}>
                    <ListItem disablePadding sx={{ py:0.9, gap:1, alignItems:'flex-start' }}>
                      {t.done ? <CheckCircleIcon sx={{ fontSize:15, color:'#3A6B4A', flexShrink:0, mt:0.2 }}/> : <RadioButtonUncheckedIcon sx={{ fontSize:15, color:'#C2622A', flexShrink:0, mt:0.2 }}/>}
                      <ListItemText
                        primary={t.text}
                        secondary={`Due ${t.due} · ${t.priority}`}
                        slotProps={{
                          primary:{ sx:{ fontSize:'0.82rem', color:t.done?'#6B4C35':'#2C1A0E', textDecoration:t.done?'line-through':'none', fontFamily:'"Lora",serif' } },
                          secondary:{ sx:{ fontSize:'0.7rem', color:'#6B4C35', fontFamily:'"Lora",serif' } }
                        }}
                      />
                    </ListItem>
                    {i<tasks.length-1 && <Divider/>}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
