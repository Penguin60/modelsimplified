import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import CardGridItem from './CardGridItem';

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

    return (
      <div class = "grid-container"> 
      {
          cardProfiles.map((cardProfile, index) => {
            return (
              <CardGridItem cardProfile={cardProfile} index={index} />
            )
      })
    }
    </div>
    )
  };

  export default CardProfiles;