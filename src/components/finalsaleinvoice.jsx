import { FaWindowClose } from "react-icons/fa";
import { GetTotalPriceGoodsOnly } from './../calculations/pricingcalculations'

const FinalSaleInvoice = ({
    userAddress,
    setUserAddress,
    countryList,
    countryCaptured,
    setCountryCaptured,
    countOfItems,
    displayFinalInvoice,
    setDisplayFinalInvoice,
    totalValue,
    acceptPayment,
    setAcceptPayment
}) => {
    let totalGoodsValue = GetTotalPriceGoodsOnly(countOfItems);
    let totalGoodsValueInclShipping = null;
    let postalRegion = "Rest of World";
    let okToPay = true;

    const handleCloseButtonPress = () => {
        setDisplayFinalInvoice(false);
    }

    const handleCountryCapture = (event) => {
        setCountryCaptured(event.target.value);
        let myCtryList = [...countryList].filter((item) => item.Country === countryCaptured);
        if (myCtryList.length > 0) {
            postalRegion = myCtryList[0].PostalRegion
        }
        console.log(postalRegion);
    }

    const changeUserAddressLine = (addressLine,event) => {
        let myUpdateAddress = userAddress;
        myUpdateAddress[addressLine] = event.target.value;
        setUserAddress(myUpdateAddress);
    }

    return (
        <div className="final-sale-invoice">
            <div
                id="close-final-sale-box"
                onClick={handleCloseButtonPress}
            ><FaWindowClose /></div>
            <form className="invoice-form-inputs">
                <div>
                    <label htmlFor="address-line-country" className="address-data">Country: </label>
                    <select
                        id="address-line-country"
                        onChange={(event) => handleCountryCapture(event)}
                        required>
                        <option key="default-country-option" id="address-country-default" value="">Select</option>
                        {
                            countryList.map((item) =>
                                <option
                                    key={"item-country-" + item.Country}
                                    id={"address-country-selection-" + item.Country}
                                    value={item.Country}
                                >{item.Country}</option>
                            )}
                    </select>
                </div>
                {(countryCaptured && (countryList.find((item) => item.Country === countryCaptured).PostalRegion === "Ireland")) &&
                    <div>
                        <label htmlFor="address-line-eircode" className="address-data">Eircode: </label>
                        <input
                            id="address-line-eircode"
                            type="text"
                            onChange={(event) => changeUserAddressLine("eircode", event)}
                        ></input>
                </div>
                }
                <div>
                    <label htmlFor="address-line-1" className="address-data">Address Line 1: </label>
                    <input
                        id="address-line-1"
                        type="text"
                        onChange={(event) => changeUserAddressLine("addressLine1", event)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address-line-2" className="address-data">Address Line 2: </label>
                    <input
                        id="address-line-2"
                        type="text"
                        onChange={(event) => changeUserAddressLine("addressLine2", event)}
                    ></input>
                </div>
                <div>
                <label htmlFor="address-line-towncity" className="address-data">Town/City: </label>
                    <input
                        id="address-line-towncity"
                        type="text"
                        onChange={(event) => changeUserAddressLine("townCity", event)}
                        required
                    ></input>
                </div>
                {
                    (countryCaptured && (countryList.find((item) => item.Country === countryCaptured).PostalRegion === "North America")) &&
                    <div>
                        <label htmlFor="address-line-state" className="address-data">State: </label>
                        <input
                            id="address-line-state"
                            type="text"
                            onChange={(event) => changeUserAddressLine("state", event)}
                        ></input>
                    </div>
                }
            </form>
            <div className="invoice-divider" />
            <div className="final-sale-invoice-totals">
                <p>Total (before delivery)</p>
                <p>{"\u20AC" + parseFloat(totalGoodsValue).toFixed(2)}</p>
            </div>
            <div className="invoice-divider"/>
            {
                countryCaptured &&
                <div className="final-sale-invoice-totals">
                    <p>Total (inclusive of delivery)</p>
                    <p>{"\u20AC" + parseFloat(totalValue).toFixed(2)}</p>
                </div>
            }
            <div className="send-payment-btn"
                onClick={() => setAcceptPayment(!acceptPayment)}>
                <p>{acceptPayment ? "Proceed to Payment Terminal" : "OK, but you realise this is just a demo, right?"}</p>
            </div>
        </div>
    )
}

export default FinalSaleInvoice;