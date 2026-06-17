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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
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
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeIcon from '@mui/icons-material/QrCode';

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

const members = [
  { id:1, name:'John Kamau', phone:'0712 345 678', county:'Nairobi', cellGroup:'Alpha Cell', ministry:'Worship Team', attendance:'Regular', baptized:true, status:'Active', joined:'Jan 2020' },
  { id:2, name:'Faith Wanjiru', phone:'0722 456 789', county:'Kiambu', cellGroup:'Beta Cell', ministry:'Children Ministry', attendance:'Regular', baptized:true, status:'Active', joined:'Mar 2021' },
  { id:3, name:'David Omondi', phone:'0733 567 890', county:'Nairobi', cellGroup:'Gamma Cell', ministry:'Ushers', attendance:'Irregular', baptized:false, status:'Active', joined:'Jun 2022' },
  { id:4, name:'Grace Akinyi', phone:'0744 678 901', county:'Nairobi', cellGroup:'Alpha Cell', ministry:'Prayer Team', attendance:'Regular', baptized:true, status:'Active', joined:'Feb 2019' },
  { id:5, name:'Peter Njoroge', phone:'0755 789 012', county:'Murang\'a', cellGroup:'Delta Cell', ministry:'None', attendance:'Absent ×3', baptized:false, status:'Follow-up', joined:'Sep 2023' },
  { id:6, name:'Mary Otieno', phone:'0766 890 123', county:'Nairobi', cellGroup:'Beta Cell', ministry:'Youth Group', attendance:'Regular', baptized:true, status:'Active', joined:'Jul 2021' },
  { id:7, name:'Samuel Kipchoge', phone:'0777 901 234', county:'Nairobi', cellGroup:'Gamma Cell', ministry:'Tech Team', attendance:'Regular', baptized:true, status:'Active', joined:'Apr 2022' },
  { id:8, name:'Ruth Chebet', phone:'0788 012 345', county:'Nakuru', cellGroup:'Delta Cell', ministry:'Hospitality', attendance:'Irregular', baptized:true, status:'Active', joined:'Nov 2020' },
];

const attColor = (a:string) => {
  if(a==='Regular') return {bg:'#EAF3DE',color:'#244530'};
  if(a.includes('Absent')) return {bg:'#FAECE7',color:'#8B3E14'};
  return {bg:'#F5EDE0',color:'#6B4C35'};
};

export default function MembersPage() {
  const [search, setSearch] = React.useState('');
  const [tab, setTab] = React.useState(0);
  const [addOpen, setAddOpen] = React.useState(false);
  const tabs = ['All Members','Follow-up Required','Cell Groups'];
  const filtered = members.filter(m => {
    const ms = search.toLowerCase();
    const matchSearch = m.name.toLowerCase().includes(ms) || m.cellGroup.toLowerCase().includes(ms) || m.ministry.toLowerCase().includes(ms);
    const matchTab = tab===0 || (tab===1 && m.status==='Follow-up');
    return matchSearch && matchTab;
  });

  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
          <Typography variant="h4">Members</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>342 registered members · 3 require follow-up</Typography>
        </Box>
        <Box sx={{ display:'flex', gap:1.5 }}>
          <Button variant="outlined" color="primary" startIcon={<QrCodeIcon/>} size="small">QR Check-In</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small" onClick={()=>setAddOpen(true)}>Add Member</Button>
        </Box>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[['342','Total Members'],['89%','Attendance Rate'],['24','Cell Groups'],['3','Needs Follow-up']].map(([v,l])=>(
          <Grid size={{ xs:6, md:3 }} key={l}>
            <Card><CardContent sx={{ p:2.5, textAlign:'center' }}>
              <Typography variant="h4" sx={{ color:'#C2622A', fontWeight:700, mb:0.3 }}>{v}</Typography>
              <Typography variant="caption" sx={{ color:'#6B4C35' }}>{l}</Typography>
            </CardContent></Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent sx={{ p:2.5 }}>
          <Box sx={{ display:'flex', gap:2, mb:2, flexWrap:'wrap' }}>
            <TextField placeholder="Search members, cell groups, ministry…" value={search} onChange={e=>setSearch(e.target.value)} size="small" sx={{ flex:1, minWidth:200 }}
              slotProps={{ input:{ startAdornment:<InputAdornment position="start"><SearchIcon sx={{ fontSize:17, color:'#6B4C35' }}/></InputAdornment> } }}
            />
          </Box>
          <Tabs value={tab} onChange={(_,v)=>setTab(v)} sx={{ mb:2 }}>
            {tabs.map(t=><Tab key={t} label={t}/>)}
          </Tabs>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Member</TableCell><TableCell>Phone</TableCell><TableCell>County</TableCell>
                  <TableCell>Cell Group</TableCell><TableCell>Ministry</TableCell>
                  <TableCell align="center">Baptized</TableCell><TableCell align="center">Attendance</TableCell>
                  <TableCell>Joined</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map(m=>{
                  const ac = attColor(m.attendance);
                  return (
                    <TableRow key={m.id} hover>
                      <TableCell>
                        <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
                          <Avatar sx={{ bgcolor:'#C2622A', width:28, height:28, fontSize:'0.63rem' }}>{m.name.split(' ').map(n=>n[0]).join('')}</Avatar>
                          <Typography sx={{ fontWeight:600, fontSize:'0.83rem', fontFamily:'"Lora",serif' }}>{m.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{m.phone}</Typography></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{m.county}</Typography></TableCell>
                      <TableCell><Chip label={m.cellGroup} size="small" sx={{ background:'#FAECE7', color:'#8B3E14', fontSize:'0.68rem' }}/></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif', color:'#6B4C35' }}>{m.ministry||'—'}</Typography></TableCell>
                      <TableCell align="center"><Chip label={m.baptized?'Yes':'No'} size="small" sx={{ background:m.baptized?'#EAF3DE':'#F5EDE0', color:m.baptized?'#244530':'#6B4C35', fontSize:'0.68rem', fontWeight:600 }}/></TableCell>
                      <TableCell align="center"><Chip label={m.attendance} size="small" sx={{ ...ac, fontSize:'0.68rem', fontWeight:600 }}/></TableCell>
                      <TableCell><Typography sx={{ fontSize:'0.78rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{m.joined}</Typography></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Add member dialog */}
      <Dialog open={addOpen} onClose={()=>setAddOpen(false)} maxWidth="sm" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>Register New Member</Typography>
          <IconButton size="small" onClick={()=>setAddOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt:0.5 }}>
            {['Full Name','Phone Number','Home County','Email Address'].map(f=>(
              <Grid size={{ xs:12, sm:6 }} key={f}><TextField fullWidth label={f} size="small"/></Grid>
            ))}
            {['Cell Group','Ministry Department','Date of Birth'].map(f=>(
              <Grid size={{ xs:12, sm:6 }} key={f}><TextField fullWidth label={f} size="small"/></Grid>
            ))}
            <Grid size={{ xs:12 }}>
              <Button variant="contained" color="primary" fullWidth sx={{ py:1.2, mt:1 }}>Register Member</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
