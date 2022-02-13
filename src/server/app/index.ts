import express from 'express';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../client/webpack.dev';
import quotesRoutes from './quotes/quotes.routes';
import { AppConfig } from './core';

const app = express();
const PORT = AppConfig.port;
const config = webpackConfig();
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output?.publicPath
    })
);
app.use('/api', quotesRoutes);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
