import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

const Form = () => {
    const initialValues = {
        userName: '',
        userAge: 0,
        userEmail: '',
        userPassword: ''
    }

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values, "These are my values");
        },
    });

    return (
        <>
            <Box
                sx={{
                    maxWidth: 'content-fit',
                    width: '400px',
                    margin: '20px',
                    padding: '20px',
                    height: 'content-fit',
                    backgroundColor: '#F0F0F0 ',
                    textAlign: 'center',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                autoComplete="off"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5" gutterBottom sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                            Basic User Details
                        </Typography>
                        <TextField name='userName' id="outlined-basic" label="Enter your name" variant="outlined" sx={{ margin: '10px' }} onChange={handleChange} value={values.userName} />
                        <TextField name='userAge' id="outlined-basic" label="Enter your age" placeholder='Enter your age' variant="outlined" sx={{ margin: '10px' }} onChange={handleChange} value={values.userAge} />
                        <TextField name='userEmail' id="outlined-basic" label="Enter your Email" variant="outlined" sx={{ margin: '10px' }} onChange={handleChange} value={values.userEmail} />
                        <TextField name='userPassword' id="outlined-basic" label="Enter your password" variant="outlined" sx={{ margin: '10px' }} onChange={handleChange} value={values.userPassword} />
                        <TextField id="outlined-basic" label="Confirm your password" variant="outlined" sx={{ margin: '10px' }} />
                        <Button type='submit' variant="contained" sx={{ margin: '10px', width: '200px', marginLeft: '95px' }}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Form