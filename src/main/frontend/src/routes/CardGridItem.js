import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Dropzone from "./Dropzone";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CardGridItem = ({ cardProfile, index }) => {
  const [open, setOpen] = React.useState(false);

  const buyIt = () => {
    setOpen(true);
    const formData = new FormData();
    formData.append("cardName", cardProfile.cardName);
    axios.post("api/v1/purchase/sendPurchaseEmail", formData).then((res) => {
      console.log("It Works!");
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div key={index} className="productDiv">
      {cardProfile.cardProfileId ? (
        <img
          src={`${process.env.REACT_APP_API_URL || ""}/api/v1/card-profile/${
            cardProfile.cardProfileId
          }/image/download`}
        />
      ) : null}
      {/* todo: Profile image */}
      <br />
      <br />
      <Dropzone {...cardProfile} />
      <br />
      <Button
        color="primary"
        className="buyButton"
        onClick={buyIt}
        variant="contained"
      >
        Buy It Now!
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thanks For Your Purchase"
        action={action}
      />
    </div>
  );
};

export default CardGridItem;
