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

export type QuoteProps = Pick<Quote, 'id' | 'createdBy' | 'text' | 'author'>;
