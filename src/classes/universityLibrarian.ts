import * as Interfaces from '../Interfaces';
import { logger, sealed, writable, logParameter, logMethod, format } from '../decorators';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    department: string;
    email: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching Community');
    }
}
