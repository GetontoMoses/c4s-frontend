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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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

const dimensions = [
  ['Emotional Health',72,'#C2622A'],['Physical Rest',45,'#A32D2D'],
  ['Spiritual Vitality',81,'#3A6B4A'],['Family Wellbeing',63,'#C2622A'],
  ['Ministry Satisfaction',77,'#3A6B4A'],
];
const history = [
  { month:'Feb', score:71 },{ month:'Mar', score:68 },{ month:'Apr', score:74 },
  { month:'May', score:70 },{ month:'Jun', score:65 },{ month:'Jul', score:68 },
];
const questions = [
  { id:'q1', label:'I feel physically rested and have adequate energy for ministry', dim:'Physical Rest' },
  { id:'q2', label:'I am able to set healthy boundaries between ministry and personal life', dim:'Emotional Health' },
  { id:'q3', label:'My family relationships are healthy and not strained by ministry demands', dim:'Family Wellbeing' },
  { id:'q4', label:'I experience genuine joy and purpose in my ministry work', dim:'Ministry Satisfaction' },
  { id:'q5', label:'I have regular time for personal prayer, scripture, and spiritual reflection', dim:'Spiritual Vitality' },
];
const maxH = Math.max(...history.map(h=>h.score));

export default function WellnessPage() {
  const [answers, setAnswers] = React.useState<Record<string,string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Pastor Portal</Typography>
        <Typography variant="h4">My Wellness</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Track your wellbeing and complete monthly assessments</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:7 }}>
          <Card sx={{ mb:3 }}>
            <CardContent sx={{ p:3 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Wellness Score History (6 months)</Typography>
              <Box sx={{ display:'flex', alignItems:'flex-end', gap:2, height:100, mb:1 }}>
                {history.map(h=>(
                  <Box key={h.month} sx={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:0.5 }}>
                    <Typography sx={{ fontSize:'0.68rem', fontFamily:'"Lora",serif', color:'#6B4C35', fontWeight:600 }}>{h.score}</Typography>
                    <Box sx={{ width:'100%', height:`${Math.round((h.score/maxH)*80)}px`, background:'linear-gradient(180deg,#C2622A,#E8845A)', borderRadius:'4px 4px 0 0', minHeight:12 }}/>
                    <Typography sx={{ fontSize:'0.63rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{h.month}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent sx={{ p:3 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', mb:2.5 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>Monthly Assessment — July 2025</Typography>
                <Chip label="Due Now" size="small" sx={{ background:'#FAECE7', color:'#C2622A', fontWeight:600, fontSize:'0.68rem' }}/>
              </Box>
              {!submitted ? (
                <Box>
                  {questions.map((q,i)=>(
                    <Box key={q.id} sx={{ mb:2.5 }}>
                      <FormControl component="fieldset" fullWidth>
                        <FormLabel sx={{ fontSize:'0.85rem', fontFamily:'"Lora",serif', color:'#2C1A0E', fontWeight:600, mb:0.5, '&.Mui-focused':{ color:'#2C1A0E' } }}>{i+1}. {q.label}</FormLabel>
                        <Typography sx={{ fontSize:'0.7rem', color:'#C2622A', fontFamily:'"Lora",serif', mb:0.8 }}>{q.dim}</Typography>
                        <RadioGroup row value={answers[q.id]||''} onChange={e=>setAnswers(prev=>({...prev,[q.id]:e.target.value}))}>
                          {['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'].map(opt=>(
                            <FormControlLabel key={opt} value={opt} control={<Radio size="small" sx={{ color:'#C2622A','&.Mui-checked':{ color:'#C2622A' } }}/>}
                              label={<Typography sx={{ fontSize:'0.73rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{opt}</Typography>} />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  ))}
                  <Button variant="contained" color="primary" fullWidth sx={{ py:1.2 }} onClick={()=>setSubmitted(true)}
                    disabled={Object.keys(answers).length < questions.length}>Submit Assessment</Button>
                </Box>
              ) : (
                <Box sx={{ textAlign:'center', py:3 }}>
                  <Typography sx={{ fontSize:'2.5rem', mb:2 }}>🌿</Typography>
                  <Typography variant="h5" sx={{ mb:1 }}>Assessment submitted</Typography>
                  <Typography variant="body2" sx={{ color:'#6B4C35' }}>Your counselor will review your responses. Next assessment due in 30 days.</Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs:12, md:5 }}>
          <Card>
            <CardContent sx={{ p:3 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Scores by Dimension</Typography>
              {dimensions.map(([l,s,c])=>(
                <Box key={l as string} sx={{ mb:2 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>{l}</Typography>
                    <Typography sx={{ fontWeight:700, color:c as string, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{s as number}/100</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={s as number} sx={{ height:6, borderRadius:3, '& .MuiLinearProgress-bar':{ backgroundColor:c as string } }}/>
                  <Typography sx={{ fontSize:'0.68rem', color:'#6B4C35', fontFamily:'"Lora",serif', mt:0.3 }}>
                    {(s as number)<55?'Needs attention':(s as number)<70?'Monitor closely':'Healthy range'}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
