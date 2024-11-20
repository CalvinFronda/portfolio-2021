import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const PREFIX = "ContactForm";

const classes = {
  root: `${PREFIX}-root`,
  formContainer: `${PREFIX}-formContainer`,
  contactText: `${PREFIX}-contactText`,
  formField: `${PREFIX}-formField`,
  submitButton: `${PREFIX}-submitButton`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
  },
  [`& .${classes.formContainer}`]: {
    width: "100%",
    maxWidth: "600px",
    padding: "24px",
    backgroundColor: "#3C3B3B", // Form background
    borderRadius: "4px",
  },
  [`& .${classes.contactText}`]: {
    color: "#FFFFFF",
    marginBottom: "24px",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  [`& .${classes.formField}`]: {
    marginBottom: "24px",
    "& .MuiInputBase-root": {
      color: "#FFFFFF",
    },
    "& .MuiInputLabel-root": {
      color: "#FFFFFF",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", // Removes the box border
        borderBottom: "1px solid #FFFFFF", // Adds a bottom border
        borderRadius: 0, // Square look
      },
      "&:hover fieldset": {
        borderBottom: "1px solid #AAAAAA", // Lighter hover effect
      },
      "&.Mui-focused fieldset": {
        borderBottom: "2px solid #FFFFFF", // Focus effect
      },
    },
  },
  [`& .${classes.submitButton}`]: {
    color: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    color: "#2F2D2D",
    fontWeight: "bold",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
  },
}));

const ContactForm = () => {
  const [formContent, setFormContent] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formContent,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
        setFormContent({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormContent((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <StyledGrid container className={classes.root}>
      <div className={classes.formContainer}>
        <Typography variant="body1" className={classes.contactText}>
          If you want to chat about some of my work or if you have a project
          that you think I would be interested in, send me a message! I'll be
          sure to get back as soon as possible.
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            id="from_name"
            type="text"
            label="Name"
            value={formContent.from_name}
            onChange={handleInputChange}
            variant="outlined"
            className={classes.formField}
          />
          <TextField
            fullWidth
            id="from_email"
            type="email"
            label="Email"
            value={formContent.from_email}
            onChange={handleInputChange}
            variant="outlined"
            className={classes.formField}
          />
          <TextField
            fullWidth
            id="message"
            type="text"
            label="Message"
            value={formContent.message}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
            className={classes.formField}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </div>
    </StyledGrid>
  );
};

export default ContactForm;
