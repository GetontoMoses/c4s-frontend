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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Alert from '@mui/material/Alert';
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
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import FileUploadIcon from '@mui/icons-material/FileUpload';

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

const disbursements = [
  { purpose:'Naivasha Family Retreat — Accommodation', amount:45000, date:'Aug 14, 2025', status:'Pending Approval', proof:false },
  { purpose:'Counseling Sessions (Dr. Ruth Achieng ×4)', amount:12000, date:'Jul 10, 2025', status:'Approved', proof:true },
  { purpose:'Day Away — Wellness Package', amount:4500, date:'Jun 28, 2025', status:'Approved', proof:true },
];

const donations = [
  { donor:'John Kamau', amount:5000, date:'Jul 12', method:'M-Pesa', anonymous:false },
  { donor:'Faith Wanjiru', amount:2000, date:'Jul 11', method:'M-Pesa', anonymous:false },
  { donor:'Anonymous', amount:10000, date:'Jul 10', method:'M-Pesa', anonymous:true },
  { donor:'David Omondi', amount:1500, date:'Jul 9', method:'M-Pesa', anonymous:false },
  { donor:'Grace Akinyi', amount:3000, date:'Jul 8', method:'M-Pesa', anonymous:false },
];

export default function WellnessFundPage() {
  const [campaignOpen, setCampaignOpen] = React.useState(false);
  const [disburseOpen, setDisburseOpen] = React.useState(false);
  const raised = 84500;
  const goal = 120000;
  const pct = Math.round((raised/goal)*100);

  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Admin</Typography>
          <Typography variant="h4">Pastoral Wellness Fund</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Manage fundraising campaigns and disbursements for Pastor James Kariuki</Typography>
        </Box>
        <Box sx={{ display:'flex', gap:1.5 }}>
          <Button variant="outlined" color="primary" size="small" onClick={()=>setDisburseOpen(true)}>Request Disbursement</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small" onClick={()=>setCampaignOpen(true)}>New Campaign</Button>
        </Box>
      </Box>

      {/* Fund overview */}
      <Card sx={{ mb:3, background:'linear-gradient(135deg,#2C1A0E,#4A2A10)' }}>
        <CardContent sx={{ p:3 }}>
          <Grid container spacing={3} sx={{ alignItems:'center' }}>
            <Grid size={{ xs:12, md:7 }}>
              <Typography variant="overline" sx={{ color:'#E8845A', fontSize:'0.68rem' }}>Active Campaign</Typography>
              <Typography variant="h5" sx={{ color:'#FDF6EE', mt:0.5, mb:0.5 }}>Sabbatical & Family Retreat Fund 2025</Typography>
              <Typography sx={{ color:'rgba(253,246,238,0.6)', fontSize:'0.85rem', fontFamily:'"Lora",serif', mb:2 }}>
                Raising funds for Pastor James Kariuki&apos;s first sabbatical in 14 years — a restorative family week at Great Rift Valley Lodge, Naivasha.
              </Typography>
              <Box sx={{ mb:1 }}>
                <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                  <Typography sx={{ color:'rgba(253,246,238,0.6)', fontSize:'0.78rem', fontFamily:'"Lora",serif' }}>Progress</Typography>
                  <Typography sx={{ color:'#FDF6EE', fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>KES {raised.toLocaleString()} / {goal.toLocaleString()}</Typography>
                </Box>
                <LinearProgress variant="determinate" value={pct} sx={{ height:8, borderRadius:4, backgroundColor:'rgba(253,246,238,0.15)', '& .MuiLinearProgress-bar':{ backgroundColor:'#C2622A' } }}/>
                <Typography sx={{ color:'rgba(253,246,238,0.5)', fontSize:'0.72rem', mt:0.5, fontFamily:'"Lora",serif' }}>{pct}% · 47 donors · 23 days remaining</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs:12, md:5 }}>
              <Grid container spacing={2}>
                {[['KES 84,500','Raised'],['KES 35,500','Remaining'],['47','Donors'],['KES 120K','Goal']].map(([v,l])=>(
                  <Grid size={{ xs:6 }} key={l}>
                    <Box sx={{ textAlign:'center', p:1.5, background:'rgba(253,246,238,0.06)', borderRadius:2 }}>
                      <Typography sx={{ color:'#FDF6EE', fontWeight:700, fontSize:'1rem', fontFamily:'"Playfair Display",serif' }}>{v}</Typography>
                      <Typography sx={{ color:'rgba(253,246,238,0.5)', fontSize:'0.68rem', fontFamily:'"Lora",serif' }}>{l}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Alert severity="info" sx={{ mb:3, fontFamily:'"Lora",serif', fontSize:'0.85rem', background:'#EAF3DE', color:'#244530', border:'1px solid rgba(58,107,74,0.2)' }}>
        Disbursements over KES 10,000 require approval from a second church leader before funds are released.
      </Alert>

      <Grid container spacing={3}>
        {/* Disbursements */}
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Fund Disbursements</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Purpose</TableCell><TableCell align="right">Amount (KES)</TableCell>
                      <TableCell>Date</TableCell><TableCell align="center">Proof</TableCell><TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {disbursements.map((d,i)=>(
                      <TableRow key={i} hover>
                        <TableCell><Typography sx={{ fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{d.purpose}</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{ fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{d.amount.toLocaleString()}</Typography></TableCell>
                        <TableCell><Typography sx={{ color:'#6B4C35', fontSize:'0.79rem', fontFamily:'"Lora",serif' }}>{d.date}</Typography></TableCell>
                        <TableCell align="center">
                          {d.proof
                            ? <CheckCircleIcon sx={{ fontSize:16, color:'#3A6B4A' }}/>
                            : <Button size="small" startIcon={<FileUploadIcon sx={{ fontSize:14 }}/>} sx={{ fontSize:'0.7rem', p:'2px 8px', color:'#C2622A' }}>Upload</Button>
                          }
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            icon={d.status==='Approved'?<CheckCircleIcon sx={{ fontSize:'13px !important', color:'#244530 !important' }}/>:<PendingIcon sx={{ fontSize:'13px !important', color:'#8B3E14 !important' }}/>}
                            label={d.status} size="small"
                            sx={{ background:d.status==='Approved'?'#EAF3DE':'#FAECE7', color:d.status==='Approved'?'#244530':'#8B3E14', fontSize:'0.68rem', fontWeight:600 }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent donations */}
        <Grid size={{ xs:12, md:5 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Recent Donations</Typography>
              {donations.map((d,i)=>(
                <Box key={i}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', py:1.2 }}>
                    <Box>
                      <Typography sx={{ fontSize:'0.83rem', fontWeight:600, color:'#2C1A0E', fontFamily:'"Lora",serif' }}>{d.anonymous?'Anonymous Donor':d.donor}</Typography>
                      <Typography sx={{ fontSize:'0.7rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{d.date} · {d.method}</Typography>
                    </Box>
                    <Typography sx={{ fontWeight:700, color:'#3A6B4A', fontSize:'0.9rem', fontFamily:'"Lora",serif' }}>KES {d.amount.toLocaleString()}</Typography>
                  </Box>
                  {i<donations.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* New campaign dialog */}
      <Dialog open={campaignOpen} onClose={()=>setCampaignOpen(false)} maxWidth="sm" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>Create Wellness Campaign</Typography>
          <IconButton size="small" onClick={()=>setCampaignOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt:0.5 }}>
            <Grid size={{ xs:12 }}><TextField fullWidth label="Campaign Title" size="small" defaultValue="Pastor James Sabbatical Fund 2025"/></Grid>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Goal Amount (KES)" size="small" defaultValue="120000"/></Grid>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Campaign End Date" size="small" type="date" slotProps={{ inputLabel: { shrink: true } }}/></Grid>
            <Grid size={{ xs:12 }}><TextField fullWidth label="Campaign Description" size="small" multiline rows={3}/></Grid>
            <Grid size={{ xs:12 }}><Button variant="contained" color="primary" fullWidth sx={{ py:1.2 }}>Launch Campaign</Button></Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Disbursement request dialog */}
      <Dialog open={disburseOpen} onClose={()=>setDisburseOpen(false)} maxWidth="sm" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>Request Disbursement</Typography>
          <IconButton size="small" onClick={()=>setDisburseOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt:0.5 }}>
            <Grid size={{ xs:12 }}><TextField fullWidth label="Purpose of Disbursement" size="small"/></Grid>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Amount (KES)" size="small" type="number"/></Grid>
            <Grid size={{ xs:6 }}><TextField fullWidth label="Intended Date" size="small" type="date" slotProps={{ inputLabel: { shrink: true } }}/></Grid>
            <Grid size={{ xs:12 }}><TextField fullWidth label="Supporting notes" size="small" multiline rows={2}/></Grid>
            <Grid size={{ xs:12 }}><Button variant="contained" color="primary" fullWidth sx={{ py:1.2 }}>Submit for Approval</Button></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
