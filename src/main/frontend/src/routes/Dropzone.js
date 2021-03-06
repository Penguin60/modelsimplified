import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function Dropzone({ cardProfileId, cardName }) {
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
  
      axios.post(
        `api/v1/card-profile/${cardProfileId}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
      ).then(() => {
        console.log("file uploaded succesfully")
      }).catch(err => {
        console.log(err);
      })
    }, []);

    const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the image here ...</p> :
            <>
              <h3>{cardName}</h3>
            </>
        }
      </div>
    )
  }

  export default Dropzone;