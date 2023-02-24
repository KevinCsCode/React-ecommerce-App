import PriceControl from './pricecontrol';
const SingleItem = ({ book,
    bookSelected,
    setBookSelected,
    countOfItems,
    setCountOfItems}) => {
    return (
        <div className="single-gallery-item">
            <div className="book-title"><p>{book.Book}</p></div>
            <div className="book-author"><p>{book.Author}</p></div>
            <div className="image-with-price-control">
                <img className="book-cover-image"
                    key={"bk" + String(book.Book).replace(' ', '-')}
                    src={book.Image}
                    alt={book.Book + ' by ' + book.Author}
                />
                <PriceControl
                    book={book}
                    bookSelected={bookSelected}
                    setBookSelected={setBookSelected}
                    countOfItems={countOfItems}
                    setCountOfItems={setCountOfItems}
                />
            </div>
        </div>
        )
}
export default SingleItem