const OpenSearchBarBtn = ({ openSearchBar,
    setOpenSearchBar,
    filterType,
    setFilterType }) =>
{
    const handleSearchBarClick = () => {
        setOpenSearchBar(!openSearchBar);
        if (!openSearchBar) {
            setFilterType('');
        }
    }
    return (
        <div id="open-filter-bar-btn"
            title="toggle filtering"
            onClick={handleSearchBarClick}>
            <div id="open-filter-bar-text"
            >
                <p>{openSearchBar ? "Close filter" : "Filter results"}</p>
            </div>
            <div id="open-filter-bar-arrow"></div>
        </div>
        )
}

export default OpenSearchBarBtn