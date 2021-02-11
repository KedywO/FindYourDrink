import React from "react";
import './ImgModal.css';

const ImgModal = ({show, onClose,img}) => {
    if(!show){
        return null;
    }

    return (
        <div onClick={onClose} className='modalFallback'>
            <img className='modalMain' src={img} alt={`${img}`} />
        </div>
    )
}

export default ImgModal;


// <div style={{backgroundImage: `url(${img})`}} className='modalMain'>
// </div>
