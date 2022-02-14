import React from 'react';
import { Card, CardContent, Paper, Typography } from '@mui/material';
import { QuoteProps } from './quote.types';

export const Quote: React.FC<QuoteProps> = ({ id, createdBy, text, author }) => (
    <Paper elevation={3}>
        <Card sx={{ minWidth: 275 }} id={id}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {author}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {createdBy}
                </Typography>
                <Typography variant="body2">{text}</Typography>
            </CardContent>
        </Card>
    </Paper>
);
