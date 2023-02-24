const TextFilterItem = ({ filterByType,
    searchTerm,
    setSearchTerm }) =>
{
    const handleEnterKeyPress = (event) => {
        if (event.key !== "enter") {
            setSearchTerm(event.target.value);
        }
    }
    return (
        <div className="text-filter-item">
            <form onChange={(event) => handleEnterKeyPress(event)}>
                {<input
                    id="text-filter-value"
                    type="text"
                    placeholder={filterByType === "author" ? "Enter author's name" : "Enter book title"}
                    ></input>}
            </form>
        </div>
        )
}

export default TextFilterItem