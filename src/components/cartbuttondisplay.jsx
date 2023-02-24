import { FaShoppingCart } from "react-icons/fa"

const CartButtonDisplay = ({ shoppingCartHover,
    showShoppingCart }) => {
    return (
        <div>
            {/*<FaShoppingCart className="cart-icon" style={{"visibility": ((!shoppingCartHover)? "hidden":"visible")}} />*/}
            {/*<p style={{ "visibility": (shoppingCartHover && showShoppingCart ? "hidden" : "visible")}}>View shopping cart</p>*/}
            {/*< p style={{ "visibility": (shoppingCartHover && (!showShoppingCart) ? "hidden" : "visible")}}>Hide shopping cart</p>*/}
            {shoppingCartHover ? (
                showShoppingCart ?
                    (<p>Hide shopping cart</p>)
                    : (<p>View shopping cart</p>)
            )
                : (<FaShoppingCart className="cart-icon" />)
            }
            {/*{displayViewCartText? (<p>View shopping cart</p>):null}*/}
            {/*{displayHideCartText? (<p>Hide shopping cart</p>):null}*/}
        </div>
    )
    
}

export default CartButtonDisplay