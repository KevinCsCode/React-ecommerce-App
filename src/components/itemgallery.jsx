import SingleItem from './singleitem'
const ItemGallery = ({ bookList, bookSelected, setBookSelected, countOfItems,setCountOfItems,isItemPriceDetailsShown,setIsItemPriceDetailsShown }) => {

    return (<div className="item-gallery">
        {bookList.map((item) => (
            <SingleItem
                key={"id-"+item.Book}
                book={item}
                bookSelected={bookSelected}
                setBookSelected={setBookSelected}
                countOfItems={countOfItems}
                setCountOfItems={setCountOfItems}
                isItemPriceDetailsShown={isItemPriceDetailsShown}
                setIsItemPriceDetailsShown={setIsItemPriceDetailsShown}
            />
        ))}
    </div>)
}
export default ItemGallery