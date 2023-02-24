import ShoppingCart from './shoppingcart'
import CartButtonDisplay from './cartbuttondisplay'

const ShoppingCartButton = ({ showShoppingCart,
    setShowShoppingCart,
    shoppingCartHover,
    setShoppingCartHover,
    countOfItems,
    setCountOfItems,
    displayFinalInvoice,
    setDisplayFinalInvoice }) => {

    const displayEventShoppingCart = () => {
        let rule=false;
        showShoppingCart === true ? rule = false : rule = true;
        setShowShoppingCart(rule);
    }
    const onHoverCartButton = () => {
        setShoppingCartHover(true);
    }
    const onLeaveCartButton = () => {
        setShoppingCartHover(false);
    }

    return (
        <div>
            <button
                id="shopping-cart-button"
                title="shopping cart button"
                type="button"
                onClick={displayEventShoppingCart}
                onMouseEnter={onHoverCartButton}
                onMouseLeave={onLeaveCartButton}
            >
                <CartButtonDisplay
                    shoppingCartHover={shoppingCartHover}
                    showShoppingCart={showShoppingCart}
                />
            </button>
            {
                showShoppingCart &&
                <ShoppingCart
                    countOfItems={countOfItems}
                    setCountOfItems={setCountOfItems}
                    displayFinalInvoice={displayFinalInvoice}
                    setDisplayFinalInvoice={setDisplayFinalInvoice}
                />
            }
        </div>)
}

export default ShoppingCartButton