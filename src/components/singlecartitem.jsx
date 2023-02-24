import { increaseBooksCountPerGivenBook, decreaseBooksCountPerGivenBook } from './../calculations/countermethods';

const SingleCartItem = ({ itemWithCount, countOfItems, setCountOfItems }) => {
    const decreaseItemCountByOne = () => {
        setCountOfItems(decreaseBooksCountPerGivenBook(itemWithCount.bookobject, countOfItems));
    }

    const increaseItemCountByOne = () => {
        setCountOfItems(increaseBooksCountPerGivenBook(itemWithCount.bookobject, countOfItems));
    }

    return (
        <div className="cart-article-row">
            <div className="cart-item-name-price-quantity">
                <div className="cart-item-name"><p>{itemWithCount.bookobject.Book}</p></div>
                <div className="cart-item-price"><p>{"\u20AC" + parseFloat(itemWithCount.bookobject.Price).toFixed(2)}</p></div>
                    <div className="cart-item-quantity"><p>{itemWithCount.count}</p></div>
            </div>
            <div className="cart-quantity-info">
                <button
                    className="shopping-cart-button"
                    id={"shopping-cart-" + itemWithCount.bookobject.Book + "-decrease-count"}
                    title={"Decrease order of copies of " + itemWithCount.bookobject.Book + " by 1"}
                    type="button"
                    onClick={decreaseItemCountByOne}
                >-</button>
                <button
                    className="shopping-cart-button"
                    id={"shopping-cart-" + itemWithCount.bookobject.Book + "-increase-count"}
                    title={"Increase order of copies of " + itemWithCount.bookobject.Book + " by 1"}
                    type="button"
                    onClick={increaseItemCountByOne}
                >+</button>
            </div>
        </div>
        )
}
export default SingleCartItem