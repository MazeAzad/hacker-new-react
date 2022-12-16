import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGlobal } from "../context/context-api";
const Pagination = () => {
    const { page, nbPages, handlePage, loading } = useGlobal();
    localStorage.setItem('page', page);
    localStorage.setItem('nbPages', nbPages);
    return (
        <div className="paginationContainer">
            <button className="paginationBtn prevBtn" disabled={loading} onClick={() => { handlePage("prev") }}><GrLinkPrevious /></button>
            <span>page {page + 1} of {nbPages}</span>
            <button className="paginationBtn nextBtn" disabled={loading} onClick={() => { handlePage("next") }}><GrLinkNext /></button>
        </div>
    )
}

export default Pagination;