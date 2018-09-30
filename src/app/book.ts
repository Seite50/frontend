import { Author} from './author';

export class Book {
    id: string;
    name: string;
    authors: Author[];

    constructor (
    id: string,
    name: string,
    authors: Author[],
    ) {}
}
