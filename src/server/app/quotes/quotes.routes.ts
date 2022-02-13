import quotesService from './quotes.service';

export const quotesRoutes = {
    '/api/quotes': {
        get: quotesService.getAllQuotes
    },
    '/api/quotes/:quoteId': {
        get: quotesService.getQuoteById
    }
};
