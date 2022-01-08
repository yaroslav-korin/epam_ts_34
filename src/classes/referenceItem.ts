import { timeout } from '../decorators';

export abstract class ReferenceItem {
    private _publisher = 'old';
    #id: number;
    static department: string = 'main';

    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    protected constructor(public title, protected year) {
        this.#id = 1;
    }

    abstract printCitation(): void;

    // @timeout(1000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. ${ReferenceItem.department} department`);
    }

    get publisher() {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    getID() {
        return this.#id;
    }
}
