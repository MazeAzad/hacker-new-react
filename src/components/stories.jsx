import { useGlobal } from "../context/context-api";
const Stories = () => {
    const { hits, handleRemove } = useGlobal();
    return (
        <div className="storiesContainer">
            {hits.map((story) => {
                const { author, objectID, points, title, url, num_comments } = story;
                return <div className="story" key={objectID}>
                    <h3 className="title">{title}</h3>
                    <p className="info">{points ? `${points} by ${author}` : `${author}`} | {num_comments ? `${num_comments} commonts` : ""}</p>
                    <div className="userAction">
                        <span className="remove" onClick={() => handleRemove(objectID)}> remove</span>
                        <span className="readMore">
                            <a href={url} target="_blank">read more</a>
                        </span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Stories;