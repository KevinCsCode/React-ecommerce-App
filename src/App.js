import { useState,useEffect } from 'react';
import './App.css';
import ItemGallery from './components/itemgallery';
import SiteHeader from './components/siteheader';
import ShoppingCartButton from './components/shoppingcartbutton';
import myBooksDetails from './db.json'
import myCountryList from './shipping-costs.json'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import SearchBar from './components/searchbar';
import OpenSearchBarBtn from './components/opensearchbar';
import { filterBookArray } from './calculations/filtermethods';
import { GetTotalPriceGoodsOnly } from './calculations/pricingcalculations'
import FinalSaleInvoice from './components/finalsaleinvoice';

function App() {
    const [bookList, setBookList] = useState([]);
    const [bookSelected, setBookSelected] = useState(false);
    const [countOfItems, setCountOfItems] = useState([]);
    const [isItemPriceDetailsShown, setIsItemPriceDetailsShown] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [shoppingCartHover, setShoppingCartHover] = useState(false);
    const [activeStar, setActiveStar] = useState(-1);
    const [filterType, setFilterType] = useState('');
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [userAddress, setUserAddress] = useState({ "addressLine1": "", "addressLine2": "", "townCity": "", "state":"", "eircode": "", "country": "" });
    const [countryList, setCountryList] = useState(myCountryList.map((ctry) => ctry));
    const [displayFinalInvoice, setDisplayFinalInvoice] = useState(false);
    const [countryCaptured, setCountryCaptured] = useState('');
    const [totalValue, setTotalValue] = useState(null);
    const [acceptPayment, setAcceptPayment] = useState(true);

    useEffect(() => {
        let myBkDtls = filterBookArray(filterType, searchTerm,activeStar, myBooksDetails);
        if (Array.isArray(myBkDtls)) {
            setBookList(myBkDtls.map((btn) => btn))
        } else {
            setBookList(Array(myBkDtls).map((btn) => btn))
        }
    }, [searchTerm, filterType, activeStar])

    useEffect(() => setIsItemPriceDetailsShown(myBooksDetails.map(
        (btn) => Object({ "book": btn.Book, display:"none" }))
    ), [])

    useEffect(() => setCountOfItems(myBooksDetails.map(
        (btn) => Object({ "bookobject": btn, "count": 0 }))
    ), [])

    useEffect(() =>
    {
        let myCountryObject = [...countryList].find((item) => item.Country === countryCaptured);
        let percentageIncreaseForShipping = 1;
        let totalGoodsValue = GetTotalPriceGoodsOnly(countOfItems);
        if (myCountryObject) {
            let postalRegion = myCountryObject.PostalRegion
            switch (postalRegion) {
                case "Ireland": percentageIncreaseForShipping = 0.085; break;
                case "UK": percentageIncreaseForShipping = 0.10; break;
                case "North America": percentageIncreaseForShipping = 0.22; break;
                case "Continental Europe": percentageIncreaseForShipping = 0.145; break;
                default: percentageIncreaseForShipping = 0.3; break;
            }
            setTotalValue(parseFloat(totalGoodsValue * (1 + percentageIncreaseForShipping)).toFixed(2));
        }
    }, [countryCaptured, countOfItems, countryList])
    
  return (
      <div className="App">
          <SiteHeader />
          <div className="sub-header">
              <div className="social-links">
                  <a href="https://www.linkedin.com/company/wordsworth-editions-ltd/"><FaLinkedinIn className="social-icon" /></a>
                  <a href="https://www.facebook.com/wordsworth.editions/"><FaFacebookF className="social-icon" /></a>
                  <a href="https://twitter.com/WordsworthEd"><FaTwitter className="social-icon" /></a>
                  <a href="https://www.instagram.com/wordsworth_editions/"><FaInstagramSquare className="social-icon" /></a>
              </div>
          </div>
          <div className="search-functionality">
            <OpenSearchBarBtn
                openSearchBar={openSearchBar}
                setOpenSearchBar={setOpenSearchBar}
                filterType={filterType}
                setFilterType={setFilterType}/>
            <SearchBar
                  openSearchBar={openSearchBar}
                  filterType={filterType}
                  setFilterType={setFilterType}
                  activeStar={activeStar}
                  setActiveStar={setActiveStar}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  bookList={bookList}
                  setBookList={setBookList} />
          </div>
          <div>
              {displayFinalInvoice &&
                  <FinalSaleInvoice userAddress={userAddress}
                      setUserAddress={setUserAddress}
                      countryList={countryList}
                      countryCaptured={countryCaptured}
                      setCountryCaptured={setCountryCaptured}
                      countOfItems={countOfItems}
                      displayFinalInvoice={displayFinalInvoice}
                      setDisplayFinalInvoice={setDisplayFinalInvoice}
                      totalValue={totalValue}
                      acceptPayment={acceptPayment}
                      setAcceptPayment={setAcceptPayment} />}
          </div>
          <div>
              <ShoppingCartButton
                  showShoppingCart={showShoppingCart}
                  setShowShoppingCart={setShowShoppingCart}
                  shoppingCartHover={shoppingCartHover}
                  setShoppingCartHover={setShoppingCartHover}
                  countOfItems={countOfItems}
                  setCountOfItems={setCountOfItems}
                  setDisplayFinalInvoice={setDisplayFinalInvoice}
              />
              <ItemGallery
                  bookList={bookList}
                  bookSelected={bookSelected}
                  setBookSelected={setBookSelected}
                  countOfItems={countOfItems}
                  setCountOfItems={setCountOfItems}
                  isItemPriceDetailsShown={isItemPriceDetailsShown}
                  setIsItemPriceDetailsShown={setIsItemPriceDetailsShown}
              />
          </div>
    </div>
  );
}

export default App;