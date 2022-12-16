import { useGlobal } from "../context/context-api";
const Search = () => {
    const { query, handleSearch } = useGlobal();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    localStorage.setItem('query', query);
    return (
        <div className="searchContainer">
            <form className="searchForm" onSubmit={handleSubmit}>
                <label htmlFor="search" className="searchLabel">
                    search Hacker news
                </label>
                <input type="text" id="search" value={query} onChange={(e) => { handleSearch(e.target.value) }} />
            </form>
        </div>
    )
}

export default Search;