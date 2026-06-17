'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

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

const sessions = [
  { id:1, counselor:'Dr. Ruth Achieng', date:'Jul 15, 2025', time:'2:00 PM', type:'Regular', format:'Video Call', status:'Scheduled', topic:'Rest and boundaries in ministry' },
  { id:2, counselor:'Dr. Ruth Achieng', date:'Jun 18, 2025', time:'2:00 PM', type:'Regular', format:'Video Call', status:'Completed', topic:'Ministry expectations vs personal limits' },
  { id:3, counselor:'Dr. Ruth Achieng', date:'May 22, 2025', time:'2:00 PM', type:'Follow-up', format:'Video Call', status:'Completed', topic:'Family reconnect strategies' },
  { id:4, counselor:'Dr. Ruth Achieng', date:'Apr 10, 2025', time:'2:00 PM', type:'Initial', format:'In-Person', status:'Completed', topic:'Burnout assessment & care plan' },
];

export default function CounselingPage() {
  const [bookOpen, setBookOpen] = React.useState(false);
  const [crisisOpen, setCrisisOpen] = React.useState(false);
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Pastor Portal</Typography>
          <Typography variant="h4">My Counseling</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Confidential sessions with your assigned CFS counselor</Typography>
        </Box>
        <Box sx={{ display:'flex', gap:1.5 }}>
          <Button variant="outlined" size="small" onClick={()=>setCrisisOpen(true)} sx={{ borderColor:'#A32D2D', color:'#A32D2D' }} startIcon={<CrisisAlertIcon/>}>Crisis Support</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small" onClick={()=>setBookOpen(true)}>Book Session</Button>
        </Box>
      </Box>
      <Alert severity="success" icon={<LockIcon/>} sx={{ mb:3, background:'#EAF3DE', color:'#244530', border:'1px solid rgba(58,107,74,0.2)', fontFamily:'"Lora",serif', fontSize:'0.85rem' }}>
        All counseling sessions and notes are end-to-end encrypted. Only you and your counselor can access them.
      </Alert>
      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:4 }}>
          <Card>
            <CardContent sx={{ p:3 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Your Counselor</Typography>
              <Box sx={{ display:'flex', alignItems:'center', gap:1.5, mb:2 }}>
                <Avatar sx={{ bgcolor:'#3A6B4A', width:48, height:48, fontSize:'0.9rem' }}>RA</Avatar>
                <Box>
                  <Typography sx={{ fontWeight:600, fontSize:'0.92rem', fontFamily:'"Lora",serif' }}>Dr. Ruth Achieng</Typography>
                  <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>Burnout & Pastoral Care</Typography>
                  <Chip label="Available" size="small" sx={{ background:'#EAF3DE', color:'#244530', fontSize:'0.65rem', fontWeight:600, mt:0.5 }}/>
                </Box>
              </Box>
              <Divider sx={{ mb:2 }}/>
              {[['Sessions completed','4'],['Next session','Jul 15'],['Care plan','Active']].map(([l,v])=>(
                <Typography key={l} sx={{ color:'#6B4C35', fontSize:'0.8rem', fontFamily:'"Lora",serif', mb:0.8 }}>{l}: <strong style={{ color:'#2C1A0E' }}>{v}</strong></Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs:12, md:8 }}>
          <Card>
            <CardContent sx={{ p:3 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Session History</Typography>
              {sessions.map((s,i)=>(
                <Box key={s.id}>
                  <Box sx={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', py:1.8, gap:2 }}>
                    <Box sx={{ flexGrow:1 }}>
                      <Box sx={{ display:'flex', gap:1, mb:0.5, flexWrap:'wrap' }}>
                        <Chip label={s.type} size="small" sx={{ background:'#FAECE7', color:'#8B3E14', fontSize:'0.65rem' }}/>
                        <Chip label={s.format} size="small" icon={s.format==='Video Call'?<VideoCallIcon sx={{ fontSize:'12px !important' }}/>:undefined} sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.65rem' }}/>
                      </Box>
                      <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.85rem', fontFamily:'"Lora",serif' }}>{s.topic}</Typography>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.75rem', fontFamily:'"Lora",serif' }}>{s.date} · {s.time}</Typography>
                    </Box>
                    <Chip label={s.status} size="small" sx={{ background:s.status==='Scheduled'?'#FAECE7':'#EAF3DE', color:s.status==='Scheduled'?'#8B3E14':'#244530', fontSize:'0.68rem', fontWeight:600 }}/>
                  </Box>
                  {i<sessions.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={bookOpen} onClose={()=>setBookOpen(false)} maxWidth="sm" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>Book Counseling Session</Typography>
          <IconButton size="small" onClick={()=>setBookOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt:0.5 }}>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Preferred Date" size="small" type="date" slotProps={{ inputLabel: { shrink: true } }}/></Grid>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Preferred Time" size="small" type="time" slotProps={{ inputLabel: { shrink: true } }}/></Grid>
            <Grid size={{ xs:12 }}><TextField fullWidth label="Session topic (optional)" size="small" multiline rows={2} placeholder="What would you like to discuss?"/></Grid>
            <Grid size={{ xs:12 }}><Button variant="contained" color="primary" fullWidth sx={{ py:1.2 }}>Request Session</Button></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Dialog open={crisisOpen} onClose={()=>setCrisisOpen(false)} maxWidth="xs" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem', color:'#A32D2D' }}>Crisis Support</Typography>
          <IconButton size="small" onClick={()=>setCrisisOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color:'#6B4C35', mb:2.5, lineHeight:1.8 }}>You are not alone. A CFS duty counselor is available right now. Your privacy is fully protected.</Typography>
          <Button variant="contained" color="error" fullWidth sx={{ py:1.3, mb:1.5 }}>Connect to Duty Counselor Now</Button>
          <Button variant="outlined" color="primary" fullWidth onClick={()=>setCrisisOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
