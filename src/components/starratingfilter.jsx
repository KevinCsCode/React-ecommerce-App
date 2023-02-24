import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ activeStar,setActiveStar}) => {
    const handleStarClick = (index) => {
        setActiveStar(index);
    };
    let a1 = [...new Array(5)]
    console.log(a1.map((item,index) => [item,index]));
    return (
        <div className="star-rating-container">
            <div style={{display: "inline-flex",
                        position: "relative",
                        textAlign: "left"}}>
                {a1.map((item,index) => (
                    <div
                        position="relative"
                        key={"star-item-" + index}
                        style={{ cursor:"pointer" }}
                        onClick={() => handleStarClick(index)}
                    >
                        <div
                            style={{ width: index <= activeStar ? "100%" : "0%", overflow: "hidden", position: "absolute" }}
                        >
                            <FaStar
                                className="full-star"
                            />
                        </div>
                        <div>
                            <FaRegStar
                                className="empty-star" />
                        </div>
                    </div>
                    ))}
            </div>
       </div>
        )
}

export default StarRating