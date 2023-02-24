// JavaScript source code
export function GetTotalPriceGoodsOnly(arrSelectedItems) {
    let totalPrice = 0;
    if (arrSelectedItems && Array.isArray(arrSelectedItems) && arrSelectedItems.length > 0) {
        let arrCostPerItem = arrSelectedItems.map((item)=>item.bookobject.Price * item.count)
        totalPrice = parseFloat(arrCostPerItem.reduce((item, sum) => (sum + item), 0)).toFixed(2);
    }
    return totalPrice;
}

export function GetTotalPriceShipping (destAddress) {
    return 0;
}