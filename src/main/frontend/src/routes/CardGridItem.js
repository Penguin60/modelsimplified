import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Dropzone from './Dropzone';

const CardGridItem = ({cardProfile, index}) => {

    const buyIt = () => {
        axios.post("api/v1/purchase/sendPurchaseEmail").then(res => {
            console.log("It Works!")
        })

    }
    
    return (
        <div key={index} className='productDiv'>
            {cardProfile.cardProfileId ? <img src={`${process.env.REACT_APP_API_URL || ""}/api/v1/card-profile/${cardProfile.cardProfileId}/image/download`} /> : null}
            {/* todo: Profile image */}
            <br />
            <br />
            <Dropzone {...cardProfile} />
            <br />
            <button className='buyItNowBtn' onClick={buyIt}> Buy It Now!</button>
        </div>
    );
};

export default CardGridItem;