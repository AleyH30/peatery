import React, {useState} from 'react';
import './BiggerImageGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faXmark } from '@fortawesome/free-solid-svg-icons'

const BiggerImageGallery = (props)=> {
    const [newIndex, setNewIndex] = useState(props.index);
    const [newImage, setNewImage] = useState(props.image);

    const nextIndex = () => {
        if (newIndex === props.gallery.length - 1){
            setNewIndex(0);
            setNewImage(props.gallery[0].img)
        }
        else{
            setNewIndex(newIndex + 1);
            setNewImage(props.gallery[newIndex + 1].img)
        }
    }

    const prevIndex = () => {
        if (newIndex === 0){
            setNewIndex(props.gallery.length - 1)
            setNewImage(props.gallery[props.gallery.length - 1].img)
        }
        else{
            setNewIndex(newIndex - 1);
            setNewImage(props.gallery[newIndex - 1].img)
        }
        
    }

    return(
        <div className="bigger-image-gallery" >
            <div className="bg-closeout-btn" onClick={props.function}></div>
            <button className="x-closeout-btn" onClick={props.function}><FontAwesomeIcon icon={faXmark} /></button>
            <div className="bigger-image-container">
                <img  src={newImage} alt=""/>
            </div>
            <div className='btns'>
                <button className='back-btn' onClick={()=> prevIndex()}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
                <button className='next-btn' onClick={()=> nextIndex()}><FontAwesomeIcon icon={faArrowRightLong} /></button>
            </div>
        </div>
        
    )
}

export default BiggerImageGallery