import { increaseBooksCountPerGivenBook, decreaseBooksCountPerGivenBook } from './../calculations/countermethods';

const PriceControl = ({ book,
    bookSelected,
    setBookSelected,
    countOfItems,
    setCountOfItems,
    displayPriceControl }) => {
    const reduceItemCountByOne = () => {
        setCountOfItems(decreaseBooksCountPerGivenBook(book, countOfItems));
    }
    const increaseItemCountByOne = () => {
        setCountOfItems(increaseBooksCountPerGivenBook(book, countOfItems));
    }

    return (
        <div className="item-price-controller-internal">
            <div className="add-to-cart-block"><p>Add to cart</p></div>
            <div className="item-price-buttons-div">
            <button
                id={"minus-btn-" + book.Book}
                title={"Reduce order of " + book.Book + " by one"}
                type="button" value={"-"}
                onClick={reduceItemCountByOne}
            >-</button>
            <div className="price-detail">
                <p>{"\u20AC" + parseFloat(book.Price).toFixed(2)}
                </p>
            </div>
            <button
                id={"plus-btn-" + book.Book}
                title={"Increase order of " + book.Book + " by one"}
                type="button" value={"+"}
                onClick={increaseItemCountByOne}
                >+</button>
                </div>
        </div>
        )
}

export default PriceControl