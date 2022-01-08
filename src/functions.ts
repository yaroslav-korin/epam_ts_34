import { BookOrUndefined, BookProperties, Library } from './types';
import RefBook from './classes/encyclopedia';
import { Category } from './enums';
import { Book, Callback, LibMgrCallback } from './Interfaces';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): readonly Book[] {
    const books: ReadonlyArray<Book> = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const bookQuantity: number = books.length;
    const fistAvailableBook: Book = books.find((book: Book) => book.available);

    console.log(`Quantity of books = ${bookQuantity}. First available book is ${fistAvailableBook?.title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] | [] {
    const books = getAllBooks();
    const booksInCategory = books.filter((book: Book) => book.category === category).map(book => book.title);

    return booksInCategory;
}

export function logBookTitles(titles: string[]): void {
    console.log(titles);
}

export function getBookAuthorByIndex(bookIndex: number): [title: string, author: string] {
    const selectedBook: Book = getAllBooks()[bookIndex];

    return [selectedBook.title, selectedBook.author];
}

export function calcTotalPages(): bigint {
    const librariesContent: readonly Library[] = <const>[
        {
            lib: 'libName1',
            books: 1_000_000_000,
            avgPagesPerBook: 250,
        },
        {
            lib: 'libName2',
            books: 5_000_000_000,
            avgPagesPerBook: 300,
        },
        {
            lib: 'libName3',
            books: 3_000_000_000,
            avgPagesPerBook: 280,
        },
    ];

    const totalPagesInLibraries: number = librariesContent.reduce((sum, library) => {
        return sum + library.books * library.avgPagesPerBook;
    }, 0);

    return BigInt(totalPagesInLibraries);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Name: ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function checkoutBooks(customer: string, bookIDs: number[]): string[] {
    return getAllBooks()
        .filter(book => book.available)
        .map(book => book.title);
}

export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty<TObject, TKey extends keyof TObject>(
    object: TObject,
    key: TKey,
): TObject[TKey] | string {
    if (typeof object[key] === 'function') {
        return object[key]['name'];
    } else {
        return object[key];
    }
}

export function getTitles(author: string);
export function getTitles(available: boolean);
export function getTitles(id: number, available: boolean);
export function getTitles(...props: any[]) {
    const books = getAllBooks();

    if (props.length === 1) {
        if (typeof props[0] === 'string') {
            return books.filter(({ author }) => author === props[0]).map(({ title }) => title);
        } else if (typeof props[0] === 'boolean') {
            return books.filter(({ available }) => available === props[0]).map(({ title }) => title);
        }
    } else if (props.length === 2) {
        return books.filter(({ id, available }) => id === props[0] && available === props[1]).map(({ title }) => title);
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): Array<T> {
    return inventory.slice(2);
}

// export function getBookByCategory(category: Category, callback: LibMgrCallback): void {
export function getBookByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if(titles.length) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (e) {
            callback(e, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((res, rej) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if(titles.length) {
                res(titles);
            } else {
                rej('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const result = await getBooksByCategoryPromise(category);

    throw new Error('No books found2');
    console.log(result.length);
}
