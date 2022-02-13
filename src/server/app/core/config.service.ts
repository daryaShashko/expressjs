import { config } from 'dotenv';

config();

export class AppConfig {
    quotesPath: string = process.env.QUOTES_PATH || 'src/server/app';
    static port: string | number = process.env.PORT || 2334;
}
