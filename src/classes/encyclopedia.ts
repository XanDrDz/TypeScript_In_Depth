/* eslint-disable no-underscore-dangle */
import { ReferenceItem } from './reference-item';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(
        id: number,
        title: string,
        year: number,
        public edition: number,
    ) {
        super(id, title, year);
    }

    // override get publisher(): string {
    //     return '';
    // }
    //
    // override set publisher(value: string) {
    //
    // }

    override printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}