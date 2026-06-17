'use client';
import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material';

interface ProblemCardProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
    accentColor?: string;
}

export default function ProblemCard({
    icon,
    title,
    items,
    accentColor = '#C2622A',
}: ProblemCardProps) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
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
                    variant="h5"
                    sx={{
                        fontFamily: '"Playfair Display",serif',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.3rem',
                        color: '#2C1A0E',
                    }}
                >
                    {title}
                </Typography>

                {/* Items */}
                <Stack spacing={1.5} sx={{ alignItems: 'center' }}>
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                maxWidth: 220,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    backgroundColor: accentColor,
                                    flexShrink: 0,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Lora",serif',
                                    fontSize: '0.95rem',
                                    color: '#2C1A0E',
                                }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}
