import React, { useState } from 'react';
import  Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { withStyles } from "@mui/styles";
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2em',
        marginBottom: '72px',
        backgroundColor: '#443F3F',
    },
    formStyles: {
        width: '100%',
    },
    formSpacing: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    contactFormText: {
        color: 'white',
    },
    submitFormButton: {
        color: 'black',
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },
})(TextField);

const ContactFrom = () => {
    const classes = useStyles();
    const [formContent, setFormContent] = useState({
        from_name: '',
        from_email: '',
        message: '',
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
            .then((result) => {
                setFormContent({
                    from_name: '',
                    from_email: '',
                    message: '',
                });
            })
            .catch((err) => console.error(err));
    };

    const handleInputChange = (event) => {
        let type = event.target.id;
        setFormContent((prevState) => ({
            ...prevState,
            [type]: event.target.value,
        }));
    };

    return (
        (<Grid container direction="row" spacing={4} className={classes.root}>
            <Typography className={classes.contactFormText}>
                If you want to chat about some of my work or if you have a
                project that you think I would be interested in, send me a
                message! I'll be sure to get back as soon as possible
            </Typography>
            <form className={classes.formStyles} onSubmit={handleFormSubmit}>
                <Grid item xs={12}>
                    <CssTextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['from_name']}
                        id="from_name"
                        type="text"
                        label="Name"
                        className={classes.formSpacing}
                        InputProps={{
                            classes: {
                                input: classes.contactFormText,
                                label: classes.contactFormText,
                            },
                        }}
                        InputLabelProps={{
                            className: classes.contactFormText,
                            focused: classes.contactFormText,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['from_email']}
                        id="from_email"
                        type="email"
                        label="Email"
                        className={classes.formSpacing}
                        InputProps={{
                            classes: {
                                input: classes.contactFormText,
                                label: classes.contactFormText,
                            },
                        }}
                        InputLabelProps={{
                            className: classes.contactFormText,
                            focused: classes.contactFormText,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['message']}
                        id="message"
                        type="text"
                        label="Message"
                        multiline
                        rows={4}
                        className={classes.formSpacing}
                        InputProps={{
                            classes: {
                                input: classes.contactFormText,
                                label: classes.contactFormText,
                            },
                        }}
                        InputLabelProps={{
                            className: classes.contactFormText,
                            focused: classes.contactFormText,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="flex-end"
                    style={{ marginTop: '30px' }}
                >
                    <Button
                        variant="contained"
                        className={classes.submitFormButton}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Grid>
            </form>
        </Grid>)
    );
};

export default ContactFrom;
