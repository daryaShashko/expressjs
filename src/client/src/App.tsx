import React from 'react';
import { Link, Paper, Box } from '@mui/material';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
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
    </div>
);
export default App;
