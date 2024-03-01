import React, {useState, useEffect} from "react";
import './FoodGallery.css';
import FoodImages from "./0Components/FoodGalleryImages";
import FoodImageCard from "./0Components/FoodImageCard";
import BiggerImageGallery from "./0Components/BiggerImageGallery";



const FoodGallery = () => {
    const [gallery, setGallery] = useState(false);
    const [bigImage, setBigImage] = useState();
    const [index, setIndex] = useState();

    const OpenCloseGallery = (image, index) => {
        if (gallery === false){
            setGallery(true);
            setBigImage(image);
            setIndex(index)
        }
        else if (gallery === true){
            setGallery(false);
        }
    }

    useEffect(() => {
        document.body.style.overflow = gallery ? "hidden" : "unset";
      }, [gallery]);
    
    return (
        <div className="food-gallery">
            <h1>A Little Taste...</h1>
            <div className="food-gallery-container">
                {FoodImages.map((image, index) => {
                    return (
                        <FoodImageCard key={index} name={image.name} image={image.img} function={()=>OpenCloseGallery(image.img, index)}/>
                    )
                })}
                {gallery? <BiggerImageGallery image={bigImage} index= {index} gallery={FoodImages} function={()=>OpenCloseGallery()} />: null}
            </div>
            
        </div>
    )
}

export default FoodGallery


