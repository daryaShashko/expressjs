import Router from 'express';
import QuotesController from './quotes.controller';

const router = Router();

router.get('/quotes', QuotesController.getAllQuotes);
router.get('/quotes/:quoteId', QuotesController.getQuoteById);

export default router;
