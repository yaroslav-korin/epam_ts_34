/* eslint-disable no-underscore-dangle */
import { ReferenceItem } from './referenceItem';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    constructor(title: string, year: number, private edition: number) {
        super(title, year); // TODO with rest
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

    get copies(): number {
        return this._copies;

    }

    @positiveInteger
    set copies(value) {
        this._copies = value;
    }
}
