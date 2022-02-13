import { Request } from 'express';
import { ServerResponse } from 'http';
import QuotesService from './quotes.service';
import fs from 'fs';
import path from 'path';
import { Quote } from './quotes.types';

export default class QuotesController {
    static getAllQuotes(req: Request, res: ServerResponse): void {
        const quotesReadableStream = QuotesService.getAllQuotes();
        quotesReadableStream.pipe(res);
        quotesReadableStream.on('error', () => {
            res.writeHead(500);
            res.end('Bad response');
        });
    }

    static getQuoteById(req: Request, res: ServerResponse): void {
        const { quoteId } = req.params;
        const file = fs.readFileSync(path.resolve(process.cwd(), 'quotes.json'), 'utf8');
        const quotes: Quote[] = JSON.parse(file);
        const payloadStr = quotes.find(({ id: _id }) => _id === quoteId);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200);
        res.write(JSON.stringify(payloadStr));
        res.end('\n');
    }
}
