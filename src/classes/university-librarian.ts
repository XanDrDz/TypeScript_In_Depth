/* eslint-disable no-redeclare,no-underscore-dangle */

import * as Interfaces from '../interfaces';
import {format, logger, logMethod, logParameter, sealed, writable} from '../decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.P {
    @format() name: string;
    email: string;
    department: string;

    p: string = 'abc';

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    techCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian }