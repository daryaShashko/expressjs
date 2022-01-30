import React from 'react';
import { Link, Paper, Box, Button } from '@mui/material';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
    const getAllQuotes = async () => {
        const response = await fetch('/api/quotes/', {
            method: 'GET' // *GET, POST, PUT, DELETE, etc.
        });
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        // setQuotes(parsedResponse);
    };

    return (
        <div className="wrapper">
            <h1>React 17 and TypeScript 4 App!🚀</h1>
            <Link href="#">Link</Link>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128
                    }
                }}>
                <Paper />
                <Paper elevation={3} />
            </Box>
            <Button onClick={getAllQuotes}>Get all quotes</Button>
        </div>
    );
};
export default App;
