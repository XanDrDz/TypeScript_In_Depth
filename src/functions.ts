/* eslint-disable no-redeclare,no-underscore-dangle */

import {Book, ILibrary, LibMgrCallback, TOptions, Callback} from './interfaces';
import {Category} from './enums';
import {BookOrUndefined, BookProperties} from './types';
import RefBook from './classes/encyclopedia';
import * as assert from 'assert';

export function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.javaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.javaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.javaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of Books: ${books.length}`);
    console.log(books.find(book => book.available === true)?.title);
}

export function getBookTitlesByCategory(filterCategory: Category = Category.javaScript): Array<string> {
    return getAllBooks()
        .filter(({ category }) => category === filterCategory)
        .map(({ title }) => title);
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach((title) => console.log(title));
}

export function getBookAuthorByIndex(index: number = 0): [title: string, author: string] {
    const { title, author } = (getAllBooks() || [])[index];
    return [title ?? 'N/A', author ?? 'N/A'];
}

export function calcTotalPages(): bigint {
    const libraries: readonly ILibrary[] = <const>[
        { lib: 'libName1', books: 1_000_000_000n, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000n, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000n, avgPagesPerBook: 280 },
    ];
    return libraries
        .reduce((acc, library) => acc + library.books * BigInt(library.avgPagesPerBook), 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer age: ${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(({ available }) => available === true)
        .map(({title}) => title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(({title}) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id ===id && book.available === available).map(({title}) => title);
        }
    }
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw  new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function  bookTotleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name: value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name: value;
}


export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 90;
    return options;
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: Callback<string[]>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
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
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);
    return result;
}