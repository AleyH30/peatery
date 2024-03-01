import React from "react";

const FoodImageCard = (props) => {
    return (
        <div className="image-card" onClick={props.function}>
            <div className="image-card-img-container">
                <img src={props.image} alt=""/>
            </div>
            <p className="image-card-name">{props.name}</p>
        </div>
    )
}

export default FoodImageCard