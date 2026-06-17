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
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

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

const wellnessDimensions = [
  { label:'Emotional Health', score:72, color:'#C2622A' },
  { label:'Physical Rest', score:45, color:'#A32D2D' },
  { label:'Spiritual Vitality', score:81, color:'#3A6B4A' },
  { label:'Family Wellbeing', score:63, color:'#C2622A' },
  { label:'Ministry Satisfaction', score:77, color:'#3A6B4A' },
];

const tasks = [
  { text:'Sunday sermon preparation — Rev 12:11', done:true, due:'Jul 18', assignee:'Self' },
  { text:'Review youth conference budget', done:false, due:'Jul 19', assignee:'Delegated: Grace' },
  { text:'Follow up: John Kamau pastoral visit', done:false, due:'Jul 20', assignee:'Self' },
  { text:'Board meeting agenda preparation', done:false, due:'Jul 22', assignee:'Delegated: Mary' },
  { text:'Monthly wellness assessment', done:false, due:'Jul 25', assignee:'Self' },
];

const activity = [
  { text:'Wellness fund: KES 8,500 donated by John Kamau', time:'2h ago', type:'fund' },
  { text:'Sunday roster finalized — no action needed', time:'5h ago', type:'task' },
  { text:'Peer cohort meeting: Friday 3PM via Zoom', time:'Yesterday', type:'community' },
  { text:'New resource: "Boundaries in Ministry" added', time:'2d ago', type:'library' },
];

export default function PastorDashboard() {
  const wellnessScore = 68;
  const scoreColor = wellnessScore >= 75 ? '#3A6B4A' : wellnessScore >= 55 ? '#C2622A' : '#A32D2D';

  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Pastor Portal</Typography>
        <Typography variant="h4">Welcome, Pastor James</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>
          Nairobi Shepherd&apos;s Church · <Box component="span" sx={{ color:'#C2622A', fontWeight:600 }}>You have not taken a rest day in 45 days.</Box>
        </Typography>
      </Box>

      {/* Burnout alert */}
      <Box sx={{ display:'flex', alignItems:'center', gap:1.5, p:2, mb:3, background:'#FAECE7', borderRadius:2, border:'1px solid rgba(194,98,42,0.25)' }}>
        <WarningAmberIcon sx={{ color:'#C2622A', fontSize:20, flexShrink:0 }}/>
        <Box sx={{ flexGrow:1 }}>
          <Typography sx={{ fontWeight:600, color:'#8B3E14', fontSize:'0.87rem', fontFamily:'"Lora",serif' }}>Your physical rest score dropped 12 points this month</Typography>
          <Typography sx={{ color:'#8B3E14', fontSize:'0.77rem', fontFamily:'"Lora",serif' }}>Consider booking a day away. Your wellness fund has KES 84,500 available.</Typography>
        </Box>
        <Button variant="contained" color="primary" size="small" component={Link} href="/pastor/retreats" sx={{ whiteSpace:'nowrap', fontSize:'0.78rem' }}>Book Rest Day</Button>
      </Box>

      <Grid container spacing={3}>
        {/* Wellness Score */}
        <Grid size={{ xs:12, md:4 }}>
          <Card sx={{ height:'100%' }}>
            <CardContent sx={{ p:3 }}>
              <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2.5 }}>
                <SpaIcon sx={{ color:'#3A6B4A', fontSize:18 }}/>
                <Typography variant="overline" sx={{ color:'#6B4C35', fontSize:'0.68rem' }}>Wellness Score</Typography>
              </Box>
              <Box sx={{ position:'relative', textAlign:'center', mb:2.5 }}>
                <Box sx={{ width:120, height:120, borderRadius:'50%', mx:'auto', background:`conic-gradient(${scoreColor} ${wellnessScore*3.6}deg,#F5EDE0 0deg)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Box sx={{ width:90, height:90, borderRadius:'50%', background:'#FFFAF4', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                    <Typography variant="h4" sx={{ color:scoreColor, lineHeight:1, fontSize:'1.8rem' }}>{wellnessScore}</Typography>
                    <Typography variant="caption" sx={{ color:'#6B4C35', fontSize:'0.62rem' }}>/100</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ mb:2 }}/>
              {wellnessDimensions.map(d=>(
                <Box key={d.label} sx={{ mb:1.6 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.4 }}>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>{d.label}</Typography>
                    <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>{d.score}</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={d.score} sx={{ height:5, borderRadius:3, '& .MuiLinearProgress-bar':{ backgroundColor:d.color } }}/>
                </Box>
              ))}
              <Button variant="outlined" color="primary" fullWidth size="small" sx={{ mt:2, fontSize:'0.8rem' }} component={Link} href="/pastor/wellness">
                Take Assessment
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right column */}
        <Grid size={{ xs:12, md:8 }}>
          <Grid container spacing={2.5}>
            {/* Wellness Fund */}
            <Grid size={{ xs:12 }}>
              <Card sx={{ background:'linear-gradient(135deg,#2C1A0E,#3A6B4A)' }}>
                <CardContent sx={{ p:3 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:1.5 }}>
                    <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
                      <FavoriteIcon sx={{ color:'#E8845A', fontSize:18 }}/>
                      <Typography variant="overline" sx={{ color:'#E8845A', fontSize:'0.68rem' }}>Your Wellness Fund</Typography>
                    </Box>
                    <Chip label="Active" size="small" sx={{ background:'#EAF3DE', color:'#244530', fontWeight:600, fontSize:'0.68rem' }}/>
                  </Box>
                  <Typography sx={{ color:'#FDF6EE', fontFamily:'"Lora",serif', fontSize:'0.88rem', mb:1.5 }}>Sabbatical & Family Retreat Fund — 47 donors contributing</Typography>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                    <Typography sx={{ color:'rgba(253,246,238,0.6)', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>KES 84,500 raised of KES 120,000 goal</Typography>
                    <Typography sx={{ color:'#FDF6EE', fontWeight:600, fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>70%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={70} sx={{ height:6, borderRadius:3, backgroundColor:'rgba(253,246,238,0.15)', '& .MuiLinearProgress-bar':{ backgroundColor:'#C2622A' } }}/>
                </CardContent>
              </Card>
            </Grid>

            {/* Upcoming Rest */}
            <Grid size={{ xs:12, sm:6 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2 }}>
                    <CalendarMonthIcon sx={{ color:'#C2622A', fontSize:18 }}/>
                    <Typography variant="h6" sx={{ fontSize:'0.95rem' }}>Upcoming Retreat</Typography>
                  </Box>
                  <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.9rem', fontFamily:'"Lora",serif', mb:0.3 }}>Naivasha Family Retreat</Typography>
                  <Typography sx={{ color:'#6B4C35', fontSize:'0.78rem', fontFamily:'"Lora",serif', mb:1 }}>Aug 14–21, 2025 · 7 nights</Typography>
                  <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif', mb:1.5 }}>Great Rift Valley Lodge, Naivasha</Typography>
                  <Box sx={{ display:'flex', gap:0.8, flexWrap:'wrap' }}>
                    {['Family Package','All Meals','Reflection Guide'].map(t=>(
                      <Chip key={t} label={t} size="small" sx={{ background:'#EAF3DE', color:'#244530', fontSize:'0.65rem' }}/>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Next session */}
            <Grid size={{ xs:12, sm:6 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2 }}>
                    <PsychologyIcon sx={{ color:'#3A6B4A', fontSize:18 }}/>
                    <Typography variant="h6" sx={{ fontSize:'0.95rem' }}>Counseling</Typography>
                  </Box>
                  <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.88rem', fontFamily:'"Lora",serif', mb:0.3 }}>Dr. Ruth Achieng</Typography>
                  <Typography sx={{ color:'#6B4C35', fontSize:'0.78rem', fontFamily:'"Lora",serif', mb:0.5 }}>Next session: Jul 15, 2025 · 2:00 PM</Typography>
                  <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif', mb:1.5 }}>Topic: Rest, boundaries and renewal</Typography>
                  <Button variant="outlined" color="secondary" fullWidth size="small" sx={{ fontSize:'0.78rem' }}>View Session Notes</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Tasks */}
            <Grid size={{ xs:12, sm:6 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:1.5 }}>
                    <Typography variant="h6" sx={{ fontSize:'0.95rem' }}>My Tasks</Typography>
                    <Chip label={`${tasks.filter(t=>!t.done).length} pending`} size="small" sx={{ background:'#FAECE7', color:'#C2622A', fontSize:'0.68rem', fontWeight:600 }}/>
                  </Box>
                  <List dense disablePadding>
                    {tasks.slice(0,4).map((t,i)=>(
                      <React.Fragment key={i}>
                        <ListItem disablePadding sx={{ py:0.8, gap:1, alignItems:'flex-start' }}>
                          {t.done
                            ? <CheckCircleIcon sx={{ fontSize:15, color:'#3A6B4A', flexShrink:0, mt:0.3 }}/>
                            : <RadioButtonUncheckedIcon sx={{ fontSize:15, color:'#C2622A', flexShrink:0, mt:0.3 }}/>
                          }
                          <ListItemText
                            primary={t.text}
                            secondary={`Due ${t.due} · ${t.assignee}`}
                            slotProps={{
                              primary:{ sx:{ fontSize:'0.8rem', color:t.done?'#6B4C35':'#2C1A0E', textDecoration:t.done?'line-through':'none', fontFamily:'"Lora",serif', lineHeight:1.3 } },
                              secondary:{ sx:{ fontSize:'0.68rem', color:'#6B4C35', fontFamily:'"Lora",serif' } }
                            }}
                          />
                        </ListItem>
                        {i<3 && <Divider/>}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Recent activity */}
            <Grid size={{ xs:12, sm:6 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Typography variant="h6" sx={{ fontSize:'0.95rem', mb:1.5 }}>Recent Activity</Typography>
                  {activity.map((a,i)=>(
                    <Box key={i}>
                      <Box sx={{ py:1 }}>
                        <Typography sx={{ fontSize:'0.8rem', color:'#2C1A0E', fontFamily:'"Lora",serif', lineHeight:1.4 }}>{a.text}</Typography>
                        <Typography sx={{ fontSize:'0.68rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{a.time}</Typography>
                      </Box>
                      {i<activity.length-1 && <Divider/>}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
