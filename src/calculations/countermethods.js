//Assume thisBook objects of the form thisBook = {Book:"***", Author="***", Price="***", Rating="***"}
//Assume arrCountOfItems objects of the form [{bookobject: {Book:"***", Author="***", Price="***", Rating="***"},count:x}, {book...},...]
export function increaseBooksCountPerGivenBook(thisBook, arrCountOfItems)  {
    let arrBooks = []
    Array.isArray(arrCountOfItems) ? arrBooks = arrCountOfItems.slice() : arrBooks = Array(arrCountOfItems).slice()
    let myBkIndex = arrBooks.map((item) => item.bookobject.Book === thisBook.Book).indexOf(true);
    if (myBkIndex > -1) {
        arrBooks[myBkIndex].count = arrBooks[myBkIndex].count + 1;
    } else {
        let newObj = { "bookobject": thisBook, "count": 1 }
        arrBooks.push(newObj);
    }
    return arrBooks;
}

export function decreaseBooksCountPerGivenBook(thisBook, arrCountOfItems)  {
    let arrBooks = []
    Array.isArray(arrCountOfItems) ? arrBooks = arrCountOfItems.slice() : arrBooks = Array(arrCountOfItems).slice()
    let myBkIndex = arrBooks.map((item) => item.bookobject.Book === thisBook.Book).indexOf(true);
    if (myBkIndex > -1) {
        arrBooks[myBkIndex].count = arrBooks[myBkIndex].count - 1;
    }
    return arrBooks;
}