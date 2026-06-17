'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from 'next/link';

const footerLinks = {
  Platform: [
    { label: 'How It Works', href: '#howitworks' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Find Your Church', href: '#findchurch' },
    { label: 'Register Church', href: '/auth/login' },
  ],
  Resources: [
    { label: 'Knowledge Library', href: '/library' },
    { label: 'Retreat Marketplace', href: '/retreats' },
    { label: 'Wellness Assessment', href: '/pastor/wellness' },
    { label: 'Counselor Network', href: '/counseling' },
    { label: 'Blog & Research', href: '/library' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Fund Accountability Charter', href: '#' },
    { label: 'Kenya DPA Compliance', href: '#' },
  ],
};

export default function HomeFooter() {
  return (
    <Box component="footer" sx={{ background: '#120600', pt: { xs: 7, md: 10 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mb: 7 }}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2.5 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: '9px', background: '#C2622A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.05rem' }}>S</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '0.98rem', lineHeight: 1.1 }}>Care for Shepherds</Typography>
                <Typography sx={{ color: 'rgba(253,246,238,0.3)', fontFamily: '"Lora",serif', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>ShepherdCare Platform</Typography>
              </Box>
            </Box>
            <Typography sx={{ color: 'rgba(253,246,238,0.5)', fontFamily: '"Lora",serif', fontSize: '0.87rem', lineHeight: 1.85, mb: 3, maxWidth: 300 }}>
              A pastoral wellness SaaS platform built to help African churches fundraise for, support, and sustainably care for their pastors.
            </Typography>
            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                {
                  label: 'WhatsApp',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(253,246,238,0.5)">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                },
                {
                  label: 'X',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(253,246,238,0.5)">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.566 2.25h6.97l4.261 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(253,246,238,0.5)">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(253,246,238,0.5)">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
              ].map(s => (
                <IconButton key={s.label} size="small"
                  sx={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 1.5, width: 36, height: 36, transition: 'all 0.2s', '&:hover': { background: 'rgba(194,98,42,0.2)', borderColor: 'rgba(194,98,42,0.4)' } }}>
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section}>
              <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '0.88rem', mb: 2.5 }}>{section}</Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {links.map(link => (
                  <Box component="li" key={link.label} sx={{ mb: 1.2 }}>
                    <Box component={Link} href={link.href}
                      sx={{ color: 'rgba(253,246,238,0.45)', fontFamily: '"Lora",serif', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: '#C2622A' }, display: 'block' }}>
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Contact column */}
          <Grid size={{ xs: 12, sm: 12, md: 2 }}>
            <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 600, fontSize: '0.88rem', mb: 2.5 }}>Contact</Typography>
            <Typography sx={{ color: 'rgba(253,246,238,0.45)', fontFamily: '"Lora",serif', fontSize: '0.82rem', lineHeight: 1.8, mb: 1 }}>
              hello@shepherdcare.co.ke
            </Typography>
            <Typography sx={{ color: 'rgba(253,246,238,0.45)', fontFamily: '"Lora",serif', fontSize: '0.82rem', lineHeight: 1.8, mb: 1 }}>
              +254 700 123 456
            </Typography>
            <Typography sx={{ color: 'rgba(253,246,238,0.45)', fontFamily: '"Lora",serif', fontSize: '0.82rem', lineHeight: 1.8, mb: 2.5 }}>
              Nairobi, Kenya
            </Typography>
            <Button variant="outlined" size="small" href="mailto:hello@shepherdcare.co.ke"
              sx={{ color: 'rgba(253,246,238,0.6)', borderColor: 'rgba(253,246,238,0.2)', fontFamily: '"Lora",serif', fontSize: '0.75rem', '&:hover': { borderColor: '#C2622A', color: '#C2622A' } }}>
              Email Us
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ color: 'rgba(253,246,238,0.25)', fontFamily: '"Lora",serif', fontSize: '0.78rem' }}>
            © 2025 Care for Shepherds. All rights reserved. Built with ❤ for Africa.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Kenya Data Protection Act', 'GDPR Principles', 'Secure Payments'].map(l => (
              <Typography key={l} sx={{ color: 'rgba(253,246,238,0.2)', fontFamily: '"Lora",serif', fontSize: '0.73rem' }}>{l}</Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
