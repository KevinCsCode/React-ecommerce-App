import StarRating from './starratingfilter'
import TextFilterItem from './textfilteritem'

const SearchBar = ({ openSearchBar,
    filterType,
    setFilterType,
    activeStar,
    setActiveStar,
    searchTerm,
    setSearchTerm,
    bookList,
    setBookList }) =>
{
    const handleFilterTypeSubmit = (event) => {
        setFilterType(event.target.value);
    }
    const handleClearFilterButton = () => {
        setFilterType('');
        setSearchTerm('');
        setActiveStar(-1);
    }

    return (
        <div className="filter-by-list" style={{visibility: openSearchBar? 'visible':'hidden'}}>
            <div className="filter-list-container" onChange={(e) => handleFilterTypeSubmit(e)}>
                <label htmlFor="filter-types">Filter type: </label>
                <select id="filter-types" name="filter-types" defaultValue="">
                    <option value="">---</option>
                    <option value="filter-by-rating">By Rating</option>
                    <option value="filter-by-author">By Author</option>
                    <option value="filter-by-title">By Title</option>
                </select>
            </div>
            {filterType === "filter-by-rating" &&
                <StarRating
                    activeStar={activeStar}
                    setActiveStar={setActiveStar} />}
            {filterType === "filter-by-author" &&
                <TextFilterItem
                    filterByType={"author"}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} />}
            {filterType === "filter-by-title" &&
                <TextFilterItem
                    filterByType={"title"}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} />}
            {filterType !== "" &&
                <button
                    id="filter-reset-btn"
                    title="Clear all filters from selection"
                    type="button"
                    onClick={handleClearFilterButton}
                >Clear Filters?</button>}
        </div>
        )
}

export default SearchBar