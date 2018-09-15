

[{"authors":[{"givenname":"Petros","id":"2fa2aa52-cff4-4d26-a30e-b9e75e4c317d","surname":"Markaris"}],"id":"c48ad009-ae44-4baa-8898-f3a27c24c22d","name":"Zahltag"}]

import { Author} from "./author"

export class Book {
    id: string;
    name: string;
    authors: Author[];
}