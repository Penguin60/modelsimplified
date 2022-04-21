import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Dropzone from './Dropzone';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const CardProfiles = () => {

    const [cardProfiles, setCardProfiles] = useState( [] );
  
    const fetchCardProfiles = () => {
  
      axios.get("api/v1/card-profile").then(res => {
        console.log(res);
        setCardProfiles(res.data); 
      });
    };
  
    useEffect(() => {
      fetchCardProfiles();
    }, []);
  
    return cardProfiles.map((cardProfile, index) => {
  
      return (
      <div key={index}>
        {cardProfile.cardProfileId ? <img src={`${process.env.REACT_APP_API_URL || ""}/api/v1/card-profile/${cardProfile.cardProfileId}/image/download`}/> : null}
        {/* todo: Profile image */}
        <br />
        <br />
          <Dropzone {...cardProfile} />
          <br />
      </div>
      )
    })
  };

  export default CardProfiles;