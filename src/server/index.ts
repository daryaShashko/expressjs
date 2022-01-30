import express from 'express';
import path from 'path';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../client/webpack.dev';
import fs from 'fs';
import { resolve } from 'path';
// rest of the code remains same
const app = express();
const PORT = 3000;

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
    const quotesReadableStream = fs.createReadStream(path.resolve(process.cwd(), 'quotes.json'), { encoding: 'utf8' });
    quotesReadableStream.pipe(res);
    quotesReadableStream.on('error', () => {
        res.writeHead(500);
        res.end('Bad response');
    });
});

// app.get('/users/:userId', (req, res) => {
//     return res.send(users[req.params.userId]);
// });
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
