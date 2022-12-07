import {Category} from './enums';
import {logSearchResults} from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =====================================================


// Task 02.01
// logFirstAvailable(getAllBooks());
//
// logBookTitles(getBookTitlesByCategory(Category.javaScript));
//
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// Task 03.01
// const myId: string = createCustomerID('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID = createCustomerID;
// idGenerator = (name, id) => `${id}/${name}`;
// console.log(idGenerator);
// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// let results = checkoutBooks('Anna', 1, 3, 4);
// console.log(results);

// Task 03.03
// console.log(getTitles(1, true));

// Task 03.04
// console.log(bookTotleTransform('123'));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason) => console.log(`Damaged: ${reason}`),
// };
//
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: DamageLogger = (reason) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favouriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 3,
// };
//
// const favouriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer(custName: string, bookTitle: string): void {
//         console.log(`Customer: ${custName}, book: ${bookTitle}`);
//     }
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
//
// console.log(offer?.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1,'Learn TypeSctipt', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03
// const enc = new refBook(1, 'Learn TypeScript', 2022, 2);
// console.log(enc);
// enc.printItem();
// enc.printCitation();

// Task 05.04
// const favouriteLibrarian: Librarian & P = new UL.UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris', 'Learn Typescript');
// console.log(favouriteLibrarian.p);

// Task 05.05
// const personBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     name: 'Anna',
//     title: 'Learn TypeScript for Angular'
// };
// const options: TOptions = {
//     duration: 200
// };
//
// console.log(setDefaultConfig(options));

// Task 06.03
// const enc = new refBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(enc);
// const obj = new UniversityLibrarian();
// printRefBook(obj);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(module => {
//            const reader = new module.Reader();
//            console.log(reader);
//         })
//         .catch(err => console.log(err));
// }

// if (flag) {
//    const module = await import('./classes');
//
//    const reader = new module.Reader();
//    console.log(reader);
// }

// Task 06.06
// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Kyiv,...'
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const r = purge(inventory);
// console.log(r);
// const r2 = purge([1,2,3,4]);
// console.log(r2);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(getAllBooks()[0], 'available'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 100,
//     title: 'Unknown'
// };
//
// const updatedBook: UpdatedBook = {
//     id: 1,
//     available: false
// };

// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02
// const o = new UL.UniversityLibrarian();
// console.log(o);
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['b'] = 2;
// o.name = 'Anaa';
// o['printLibrarian']();

// Task 08.03
// const o = new UL.UniversityLibrarian();
// o.assistFaculty = null;
// console.log(o);
// o.techCommunity = null;

// Task 08.04
// const enc = new RefBook(1, 'Learn TS', 2022, 2);
// enc.printItem();

// Task 08.05, 08.06
// const o = new UL.UniversityLibrarian();
// o.name = 'Boris';
// o.assistCustomer('Anna', 'Learn TypeScript');
// console.log(o);

// Task 08.07
// const enc = new RefBook(1, 'Learn TypeScript', 2022, 2);
// enc.copies = -10.5;

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.javaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.javaScript)
//     .then(titles => {
//         console.log(titles);
//         // return titles.length;
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err));
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.Software)
//     .catch(err => console.log(err));
// console.log('End');

