'use client';
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@mui/material';

interface ResourceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ResourceCard({
    icon,
    title,
    description,
}: ResourceCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    boxShadow: '0 8px 24px rgba(44,26,14,0.12)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease',
                },
            }}
        >
            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'center' }}>
                {/* Icon */}
                <Box
                    sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #FAECE7 0%, #EAF3DE 100%)',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        color: '#C2622A',
                    }}
                >
                    {icon}
                </Box>

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: '"Playfair Display",serif',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: '1.1rem',
                        color: '#2C1A0E',
                    }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        fontFamily: '"Lora",serif',
                        fontSize: '0.9rem',
                        color: '#6B4C35',
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
