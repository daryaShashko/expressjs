import * as fs from 'fs';
import { resolve } from 'path';
import { AppConfig } from '../core';
import ReadableStream = NodeJS.ReadableStream;
import { Quote } from './quotes.types';

class QuotesService {
    private readonly filename: string;

    constructor(appConfigService: AppConfig) {
        this.filename = resolve(process.cwd(), 'quotes.json');

        this.getAccessToFile();
    }

    getAccessToFile(): void {
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
            console.error(err);
        }
    }

    getFile(): string {
        return fs.readFileSync(this.filename, 'utf8');
    }

    getQuoteById(id: string | undefined): Quote | undefined {
        if (!id) {
            return undefined;
        }
        const quotes: Quote[] = JSON.parse(this.getFile());
        return quotes.find(({ id: _id }) => _id === id);
    }

    getAllQuotes(): ReadableStream {
        return fs.createReadStream(this.filename, { encoding: 'utf8' });
    }
}

export default new QuotesService(new AppConfig());
