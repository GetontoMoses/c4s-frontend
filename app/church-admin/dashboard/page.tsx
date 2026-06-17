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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardShell from '../../components/DashboardShell';
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChurchIcon from '@mui/icons-material/Church';
import EventIcon from '@mui/icons-material/Event';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Link from 'next/link';

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

const tasks = [
  { text:'Approve Sunday service roster', done:true, due:'Today', assignee:'Self' },
  { text:'Follow up: 3 absent members (3 consecutive weeks)', done:false, due:'Today', assignee:'Care Team' },
  { text:'Upload Q2 financial statement', done:false, due:'Jul 15', assignee:'Finance Officer' },
  { text:'Send event reminder for Youth Conference', done:false, due:'Jul 14', assignee:'Youth Leader' },
  { text:'Review wellness fund disbursement request', done:false, due:'Jul 16', assignee:'Self' },
];

const attendance = [
  { week:'Jun 1', count:287 }, { week:'Jun 8', count:301 }, { week:'Jun 15', count:295 },
  { week:'Jun 22', count:318 }, { week:'Jun 29', count:342 },
];
const maxAtt = Math.max(...attendance.map(a=>a.count));

export default function ChurchAdminDashboard() {
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
        <Typography variant="h4">Nairobi Shepherd&apos;s Church</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Church Operations Dashboard · June 2025</Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:4 }}>
        {[
          { icon:<PeopleIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Total Members', value:'342', sub:'+8 this month', bg:'#FAECE7' },
          { icon:<FavoriteIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Wellness Fund', value:'KES 84.5K', sub:'70% of goal', bg:'#EAF3DE' },
          { icon:<AccountBalanceIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Monthly Income', value:'KES 148K', sub:'+12% vs last month', bg:'#FAECE7' },
          { icon:<EventIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Upcoming Events', value:'4', sub:'Next: Sunday Service', bg:'#EAF3DE' },
        ].map(s=>(
          <Grid size={{ xs:6, md:3 }} key={s.label}><StatCard {...s}/></Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Attendance trend */}
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Attendance — Last 5 Sundays</Typography>
              <Box sx={{ display:'flex', alignItems:'flex-end', gap:1.5, height:100 }}>
                {attendance.map(a=>(
                  <Box key={a.week} sx={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:0.5 }}>
                    <Typography sx={{ fontSize:'0.68rem', fontFamily:'"Lora",serif', color:'#6B4C35', fontWeight:600 }}>{a.count}</Typography>
                    <Box sx={{ width:'100%', height:`${Math.round((a.count/maxAtt)*80)}px`, background:'linear-gradient(180deg,#C2622A,#E8845A)', borderRadius:'4px 4px 0 0', minHeight:12 }}/>
                    <Typography sx={{ fontSize:'0.63rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{a.week}</Typography>
                  </Box>
                ))}
              </Box>
              <Divider sx={{ my:2 }}/>
              <Box sx={{ display:'flex', gap:3 }}>
                {[['342','Current members'],['89%','Avg attendance rate'],['3','Absent ×3 — follow up']].map(([v,l])=>(
                  <Box key={l}>
                    <Typography sx={{ fontWeight:700, color:'#C2622A', fontSize:'1.1rem', fontFamily:'"Playfair Display",serif' }}>{v}</Typography>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.72rem', fontFamily:'"Lora",serif' }}>{l}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick actions */}
        <Grid size={{ xs:12, md:5 }}>
          <Card sx={{ height:'100%' }}>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Quick Actions</Typography>
              <Grid container spacing={1.5}>
                {[
                  { label:'Add Member', href:'/church-admin/members', color:'#FAECE7', tc:'#8B3E14' },
                  { label:'Send SMS Blast', href:'/church-admin/communications', color:'#EAF3DE', tc:'#244530' },
                  { label:'Record Offering', href:'/church-admin/finance', color:'#FAECE7', tc:'#8B3E14' },
                  { label:'Create Event', href:'/church-admin/events', color:'#EAF3DE', tc:'#244530' },
                  { label:'Service Roster', href:'/church-admin/service-program', color:'#FAECE7', tc:'#8B3E14' },
                  { label:'Request Resource', href:'/church-admin/resources', color:'#EAF3DE', tc:'#244530' },
                ].map(a=>(
                  <Grid size={{ xs:6 }} key={a.label}>
                    <Button component={Link} href={a.href} fullWidth variant="outlined" sx={{ background:a.color, borderColor:'transparent', color:a.tc, fontSize:'0.78rem', py:1.2, '&:hover':{ background:a.color, borderColor:a.tc } }}>{a.label}</Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Tasks */}
        <Grid size={{ xs:12, md:6 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:2 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>Pending Tasks</Typography>
                <Chip label={`${tasks.filter(t=>!t.done).length} pending`} size="small" sx={{ background:'#FAECE7', color:'#C2622A', fontSize:'0.68rem', fontWeight:600 }}/>
              </Box>
              <List dense disablePadding>
                {tasks.map((t,i)=>(
                  <React.Fragment key={i}>
                    <ListItem disablePadding sx={{ py:1, gap:1 }}>
                      {t.done ? <CheckCircleIcon sx={{ fontSize:16, color:'#3A6B4A', flexShrink:0 }}/> : <RadioButtonUncheckedIcon sx={{ fontSize:16, color:'#C2622A', flexShrink:0 }}/>}
                      <ListItemText
                        primary={t.text}
                        secondary={`Due: ${t.due} · ${t.assignee}`}
                        slotProps={{
                          primary: { sx:{ fontSize:'0.82rem', color:t.done?'#6B4C35':'#2C1A0E', textDecoration:t.done?'line-through':'none', fontFamily:'"Lora",serif' } },
                          secondary: { sx:{ fontSize:'0.7rem', color:'#6B4C35', fontFamily:'"Lora",serif' } }
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

        {/* Pastor wellness alert */}
        <Grid size={{ xs:12, md:6 }}>
          <Card sx={{ background:'linear-gradient(135deg,#2C1A0E,#3A6B4A)', height:'100%' }}>
            <CardContent sx={{ p:3 }}>
              <Typography variant="overline" sx={{ color:'#E8845A', fontSize:'0.68rem' }}>Pastor Wellness</Typography>
              <Typography variant="h5" sx={{ color:'#FDF6EE', mt:0.5, mb:1.5, fontSize:'1.15rem' }}>Pastor James Kariuki</Typography>
              <Box sx={{ mb:2 }}>
                <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                  <Typography sx={{ color:'rgba(253,246,238,0.65)', fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>Wellness Fund Progress</Typography>
                  <Typography sx={{ color:'#FDF6EE', fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>70%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={70} sx={{ height:6, borderRadius:3, backgroundColor:'rgba(253,246,238,0.15)', '& .MuiLinearProgress-bar':{ backgroundColor:'#C2622A' } }}/>
              </Box>
              <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2.5, p:1.5, background:'rgba(253,246,238,0.06)', borderRadius:2 }}>
                <WarningAmberIcon sx={{ color:'#E8845A', fontSize:17 }}/>
                <Typography sx={{ color:'rgba(253,246,238,0.8)', fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>Pastor has not taken a rest day in 45 days</Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth sx={{ py:1.1 }} component={Link} href="/church-admin/wellness-fund">
                Manage Wellness Fund
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
