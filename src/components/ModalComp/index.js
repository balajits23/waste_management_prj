import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const ModalComponent = ({
  open,
  onClose,
  title,
  content,
  img1 = "",
  img2 = "",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ color: "#000", fontWeight: "bold" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          <img
            src={img1}
            alt={title}
            style={{
              height: "200px",
              width: "200px",
              boxShadow: "0 3px 10px #000",
            }}
          />
          <img
            src={img2}
            alt={title}
            style={{
              height: "200px",
              width: "200px",
              boxShadow: "0 3px 10px #000",
            }}
          />
        </div>
        <DialogContentText style={{ color: "#000" }}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
