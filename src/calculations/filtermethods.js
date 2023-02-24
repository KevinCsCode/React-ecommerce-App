function scoreItemOnMatches(checkArr, comparisonString) {
    let copyArrForFilter = checkArr.slice();
    let chk = (copyArrForFilter.filter((item) => String(comparisonString).includes(String(item).trim()))).length;
    return isNaN(chk)?0:chk;
}
//Assume searchTerm is a string
//Assume bookList objects of the form in db.json, i.e. an array of objects, each of which has an Author, Book, AverageCustomerRating, Image and Price property

export function filterBookArray(filterType, searchTerm, requiredRating, bookList) {
    if (filterType === "filter-by-author") {
        return filterBookArrayByAuthor(searchTerm, bookList);
    } else if (filterType === "filter-by-title") {
        return filterBookArrayByTitle(searchTerm, bookList);
    } else if (filterType==="filter-by-rating") {
        return filterBookArrayByMinimumRating(requiredRating, bookList);
    } else {
        return bookList;
    }
}

export function filterBookArrayByAuthor(searchTerm, bookList)  {
    if (!(searchTerm) || searchTerm.length == 0) {
        return bookList;
    } else {
        let searchTermList = String(searchTerm).split(' ');
        //We will assign a "score" to every item in bookList: for each term from the search it gets right, that author will be given +1
        //We then filter out all items with a score of zero        
        if (Array.isArray(bookList)) {
            return bookList.map((item) => [item, scoreItemOnMatches(searchTermList, item.Author)]).filter((pair) => pair[1] > 0).sort((a, b) => a[1] >= b[1]).map((item)=>item[0]);
        } else {
            return bookList;
        }
    }
}

export function filterBookArrayByTitle(searchTerm, bookList) {
    if (!(searchTerm) || searchTerm.length == 0) {
        return bookList;
    } else {
        let searchTermList = String(searchTerm).split(' ');
        //We will assign a "score" to every item in bookList: for each term from the search it gets right, that author will be given +1
        //We then filter out all items with a score of zero        
        if (Array.isArray(bookList)) {
            return bookList.map((item) => [item, scoreItemOnMatches(searchTermList, item.Book)]).filter((pair) => pair[1] > 0).sort((a, b) => a[1] >= b[1]).map((item) => item[0]);
        } else {
            return bookList;
        }
    }
}

export function filterBookArrayByMinimumRating(requiredRating, bookList) {
    if (!(requiredRating) || requiredRating <= 0) {
        return bookList;
    } else {
        return bookList.filter((item) => item.AverageCustomerRating >= requiredRating);
    }
}