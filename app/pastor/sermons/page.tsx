'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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

const sermons = [
  { id:1, title:'Walking by Faith, Not by Sight', scripture:'2 Cor 5:7', date:'Jul 13, 2025', occasion:'Sunday Service', tags:['Faith','Trust'], status:'Preached' },
  { id:2, title:'The God Who Restores', scripture:'Psalm 23', date:'Jul 6, 2025', occasion:'Sunday Service', tags:['Rest','Restoration'], status:'Preached' },
  { id:3, title:'Overcoming Through Christ', scripture:'Rev 12:11', date:'Jul 20, 2025', occasion:'Sunday Service', tags:['Victory','Spiritual Warfare'], status:'Draft' },
  { id:4, title:'When God Seems Silent', scripture:'Hab 1:2-4', date:'Jun 29, 2025', occasion:'Sunday Service', tags:['Suffering','Trust'], status:'Preached' },
  { id:5, title:'Building on the Rock', scripture:'Matt 7:24-27', date:'Jun 22, 2025', occasion:'Sunday Service', tags:['Foundation','Obedience'], status:'Preached' },
  { id:6, title:'The Spirit of Adoption', scripture:'Rom 8:15', date:'Jun 15, 2025', occasion:'Sunday Service', tags:['Identity','Holy Spirit'], status:'Preached' },
];

export default function SermonsPage() {
  const [search, setSearch] = React.useState('');
  const filtered = sermons.filter(s=>s.title.toLowerCase().includes(search.toLowerCase())||s.scripture.toLowerCase().includes(search.toLowerCase()));
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Pastor Portal</Typography>
          <Typography variant="h4">Sermon Library</Typography>
        </Box>
        <Box sx={{ display:'flex', gap:1.5 }}>
          <Button variant="outlined" color="secondary" startIcon={<AutoAwesomeIcon/>} size="small">AI Research Assistant</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small">New Sermon</Button>
        </Box>
      </Box>
      <Card sx={{ mb:3, background:'linear-gradient(135deg,#3A6B4A,#244530)' }}>
        <CardContent sx={{ p:2.5 }}>
          <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:1 }}>
            <AutoAwesomeIcon sx={{ color:'#7EC89A', fontSize:18 }}/>
            <Typography sx={{ color:'#FDF6EE', fontWeight:600, fontSize:'0.9rem', fontFamily:'"Lora",serif' }}>AI Sermon Research Assistant</Typography>
            <Chip label="Beta" size="small" sx={{ background:'rgba(253,246,238,0.15)', color:'rgba(253,246,238,0.8)', fontSize:'0.62rem' }}/>
          </Box>
          <Typography sx={{ color:'rgba(253,246,238,0.65)', fontSize:'0.82rem', fontFamily:'"Lora",serif', mb:1.5 }}>Enter a scripture or theme to get commentaries, cross-references, illustrations, and outline suggestions.</Typography>
          <Box sx={{ display:'flex', gap:1 }}>
            <TextField placeholder="e.g. Romans 8:28 or 'suffering and purpose'..." size="small" fullWidth
              sx={{ '& .MuiOutlinedInput-root':{ background:'rgba(253,246,238,0.1)', '& fieldset':{ borderColor:'rgba(253,246,238,0.2)' } }, '& input':{ color:'#FDF6EE', fontFamily:'"Lora",serif' } }}
            />
            <Button variant="contained" color="primary" size="small" sx={{ whiteSpace:'nowrap' }}>Research</Button>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ p:2.5 }}>
          <TextField fullWidth placeholder="Search sermons by title or scripture..." value={search} onChange={e=>setSearch(e.target.value)} size="small" sx={{ mb:2.5 }}
            slotProps={{ input:{ startAdornment:<InputAdornment position="start"><SearchIcon sx={{ fontSize:17, color:'#6B4C35' }}/></InputAdornment> } }}
          />
          <Grid container spacing={2}>
            {filtered.map(s=>(
              <Grid size={{ xs:12, sm:6 }} key={s.id}>
                <Box sx={{ p:2, border:'1px solid rgba(194,98,42,0.15)', borderRadius:2, '&:hover':{ background:'#FFF3EA', borderColor:'#C2622A' }, transition:'all 0.15s', cursor:'pointer' }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:1 }}>
                    <Chip label={s.status} size="small" sx={{ background:s.status==='Draft'?'#FAECE7':'#EAF3DE', color:s.status==='Draft'?'#8B3E14':'#244530', fontSize:'0.65rem', fontWeight:600 }}/>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.72rem', fontFamily:'"Lora",serif' }}>{s.date}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight:600, fontSize:'0.9rem', color:'#2C1A0E', fontFamily:'"Lora",serif', mb:0.3, lineHeight:1.3 }}>{s.title}</Typography>
                  <Typography sx={{ color:'#C2622A', fontSize:'0.78rem', fontFamily:'"Lora",serif', mb:1 }}>{s.scripture} · {s.occasion}</Typography>
                  <Box sx={{ display:'flex', gap:0.6, flexWrap:'wrap' }}>
                    {s.tags.map(t=><Chip key={t} label={t} size="small" sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.63rem' }}/>)}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
