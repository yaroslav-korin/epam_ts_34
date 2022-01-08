import { Book, Person } from './Interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;
type Library = { lib: string; books: number; avgPagesPerBook: number };
type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Person, 'email'>;
type CreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type p = ReturnType<typeof getBooksByCategoryPromise>;
type dataType = Unpromisify<p>;


export {
    BookProperties,
    PersonBook,
    BookOrUndefined,
    Library,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    CreateCustomerFunctionType,
    fn,
    Unpromisify
};
