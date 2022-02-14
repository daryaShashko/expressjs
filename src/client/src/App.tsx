import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Quotes } from './components/quotes';
import { QuoteType } from './components/quote';

const App: React.FC = () => {
    const [quotes, setQuotes] = useState<QuoteType[]>();
    const getAllQuotes = async () => {
        const response = await fetch('/api/quotes/', {
            method: 'GET' // *GET, POST, PUT, DELETE, etc.
        });
        const parsedResponse = await response.json();
        setQuotes(parsedResponse);
        // setQuotes(parsedResponse);
    };

    const getQuoteById = async () => {
        const response = await fetch('/api/quotes/ec5f0d07-df5d-4447-934a-4674c8734f88', {
            method: 'GET' // *GET, POST, PUT, DELETE, etc.
        });
        const parsedResponse: QuoteType = await response.json();
        setQuotes([parsedResponse]);
    };

    return (
        <div className="wrapper">
            <h1>React 17 and TypeScript 4 App!🚀</h1>
            <Button onClick={getAllQuotes}>Get all quotes</Button>
            <Button onClick={getQuoteById}>Get quote</Button>
            <Quotes quotes={quotes} />
        </div>
    );
};
export default App;
