import { config } from 'dotenv';
import { AppConfigType } from './config.types';

config();

class AppConfig implements AppConfigType {
    quotesPath = process.env.QUOTES_PATH || 'src/server/app';
    port = process.env.PORT || 2334;
}

export default new AppConfig();
