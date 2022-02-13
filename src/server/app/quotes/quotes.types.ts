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
