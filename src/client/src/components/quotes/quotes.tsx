import React from 'react';
import { Box } from '@mui/material';
import { Quote, QuoteProps } from '../quote';

type QuotesProps = { quotes: QuoteProps[] | undefined };

export const Quotes: React.FC<QuotesProps> = ({ quotes }) => {
    if (!quotes) {
        return null;
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1
                }
            }}>
            {quotes.map((quote) => (
                <Quote key={quote.id} {...quote} />
            ))}
        </Box>
    );
};
