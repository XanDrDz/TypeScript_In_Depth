// import {Book, Magazine} from "../interfaces";

import {ShelfItem} from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: Array<T> = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        console.log(this.items);
        this.items.forEach(item => console.log(item.title));
    }
}

// export class Shelf2 {
//     private items: Book[] | Magazine[] = [];
//
//     add(item: Book | Magazine): void {
//         this.items.push(item);
//     }
//
//     getFirst(): T {
//         return this.items[0];
//     }
// }