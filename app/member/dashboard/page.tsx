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
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import DashboardShell from '../../components/DashboardShell';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PrayingHandsIcon from '@mui/icons-material/VolunteerActivism';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const navItems = [
  { label:'Home', icon:<DashboardIcon/>, href:'/member/dashboard' },
  { label:'Give', icon:<FavoriteIcon/>, href:'/member/giving' },
  { label:'Events', icon:<EventIcon/>, href:'/member/events' },
  { label:'Library', icon:<MenuBookIcon/>, href:'/member/library' },
  { label:'Prayer Requests', icon:<PrayingHandsIcon/>, href:'/member/prayer' },
  { label:'My Profile', icon:<PersonIcon/>, href:'/member/dashboard' },
];
const user = { name:'Samuel Kipchoge', role:'member' as const, initials:'SK', church:"Nairobi Shepherd's Church" };

const announcements = [
  { title:'Youth Conference 2025', date:'Jul 26–27', desc:'Register by Jul 20. Venue: Church Hall.' },
  { title:'Women of Faith Breakfast', date:'Aug 2', desc:'All women welcome. Registration open.' },
  { title:'Baptism Sunday', date:'Aug 10', desc:'Interested in baptism? Speak to Pastor James.' },
];

const prayerRequests = [
  { name:'John K.', request:'Healing for mother — surgery this week', time:'2h ago', prayed:12 },
  { name:'Anonymous', request:'Family reconciliation after long separation', time:'5h ago', prayed:7 },
  { name:'Faith W.', request:'Job search — trusting God for provision', time:'1d ago', prayed:18 },
];

export default function MemberDashboard() {
  const [giveOpen, setGiveOpen] = React.useState(false);
  const [prayerOpen, setPrayerOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [prayerText, setPrayerText] = React.useState('');
  const [step, setStep] = React.useState<'form'|'confirm'|'success'>('form');

  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3 }}>
        <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Church Member</Typography>
        <Typography variant="h4">Welcome, Samuel</Typography>
        <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Nairobi Shepherd&apos;s Church</Typography>
      </Box>

      {/* Wellness fund banner */}
      <Card sx={{ mb:3, background:'linear-gradient(135deg,#2C1A0E,#C2622A)' }}>
        <CardContent sx={{ p:3 }}>
          <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
            <Box>
              <Typography variant="overline" sx={{ color:'rgba(253,246,238,0.65)', fontSize:'0.68rem' }}>Pastor&apos;s Wellness Fund</Typography>
              <Typography variant="h5" sx={{ color:'#FDF6EE', mt:0.3, mb:0.5, fontSize:'1.15rem' }}>Bless Pastor James this month</Typography>
              <Typography sx={{ color:'rgba(253,246,238,0.65)', fontSize:'0.82rem', fontFamily:'"Lora",serif', mb:1.5 }}>
                KES 84,500 raised of KES 120,000 goal · 47 donors · 23 days left
              </Typography>
              <LinearProgress variant="determinate" value={70} sx={{ height:6, maxWidth:300, borderRadius:3, backgroundColor:'rgba(253,246,238,0.2)', '& .MuiLinearProgress-bar':{ backgroundColor:'#FDF6EE' } }}/>
            </Box>
            <Button variant="contained" sx={{ background:'#FDF6EE', color:'#C2622A', '&:hover':{ background:'#fff' }, whiteSpace:'nowrap' }} onClick={()=>setGiveOpen(true)}>
              Donate via M-Pesa
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Announcements */}
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Church Announcements</Typography>
              {announcements.map((a,i)=>(
                <Box key={i}>
                  <Box sx={{ py:1.5 }}>
                    <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                      <Typography sx={{ fontWeight:600, fontSize:'0.88rem', fontFamily:'"Lora",serif' }}>{a.title}</Typography>
                      <Chip label={a.date} size="small" sx={{ background:'#FAECE7', color:'#8B3E14', fontSize:'0.68rem', fontWeight:600 }}/>
                    </Box>
                    <Typography sx={{ color:'#6B4C35', fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{a.desc}</Typography>
                  </Box>
                  {i<announcements.length-1 && <Divider/>}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs:12, md:5 }}>
          <Grid container spacing={2.5}>
            {/* My giving */}
            <Grid size={{ xs:12 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Typography variant="h6" sx={{ fontSize:'1rem', mb:1.5 }}>My Giving — July</Typography>
                  {[['Tithe','KES 5,000'],['Wellness Fund','KES 2,000'],['Youth Conference','KES 500']].map(([l,v])=>(
                    <Box key={l} sx={{ display:'flex', justifyContent:'space-between', py:0.8 }}>
                      <Typography sx={{ color:'#6B4C35', fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{l}</Typography>
                      <Typography sx={{ fontWeight:600, color:'#3A6B4A', fontSize:'0.85rem', fontFamily:'"Lora",serif' }}>{v}</Typography>
                    </Box>
                  ))}
                  <Divider sx={{ my:1 }}/>
                  <Box sx={{ display:'flex', justifyContent:'space-between' }}>
                    <Typography sx={{ fontWeight:600, color:'#2C1A0E', fontSize:'0.85rem', fontFamily:'"Lora",serif' }}>Total</Typography>
                    <Typography sx={{ fontWeight:700, color:'#C2622A', fontSize:'0.9rem', fontFamily:'"Lora",serif' }}>KES 7,500</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" fullWidth size="small" sx={{ mt:2, fontSize:'0.8rem' }} onClick={()=>setGiveOpen(true)}>Give Now</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Prayer wall */}
            <Grid size={{ xs:12 }}>
              <Card>
                <CardContent sx={{ p:2.5 }}>
                  <Box sx={{ display:'flex', justifyContent:'space-between', mb:1.5 }}>
                    <Typography variant="h6" sx={{ fontSize:'1rem' }}>Prayer Wall</Typography>
                    <Button size="small" color="primary" sx={{ fontSize:'0.73rem', p:'2px 8px' }} onClick={()=>setPrayerOpen(true)}>+ Submit</Button>
                  </Box>
                  <List dense disablePadding>
                    {prayerRequests.map((p,i)=>(
                      <React.Fragment key={i}>
                        <ListItem disablePadding sx={{ py:1, display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                          <Box sx={{ display:'flex', justifyContent:'space-between', width:'100%', mb:0.3 }}>
                            <Typography sx={{ fontWeight:600, fontSize:'0.78rem', fontFamily:'"Lora",serif', color:'#C2622A' }}>{p.name}</Typography>
                            <Typography sx={{ fontSize:'0.68rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{p.time}</Typography>
                          </Box>
                          <Typography sx={{ fontSize:'0.8rem', color:'#2C1A0E', fontFamily:'"Lora",serif', lineHeight:1.4, mb:0.5 }}>{p.request}</Typography>
                          <Typography sx={{ fontSize:'0.7rem', color:'#3A6B4A', fontFamily:'"Lora",serif' }}>🙏 {p.prayed} praying</Typography>
                        </ListItem>
                        {i<prayerRequests.length-1 && <Divider/>}
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Donate dialog */}
      <Dialog open={giveOpen} onClose={()=>{ setGiveOpen(false); setStep('form'); }} maxWidth="xs" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>{step==='success'?'Thank you!':'Donate via M-Pesa'}</Typography>
          <IconButton size="small" onClick={()=>{ setGiveOpen(false); setStep('form'); }}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          {step==='form' && (
            <>
              <Box sx={{ display:'flex', gap:1, mb:2, flexWrap:'wrap' }}>
                {[500,1000,2500,5000].map(a=>(
                  <Button key={a} variant={amount===String(a)?'contained':'outlined'} color="primary" size="small" onClick={()=>setAmount(String(a))} sx={{ flex:1, minWidth:60 }}>
                    {a.toLocaleString()}
                  </Button>
                ))}
              </Box>
              <TextField fullWidth label="Or enter amount (KES)" value={amount} onChange={e=>setAmount(e.target.value)} size="small" type="number" sx={{ mb:2 }}/>
              <TextField fullWidth label="M-Pesa phone number" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="07XX XXX XXX" size="small" sx={{ mb:2.5 }}
                slotProps={{ input:{ startAdornment:<InputAdornment position="start"><PhoneAndroidIcon sx={{ fontSize:16, color:'#6B4C35' }}/></InputAdornment> } }}
              />
              <Button variant="contained" color="primary" fullWidth disabled={!amount||!phone} onClick={()=>setStep('confirm')} sx={{ py:1.2 }}>Continue</Button>
            </>
          )}
          {step==='confirm' && (
            <>
              <Box sx={{ p:2.5, background:'#FAECE7', borderRadius:2, mb:2.5, textAlign:'center' }}>
                <Typography variant="h4" sx={{ color:'#C2622A', mb:0.5 }}>KES {Number(amount).toLocaleString()}</Typography>
                <Typography variant="body2" sx={{ color:'#6B4C35' }}>to Pastor James Kariuki&apos;s Wellness Fund</Typography>
              </Box>
              <Typography variant="body2" sx={{ color:'#6B4C35', mb:2.5, lineHeight:1.7 }}>An M-Pesa STK push will be sent to <strong>{phone}</strong>. Enter your PIN to complete.</Typography>
              <Button variant="contained" color="primary" fullWidth onClick={()=>setStep('success')} sx={{ py:1.3, mb:1.5 }}>Send M-Pesa Prompt</Button>
              <Button variant="text" fullWidth onClick={()=>setStep('form')} sx={{ color:'#6B4C35' }}>Go back</Button>
            </>
          )}
          {step==='success' && (
            <Box sx={{ textAlign:'center', py:2 }}>
              <Typography sx={{ fontSize:'2.5rem', mb:2 }}>🙏</Typography>
              <Typography variant="h6" sx={{ mb:1 }}>Donation received!</Typography>
              <Typography variant="body2" sx={{ color:'#6B4C35', mb:2.5 }}>KES {Number(amount).toLocaleString()} added to Pastor James&apos;s wellness fund. You&apos;ll receive an SMS receipt.</Typography>
              <Button variant="contained" color="primary" fullWidth onClick={()=>{ setGiveOpen(false); setStep('form'); }}>Done</Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Prayer dialog */}
      <Dialog open={prayerOpen} onClose={()=>setPrayerOpen(false)} maxWidth="xs" fullWidth slotProps={{ paper:{ sx:{ borderRadius:3 } } }}>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>Submit Prayer Request</Typography>
          <IconButton size="small" onClick={()=>setPrayerOpen(false)}><CloseIcon fontSize="small"/></IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth multiline rows={4} placeholder="Share your prayer request..." value={prayerText} onChange={e=>setPrayerText(e.target.value)} size="small" sx={{ mb:2 }}/>
          <Box sx={{ display:'flex', gap:1.5, mb:2.5 }}>
            <Chip label="Post anonymously" variant="outlined" size="small" sx={{ cursor:'pointer', borderColor:'#C2622A', color:'#C2622A' }}/>
          </Box>
          <Button variant="contained" color="primary" fullWidth disabled={!prayerText.trim()} onClick={()=>setPrayerOpen(false)} sx={{ py:1.2 }}>Submit Request</Button>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  );
}
