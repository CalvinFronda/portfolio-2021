import React, { useState } from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    contactFormText: {
        color: 'white',
    },
    submitFormButton: {},
}));

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
                console.log(result);
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
        <Grid container direction="row" spacing={4} className={classes.root}>
            <Typography className={classes.contactFormText}>
                If you wanted to chat about some of my work or if you had a
                project that you think I would be interested in send me a
                message! I'll be sure to get back as soon as possible
            </Typography>
            <form className={classes.formStyles} onSubmit={handleFormSubmit}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['from_name']}
                        id="from_name"
                        type="text"
                        label="Name"
                        className={classes.contactFormText}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['from_email']}
                        id="from_email"
                        type="email"
                        label="Email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        onChange={handleInputChange}
                        value={formContent['message']}
                        id="message"
                        type="text"
                        label="Message"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid
                    item
                    container
                    justify="flex-end"
                    style={{ marginTop: '30px' }}
                >
                    <Button type="submit">Submit</Button>
                </Grid>
            </form>
        </Grid>
    );
};

export default ContactFrom;
