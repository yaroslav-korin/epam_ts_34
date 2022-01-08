/* eslint-disable no-redeclare,no-underscore-dangle */
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { checkoutBooks, createCustomerID, getAllBooks, getBookTitlesByCategory, getTitles, logSearchResults, showHello } from './functions';
import { Author, Book, Librarian, Logger, Magazine } from './Interfaces';
import { RefBook, Shelf, UL } from './classes';

showHello('greeting', 'TypeScript');

const bookTitles: string[] = getAllBooks().map(book => book.title);
// logFirstAvailable(getAllBooks());
// console.log(`HEre are books with CSS category ${JSON.stringify(getBookTitlesByCategory(Category.CSS))}`);
// logBookTitles(bookTitles);
// console.log(`Book with index #3 is ${getBookAuthorByIndex(3)}`);
// console.log(`Total pages in libraries = ${calcTotalPages()}`);

let myID: string = createCustomerID('Ann', 100);
// console.log(myID);

let idGenerator: typeof createCustomerID = (name: string, id: number): string => {
    return `${name}-${id}`;
};

idGenerator = createCustomerID;
// console.log(idGenerator('hello', 1));

// 03.02

// createCustomer('Ivan');
// createCustomer('Ivan', 22);
// createCustomer('Ivan', 22, 'London');
getBookTitlesByCategory();

// logFirstAvailable();

// console.log(getBookByID());

const myBooks = checkoutBooks('Ann', [1, 2, 4]);
// console.log(myBooks);

// ----- Task 03.03 Function Overloading -----

const checkedOutBooks: Book[] = getTitles(4, true);
// console.log(checkedOutBooks);

// ----- Task 03.04. Assertion Functions -----

// console.log(bookTitleTransform('Hello'));
// console.log(bookTitleTransform(123));

// ----- Task 04.01. Defining an Interface -----

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string): void => {
        console.log(`Damaged: ${reason}`);
    },
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// ----- Task 04.02. Defining an Interface for Function Types -----

const logDamage: Logger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
};
// logDamage('missing back cover');

// ----- Task 04.03. Extending Interface -----

const favoriteAuthor: Author = {
    name: 'Peter',
    email: 'peter@gmaikl.com',
    numBooksPublished: 12,
};
const favoriteLibrarian: Librarian = {
    name: 'Anna',
    email: 'anna@gmail.com',
    department: 'main',
    assistCustomer(custName: string) {
        console.log(custName);
    },
};

// ----- Task 04.04. Optional Chaining -----
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle?.());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// ----- Task 04.05. Keyof Operator -----

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// CLASSES
// ----- Task 05.01. Creating and Using Classes -----

// const ref = new ReferenceItem('first', 2021);
// ref.printItem();
// ref.publisher = 'new';
// console.log(ref);
// console.log(ref.getID());

// ----- Task 05.02. Extending Classes -----
const refBook = new RefBook(' second', 2022, 1);
// refBook.printCitation();
// refBook.printItem();

// ----- Task 05.03. Creating Abstract Classes -----
// refactoring only

// ----- Task 05.04. Interfaces for Class Types -----

const favoriteLibrarian1: Librarian = new UL();
favoriteLibrarian1.name = 'Igor';
// favoriteLibrarian1.assistCustomer('Peter');

// ----- Task 05.05. Intersection and Union Types -----

const pBook: PersonBook = {
    name: 'Ivan v lesu',
    email: 'ivan@gmail.com',
    author: 'Vova',
    title: 'New title',
    id: 12,
    available: false,
    category: Category.JavaScript,
};
// console.log(pBook);

// printRefBook(refBook);

const unLibratian = new UL();
// printRefBook(unLibratian);

// ----- Task 06.05. -----
const flag = false;

if (flag) {
    const module = await import('./classes');
    const reader = new module.Reader();

    reader.name = 'Victor';
    // console.log(reader);
}

// const lib: Library = new Library();
const lib = {};
// console.log(lib);

// ----- Task 07.01. Generic Functions -----
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4]));

// ----- Task 07.02. Generic Interfaces and Classes -----
const bookShelf = new Shelf<Book>();
inventory.forEach(item => bookShelf.add(item));
// console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(item => magazineShelf.add(item));
// console.log(magazineShelf.getFirst());

// ----- Task 07.03. Generic Constraints -----
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getProperty(pBook, 'author'));

// ----- Task 07.04. Utility Types  -----
const requiredFields: BookRequiredFields = {
    id: 13,
    title: 'Cool autoexec.bat Scripts!',
    author: 'C. D.',
    available: true,
    category: Category.Software,
    pages: 12,
    markDamaged() {},
};

const updatedBook: UpdatedBook = {};
const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// ----- Task 08.01. Class Decorators (sealed) -----
const fLibrarian = new UL();
// UL['a'] = 2;
// console.log(fLibrarian);
fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

// ----- Task 08.03. Method Decorator (writable) -----
// const obj = new UL();
// obj.assistFaculty = null;
// obj.teachCommunity = null;
// const p = Object.getPrototypeOf(obj);
// p['teachCommunity'] = null;

// ----- Task 08.04. Method Decorator (timeout) -----
// const enc = new RefBook('TypeScript', 2021, 2);
// enc.printItem();

// ----- Task 08.05. Parameter Decorator (logParameter) -----
// const obj = new UL();
// obj.name = 'Elena';
// console.log(obj.name);
// obj.assistCustomer('Peter');

// ----- Task 08.07. Accessor Decorator -----
// const enc = new RefBook('TypeScript', 2021, 3);
// enc.copies = -3;
// enc.copies = 5;
// enc.copies = 10.5;

// ----- Task 09.01. Callback Functions -----
// console.log('Begin');
// getBookByCategory(Category.JavaScript, logCategorySearch);
// getBookByCategory(Category.Software, logCategorySearch);
// console.log('End');


// ----- Task 09.02. Promises -----
// const f1 = (titles: string[]) => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
// };
//
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(f1)
//     .then((len: Unpromisify<ReturnType<typeof f1>>) => console.log(len))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// ----- Task 09.03. Async F|unctions  -----
console.log('Begin');
logSearchResults(Category.JavaScript)
    .catch(e => console.log(e));
console.log('End');
