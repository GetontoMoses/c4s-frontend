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
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

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

const articles = [
  { title:'When the Shepherd Breaks: Understanding Pastoral Burnout', author:'Dr. Esther Kamau', type:'Article', category:'Burnout Signs', audience:'Pastors', views:1240, status:'Published', date:'Jun 2025' },
  { title:'10 Signs Your Pastor May Be Burning Out', author:'Rev. John Mwangi', type:'Article', category:'Burnout Signs', audience:'Congregation', views:3810, status:'Published', date:'May 2025' },
  { title:'The Theology of Rest: A Biblical Case for Pastoral Sabbatical', author:'Pastor Faith Otieno', type:'Video', category:'Spiritual Health', audience:'Pastors', views:892, status:'Published', date:'Apr 2025' },
  { title:"A Congregation's Guide to Caring for Your Pastor", author:'CFS Team', type:'Toolkit', category:'For Congregations', audience:'Congregation', views:2150, status:'Published', date:'Mar 2025' },
  { title:'Boundaries in Ministry: Saying No Without Guilt', author:'Dr. Mary Njoroge', type:'Audio', category:'Rest & Recovery', audience:'Pastors', views:671, status:'Published', date:'Jun 2025' },
  { title:'Wounded PKs: How Ministry Life Affects Pastors Kids', author:'Grace Waweru', type:'Article', category:'Family & Ministry', audience:'Families', views:445, status:'Draft', date:'Jul 2025' },
  { title:'Financial Sustainability for African Pastors', author:'Samuel Odhiambo', type:'Video', category:'Financial Wellbeing', audience:'Church Leaders', views:0, status:'Draft', date:'Jul 2025' },
];

const typeColor = (t:string) => {
  if(t==='Video') return {bg:'#EAF3DE',color:'#244530'};
  if(t==='Audio') return {bg:'#F5EDE0',color:'#6B4C35'};
  if(t==='Toolkit') return {bg:'#F0EAF8',color:'#5B2D8E'};
  return {bg:'#FAECE7',color:'#8B3E14'};
};

export default function ContentPage() {
  const [tab, setTab] = React.useState(0);
  const tabs = ['All','Published','Draft'];
  const filtered = articles.filter(a => tab===0 || a.status===tabs[tab]);
  return (
    <DashboardShell navItems={navItems} user={user} accentColor="#3A6B4A">
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#3A6B4A', fontSize:'0.7rem' }}>CFS Admin</Typography>
          <Typography variant="h4">Content & Library</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Manage knowledge base resources and editorial workflow</Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<AddIcon/>} size="small">New Content</Button>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[['47','Published Resources'],['5','Pending Review'],['9,200+','Total Views This Month'],['12','Authors']].map(([v,l])=>(
          <Grid size={{ xs:6, md:3 }} key={l}>
            <Card><CardContent sx={{ p:2.5, textAlign:'center' }}>
              <Typography variant="h4" sx={{ color:'#3A6B4A', fontWeight:700, mb:0.3 }}>{v}</Typography>
              <Typography variant="caption" sx={{ color:'#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent sx={{ p:2.5 }}>
          <Tabs value={tab} onChange={(_,v)=>setTab(v)} sx={{ mb:2.5 }}>
            {tabs.map(t=><Tab key={t} label={t}/>)}
          </Tabs>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell><TableCell>Author</TableCell><TableCell align="center">Type</TableCell>
                  <TableCell>Category</TableCell><TableCell>Audience</TableCell>
                  <TableCell align="right">Views</TableCell><TableCell align="center">Status</TableCell><TableCell>Date</TableCell><TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((a,i)=>{
                  const tc = typeColor(a.type);
                  return (
                    <TableRow key={i} hover>
                      <TableCell sx={{ maxWidth:220 }}><Typography sx={{ fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{a.title}</Typography></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.81rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{a.author}</Typography></TableCell>
                      <TableCell align="center"><Chip label={a.type} size="small" sx={{ ...tc, fontSize:'0.68rem', fontWeight:600 }}/></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.79rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{a.category}</Typography></TableCell>
                      <TableCell><Chip label={a.audience} size="small" sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.66rem' }}/></TableCell>
                      <TableCell align="right"><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', fontWeight:600 }}>{a.views.toLocaleString()}</Typography></TableCell>
                      <TableCell align="center"><Chip label={a.status} size="small" sx={{ background:a.status==='Published'?'#EAF3DE':'#F5EDE0', color:a.status==='Published'?'#244530':'#6B4C35', fontSize:'0.68rem', fontWeight:600 }}/></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.78rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{a.date}</Typography></TableCell>
                      <TableCell>
                        <Box sx={{ display:'flex', gap:0.5 }}>
                          <Button size="small" sx={{ minWidth:0, p:0.5 }}><EditIcon sx={{ fontSize:15 }}/></Button>
                          <Button size="small" sx={{ minWidth:0, p:0.5 }}><VisibilityIcon sx={{ fontSize:15 }}/></Button>
                        </Box>
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
