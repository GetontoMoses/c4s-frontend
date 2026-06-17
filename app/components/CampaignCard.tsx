'use client';
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    Typography,
} from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';

interface CampaignCardProps {
    title: string;
    goal: string;
    raised: string;
    progress: number;
    icon?: React.ReactNode;
}

export default function CampaignCard({
    title,
    goal,
    raised,
    progress,
    icon,
}: CampaignCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            {/* Image Placeholder */}
            <Box
                sx={{
                    height: 180,
                    background: 'linear-gradient(135deg, #FAECE7 0%, #EAF3DE 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C2622A',
                }}
            >
                {icon ?? <CampaignIcon sx={{ fontSize: 56 }} />}
            </Box>

            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                {/* Campaign Title */}
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: '"Playfair Display",serif',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.3rem',
                    }}
                >
                    {title}
                </Typography>

                {/* Goal and Raised */}
                <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
                    <Box>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#6B4C35',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                            }}
                        >
                            Goal
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Playfair Display",serif',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: '#2C1A0E',
                            }}
                        >
                            {goal}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#6B4C35',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                            }}
                        >
                            Raised
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Playfair Display",serif',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: '#C2622A',
                            }}
                        >
                            {raised}
                        </Typography>
                    </Box>
                </Stack>

                {/* Progress Bar */}
                <Box sx={{ mb: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ mb: 0.8 }}
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#6B4C35',
                            fontSize: '0.75rem',
                        }}
                    >
                        {progress}% funded
                    </Typography>
                </Box>

                {/* Buttons */}
                <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 2 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontFamily: '"Lora",serif',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                        }}
                    >
                        Donate
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            flex: 1,
                            textTransform: 'none',
                            fontFamily: '"Lora",serif',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                        }}
                    >
                        View Campaign
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
