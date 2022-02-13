import express from 'express';
import path from 'path';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../client/webpack.dev';
import fs from 'fs';
import { resolve } from 'path';
// rest of the code remains same
const app = express();
const PORT = 3000;

export type Quote = {
    id: string;
    isDeleted: boolean;
    createdAt: number;
    updatedAt: number;
    createdBy: string;
    tags: never[] | string | string[];
    source: string;
    author: string;
    text: string;
};

const config = webpackConfig();

const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output?.publicPath
    })
);

// Serve the files on port 3000.
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/api/quotes', (req, res) => {
    console.log(app);

    const quotesReadableStream = fs.createReadStream(path.resolve(process.cwd(), 'quotes.json'), { encoding: 'utf8' });
    quotesReadableStream.pipe(res);
    quotesReadableStream.on('error', () => {
        res.writeHead(500);
        res.end('Bad response');
    });
});

app.get('/api/quotes/:quoteId', (req, res) => {
    const { quoteId } = req.params;
    const file = fs.readFileSync(path.resolve(process.cwd(), 'quotes.json'), 'utf8');
    const quotes: Quote[] = JSON.parse(file);
    const payloadStr = quotes.find(({ id: _id }) => _id === quoteId);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(JSON.stringify(payloadStr));
    res.end('\n');
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
