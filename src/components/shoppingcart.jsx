import { FaShoppingCart } from "react-icons/fa"
import SingleCartItem from './singlecartitem'
import { GetTotalPriceGoodsOnly } from './../calculations/pricingcalculations'

const ShoppingCart = ({ countOfItems,
    setCountOfItems,
    setDisplayFinalInvoice}) => {
    let totalGoodsValue = GetTotalPriceGoodsOnly(countOfItems)

    const handlePressSubmitButton = () => {
        setDisplayFinalInvoice(true);
    }

    return (
        <div className="shopping-cart">
            <div className="shopping-cart-icon-div"><FaShoppingCart className="cart-icon"/></div>
            <div className="cart-article-row">
                <div className="cart-item-name-price-quantity">
                    <div className="cart-item-name cart-header"><p>Item</p></div>
                    <div className="cart-item-price cart-header"><p>Price per Unit</p></div>
                    <div className="cart-item-quantity cart-header"><p>Number of Units</p></div>
                </div>
                <div className="cart-quantity-info quantity-header"></div>
            </div>
            {
                countOfItems.filter((item) => item.count > 0).map((item) => (
                    <SingleCartItem key={"cart-article-" + item.bookobject.Book} itemWithCount={item} countOfItems={countOfItems} setCountOfItems={setCountOfItems} />
                    ))
            }
            <div className="cart-totals-section">
                <div className="pre-shipping-total-txt"><p>Total (before shipping)</p></div>
                <div className="pre-shipping-total-value"><p>{"\u20AC" + parseFloat(totalGoodsValue).toFixed(2)}</p></div>
            </div>
            <button
                id="checkout-button"
                title="Proceed to checkout button"
                type="button"
                disabled={countOfItems.every((item) => item.count === 0)}
                onClick={handlePressSubmitButton}
            >Proceed to Checkout?</button>
        </div>
        )
}

export default ShoppingCart