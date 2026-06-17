'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChurchIcon from '@mui/icons-material/Church';
import PeopleIcon from '@mui/icons-material/People';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/cfs-admin/dashboard' },
  { label:'Churches', icon:<ChurchIcon/>, href:'/cfs-admin/churches' },
  { label:'Pastors', icon:<PeopleIcon/>, href:'/cfs-admin/pastors' },
  { label:'Counseling', icon:<SpaIcon/>, href:'/cfs-admin/counseling' },
  { label:'Content & Library', icon:<MenuBookIcon/>, href:'/cfs-admin/content' },
  { label:'Events & Webinars', icon:<EventIcon/>, href:'/cfs-admin/events' },
  { label:'Partners', icon:<HandshakeIcon/>, href:'/cfs-admin/reports' },
  { label:'Analytics', icon:<BarChartIcon/>, href:'/cfs-admin/reports' },
];
const user = { name:'Dr. Esther Kamau', role:'cfs_admin' as const, initials:'EK' };

const pastors = [
  { id:1, name:'James Kariuki', church:"Nairobi Shepherd's Church", years:14, wellness:68, lastRest:'45 days ago', counselor:'Dr. Ruth Achieng', status:'Stable', assessmentDue:false },
  { id:2, name:'Grace Wanjiru', church:'Rift Valley Pentecostal', years:8, wellness:81, lastRest:'12 days ago', counselor:'Dr. Ruth Achieng', status:'Healthy', assessmentDue:false },
  { id:3, name:'Samuel Kipchoge', church:'Mombasa Coastal Fellowship', years:6, wellness:42, lastRest:'31 days ago', counselor:'Unassigned', status:'At Risk', assessmentDue:true },
  { id:4, name:'Ruth Achieng', church:'Kisumu Lakeside Church', years:11, wellness:75, lastRest:'8 days ago', counselor:'Rev. Paul Kamau', status:'Healthy', assessmentDue:false },
  { id:5, name:'Daniel Mutuku', church:'Nakuru Central Church', years:9, wellness:62, lastRest:'22 days ago', counselor:'Dr. Ruth Achieng', status:'Monitor', assessmentDue:true },
  { id:6, name:'Peter Mutai', church:'Eldoret Mountain View', years:3, wellness:51, lastRest:'Never', counselor:'Unassigned', status:'At Risk', assessmentDue:true },
  { id:7, name:'Agnes Otieno', church:'Kisii Pentecostal Assembly', years:7, wellness:48, lastRest:'40 days ago', counselor:'Unassigned', status:'At Risk', assessmentDue:true },
  { id:8, name:'Moses Wainaina', church:'Nyeri Highland Church', years:16, wellness:77, lastRest:'5 days ago', counselor:'Rev. Paul Kamau', status:'Healthy', assessmentDue:false },
];

const statusChip = (s:string) => {
  if(s==='Healthy') return {bg:'#EAF3DE',color:'#244530'};
  if(s==='Stable') return {bg:'#F5EDE0',color:'#6B4C35'};
  if(s==='Monitor') return {bg:'#FAECE7',color:'#8B3E14'};
  return {bg:'#FCEBEB',color:'#A32D2D'};
};

export default function PastorsPage() {
  const [search, setSearch] = React.useState('');
  const [tab, setTab] = React.useState(0);
  const tabs = ['All','Healthy','Monitor','At Risk'];
  const filtered = pastors.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.church.toLowerCase().includes(search.toLowerCase());
    const matchTab = tab===0 || p.status===tabs[tab];
    return matchSearch && matchTab;
  });
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{mb:3}}>
        <Typography variant="overline" sx={{color:'#3A6B4A',fontSize:'0.7rem'}}>CFS Admin</Typography>
        <Typography variant="h4">Pastors</Typography>
        <Typography variant="body2" sx={{color:'#6B4C35',mt:0.3}}>Wellness monitoring for all pastors on the platform</Typography>
      </Box>

      <Grid container spacing={2.5} sx={{mb:3}}>
        {[['241','Total Pastors','#3A6B4A'],['23','At Risk','#A32D2D'],['38','Monitoring','#C2622A'],['180','Healthy','#3A6B4A']].map(([v,l,c])=>(
          <Grid size={{xs:6,md:3}} key={l}>
            <Card><CardContent sx={{p:2.5,textAlign:'center'}}>
              <Typography variant="h4" sx={{color:c,fontWeight:700,mb:0.3}}>{v}</Typography>
              <Typography variant="caption" sx={{color:'#6B4C35'}}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent sx={{p:2.5}}>
          <Box sx={{display:'flex',gap:2,mb:2,flexWrap:'wrap',alignItems:'center'}}>
            <TextField placeholder="Search pastors or churches..." value={search} onChange={e=>setSearch(e.target.value)} size="small" sx={{flex:1,minWidth:200}}
              slotProps={{input:{startAdornment:<InputAdornment position="start"><SearchIcon sx={{fontSize:17,color:'#6B4C35'}}/></InputAdornment>}}}
            />
          </Box>
          <Tabs value={tab} onChange={(_,v)=>setTab(v)} sx={{mb:2}}>
            {tabs.map(t=><Tab key={t} label={t}/>)}
          </Tabs>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Pastor</TableCell><TableCell>Church</TableCell><TableCell align="center">Years</TableCell>
                  <TableCell align="center">Wellness Score</TableCell><TableCell>Last Rest</TableCell>
                  <TableCell>Counselor</TableCell><TableCell align="center">Assessment</TableCell><TableCell align="center">Status</TableCell><TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map(p=>{
                  const s = statusChip(p.status);
                  return (
                    <TableRow key={p.id} hover>
                      <TableCell>
                        <Box sx={{display:'flex',alignItems:'center',gap:1}}>
                          <Avatar sx={{bgcolor:'#C2622A',width:28,height:28,fontSize:'0.62rem'}}>{p.name.split(' ').map(n=>n[0]).join('')}</Avatar>
                          <Typography sx={{fontWeight:600,fontSize:'0.83rem',fontFamily:'"Lora",serif'}}>Pastor {p.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell><Typography sx={{fontSize:'0.82rem',fontFamily:'"Lora",serif',color:'#6B4C35'}}>{p.church}</Typography></TableCell>
                      <TableCell align="center"><Typography sx={{fontSize:'0.82rem',fontFamily:'"Lora",serif'}}>{p.years}</Typography></TableCell>
                      <TableCell align="center">
                        <Box sx={{display:'flex',alignItems:'center',gap:0.8}}>
                          <LinearProgress variant="determinate" value={p.wellness} sx={{flex:1,height:5,'& .MuiLinearProgress-bar':{backgroundColor:p.wellness<55?'#A32D2D':p.wellness<70?'#C2622A':'#3A6B4A'}}}/>
                          <Typography sx={{fontSize:'0.78rem',fontWeight:600,fontFamily:'"Lora",serif',minWidth:24}}>{p.wellness}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell><Typography sx={{fontSize:'0.82rem',fontFamily:'"Lora",serif',color:p.lastRest==='Never'?'#A32D2D':'#6B4C35'}}>{p.lastRest}</Typography></TableCell>
                      <TableCell>
                        <Typography sx={{fontSize:'0.82rem',fontFamily:'"Lora",serif',color:p.counselor==='Unassigned'?'#A32D2D':'#2C1A0E'}}>
                          {p.counselor==='Unassigned'?<Box sx={{display:'flex',alignItems:'center',gap:0.5}}><WarningAmberIcon sx={{fontSize:14,color:'#A32D2D'}}/>{p.counselor}</Box>:p.counselor}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        {p.assessmentDue?<Chip label="Due" size="small" sx={{bg:'#FAECE7',background:'#FAECE7',color:'#8B3E14',fontSize:'0.68rem',fontWeight:600}}/>
                          :<Chip label="Done" size="small" sx={{background:'#EAF3DE',color:'#244530',fontSize:'0.68rem',fontWeight:600}}/>}
                      </TableCell>
                      <TableCell align="center"><Chip label={p.status} size="small" sx={{...s,fontSize:'0.68rem',fontWeight:600}}/></TableCell>
                      <TableCell>
                        {p.counselor==='Unassigned'&&<Button size="small" color="primary" variant="contained" sx={{fontSize:'0.7rem',py:0.3,px:1}}>Assign</Button>}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
