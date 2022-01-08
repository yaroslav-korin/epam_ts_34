import { ShelfItem } from '../Interfaces';

export default class Shelf<T extends ShelfItem = ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T | undefined {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        console.log(this.items.map(item => item.title));
    }
}
