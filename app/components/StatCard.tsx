'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  bg?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export default function StatCard({ icon, label, value, sub, bg = '#FAECE7' }: StatCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ width: 44, height: 44, borderRadius: 2, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h4" sx={{ fontSize: '1.7rem', fontWeight: 700, mb: 0.3, lineHeight: 1 }}>{value}</Typography>
        <Typography variant="caption" sx={{ color: '#6B4C35', display: 'block', fontSize: '0.78rem', mb: sub ? 0.3 : 0 }}>{label}</Typography>
        {sub && <Typography variant="caption" sx={{ color: '#C2622A', fontSize: '0.71rem', fontWeight: 600 }}>{sub}</Typography>}
      </CardContent>
    </Card>
  );
}
