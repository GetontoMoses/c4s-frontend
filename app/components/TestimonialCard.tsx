'use client';
import React from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    church: string;
    initials: string;
    rating?: number;
}

export default function TestimonialCard({
    quote,
    author,
    role,
    church,
    initials,
    rating = 5,
}: TestimonialCardProps) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                {/* Stars */}
                <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {Array.from({ length: rating }).map((_, i) => (
                        <StarIcon
                            key={i}
                            sx={{
                                fontSize: '1.2rem',
                                color: '#C2622A',
                            }}
                        />
                    ))}
                </Box>

                {/* Quote */}
                <Typography
                    sx={{
                        fontFamily: '"Lora",serif',
                        fontSize: '0.95rem',
                        color: '#2C1A0E',
                        lineHeight: 1.8,
                        mb: 2.5,
                        fontStyle: 'italic',
                        flex: 1,
                    }}
                >
                    &ldquo;{quote}&rdquo;
                </Typography>

                {/* Author Info */}
                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                    <Avatar
                        sx={{
                            bgcolor: '#C2622A',
                            fontFamily: '"Playfair Display",serif',
                            fontWeight: 700,
                            flexShrink: 0,
                        }}
                    >
                        {initials}
                    </Avatar>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: '"Playfair Display",serif',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                color: '#2C1A0E',
                            }}
                        >
                            {author}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Lora",serif',
                                fontSize: '0.85rem',
                                color: '#6B4C35',
                            }}
                        >
                            {role}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Lora",serif',
                                fontSize: '0.8rem',
                                color: '#C2622A',
                                fontWeight: 600,
                            }}
                        >
                            {church}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
