import {Author, Book, Person} from './interfaces';
import {createCustomer, getBooksByCategoryPromise} from "./functions";

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

export type BookProperties = keyof Book;
export type PersonBook = Book & Person;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type CreateCustomerFunctionType = typeof createCustomer;

type fn = (a: string, b: number, c: boolean) => symbol;
type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];

type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;
type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type t = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;