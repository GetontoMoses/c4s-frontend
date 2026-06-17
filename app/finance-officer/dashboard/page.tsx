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
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import DashboardShell from '../../components/DashboardShell';
import StatCard from '../../components/StatCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const navItems = [
  { label:'Dashboard', icon:<DashboardIcon/>, href:'/finance-officer/dashboard' },
  { label:'Income', icon:<TrendingUpIcon/>, href:'/finance-officer/income' },
  { label:'Expenses', icon:<TrendingDownIcon/>, href:'/finance-officer/expenses' },
  { label:'Budget', icon:<AccountBalanceIcon/>, href:'/finance-officer/budget' },
  { label:'Reports', icon:<BarChartIcon/>, href:'/finance-officer/reports' },
  { label:'Wellness Fund', icon:<FavoriteIcon/>, href:'/finance-officer/reports' },
];
const user = { name:'David Ochieng', role:'finance_officer' as const, initials:'DO', church:"Nairobi Shepherd's Church" };

const transactions = [
  { desc:'Sunday Tithe & Offerings', cat:'Tithe', amount:48200, date:'Jul 13', type:'Income' },
  { desc:'Midweek Offering', cat:'Offering', amount:12400, date:'Jul 10', type:'Income' },
  { desc:'Hall Rental — Wedding', cat:'Rental', amount:8000, date:'Jul 9', type:'Income' },
  { desc:'Electricity Bill', cat:'Utilities', amount:4800, date:'Jul 8', type:'Expense' },
  { desc:'Pastoral Stipend', cat:'Personnel', amount:25000, date:'Jul 1', type:'Expense' },
  { desc:'Youth Conference Catering', cat:'Events', amount:8200, date:'Jul 4', type:'Expense' },
  { desc:'Cleaning Supplies', cat:'Operations', amount:1200, date:'Jul 6', type:'Expense' },
];

const budgets = [
  { cat:'Personnel & Pastoral', budget:60000, spent:52000 },
  { cat:'Utilities & Maintenance', budget:15000, spent:8200 },
  { cat:'Events & Outreach', budget:25000, spent:18400 },
  { cat:'Wellness Fund Contribution', budget:10000, spent:6000 },
  { cat:'Administration', budget:8000, spent:3100 },
];

export default function FinanceOfficerDashboard() {
  const totalIncome = transactions.filter(t=>t.type==='Income').reduce((s,t)=>s+t.amount,0);
  const totalExpense = transactions.filter(t=>t.type==='Expense').reduce((s,t)=>s+t.amount,0);
  return (
    <DashboardShell navItems={navItems} user={user}>
      <Box sx={{ mb:3, display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:2 }}>
        <Box>
          <Typography variant="overline" sx={{ color:'#C2622A', fontSize:'0.7rem' }}>Finance Officer</Typography>
          <Typography variant="h4">Financial Dashboard</Typography>
          <Typography variant="body2" sx={{ color:'#6B4C35', mt:0.3 }}>Nairobi Shepherd&apos;s Church · July 2025</Typography>
        </Box>
        <Box sx={{ display:'flex', gap:1.5 }}>
          <Button variant="outlined" color="primary" startIcon={<FileDownloadIcon/>} size="small">Export Report</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small">Record Transaction</Button>
        </Box>
      </Box>

      <Grid container spacing={2.5} sx={{ mb:3 }}>
        {[
          { icon:<TrendingUpIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Income (July)', value:`KES ${totalIncome.toLocaleString()}`, sub:'+14% vs Jun', bg:'#EAF3DE' },
          { icon:<TrendingDownIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Expenses (July)', value:`KES ${totalExpense.toLocaleString()}`, sub:'Within budget', bg:'#FAECE7' },
          { icon:<AccountBalanceIcon sx={{ fontSize:24, color:'#3A6B4A' }}/>, label:'Net Surplus', value:`KES ${(totalIncome-totalExpense).toLocaleString()}`, sub:'Available balance', bg:'#EAF3DE' },
          { icon:<FavoriteIcon sx={{ fontSize:24, color:'#C2622A' }}/>, label:'Wellness Fund', value:'KES 84,500', sub:'70% of goal', bg:'#FAECE7' },
        ].map(s=>(
          <Grid size={{ xs:6, md:3 }} key={s.label}><StatCard {...s}/></Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs:12, md:7 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', mb:2 }}>
                <Typography variant="h6" sx={{ fontSize:'1rem' }}>Recent Transactions</Typography>
                <Button size="small" color="primary" sx={{ fontSize:'0.78rem' }}>View All</Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Amount (KES)</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell align="center">Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((t,i)=>(
                      <TableRow key={i} hover>
                        <TableCell><Typography sx={{ fontWeight:600, fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>{t.desc}</Typography></TableCell>
                        <TableCell><Chip label={t.cat} size="small" sx={{ background:'#F5EDE0', color:'#6B4C35', fontSize:'0.68rem' }}/></TableCell>
                        <TableCell align="right">
                          <Typography sx={{ fontWeight:600, fontSize:'0.85rem', fontFamily:'"Lora",serif', color:t.type==='Income'?'#3A6B4A':'#C2622A' }}>
                            {t.type==='Income'?'+':'-'}{t.amount.toLocaleString()}
                          </Typography>
                        </TableCell>
                        <TableCell><Typography sx={{ fontSize:'0.79rem', color:'#6B4C35', fontFamily:'"Lora",serif' }}>{t.date}</Typography></TableCell>
                        <TableCell align="center">
                          <Chip label={t.type} size="small" sx={{ background:t.type==='Income'?'#EAF3DE':'#FAECE7', color:t.type==='Income'?'#244530':'#8B3E14', fontSize:'0.68rem', fontWeight:600 }}/>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs:12, md:5 }}>
          <Card>
            <CardContent sx={{ p:2.5 }}>
              <Typography variant="h6" sx={{ fontSize:'1rem', mb:2 }}>Budget Utilization — July</Typography>
              {budgets.map(b=>{
                const pct = Math.round((b.spent/b.budget)*100);
                return (
                  <Box key={b.cat} sx={{ mb:2 }}>
                    <Box sx={{ display:'flex', justifyContent:'space-between', mb:0.5 }}>
                      <Typography sx={{ fontSize:'0.78rem', color:'#6B4C35', fontFamily:'"Lora",serif', flex:1, pr:1 }}>{b.cat}</Typography>
                      <Typography sx={{ fontSize:'0.78rem', fontWeight:600, fontFamily:'"Lora",serif', color:pct>90?'#A32D2D':pct>70?'#C2622A':'#3A6B4A', whiteSpace:'nowrap' }}>
                        {b.spent.toLocaleString()} / {b.budget.toLocaleString()} ({pct}%)
                      </Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={Math.min(pct,100)} sx={{ height:6, borderRadius:3, '& .MuiLinearProgress-bar':{ backgroundColor:pct>90?'#A32D2D':pct>70?'#C2622A':'#3A6B4A' } }}/>
                  </Box>
                );
              })}
              <Divider sx={{ my:2 }}/>
              <Box sx={{ display:'flex', justifyContent:'space-between' }}>
                <Typography sx={{ color:'#6B4C35', fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>Total Budget</Typography>
                <Typography sx={{ fontWeight:700, color:'#2C1A0E', fontSize:'0.88rem', fontFamily:'"Lora",serif' }}>KES {budgets.reduce((s,b)=>s+b.budget,0).toLocaleString()}</Typography>
              </Box>
              <Box sx={{ display:'flex', justifyContent:'space-between', mt:0.5 }}>
                <Typography sx={{ color:'#6B4C35', fontSize:'0.82rem', fontFamily:'"Lora",serif' }}>Total Spent</Typography>
                <Typography sx={{ fontWeight:700, color:'#C2622A', fontSize:'0.88rem', fontFamily:'"Lora",serif' }}>KES {budgets.reduce((s,b)=>s+b.spent,0).toLocaleString()}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
