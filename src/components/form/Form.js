import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const initialValues = {
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, "Username must be atleast more than 2 charachters ")
      .max(30)
      .required("Please enter your name"),
    userAge: Yup.number().required("Please enter your age"),
    userEmail: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    userPassword: Yup.string().required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("userPassword")], "Passwords must match")
      .required("Please re-enter your password"),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values, "These are my values");
      action.resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          maxWidth: "content-fit",
          width: "400px",
          margin: "20px",
          padding: "20px",
          height: "content-fit",
          backgroundColor: "#F0F0F0 ",
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginBottom: "20px", fontWeight: "bold" }}
            >
              Basic User Details
            </Typography>
            <TextField
              error={errors.userName && touched.userName ? true : false}
              name="userName"
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
              sx={{ margin: "10px" }}
              onChange={handleChange}
              value={values.userName}
              helperText={
                errors.userName && touched.userName ? (
                  <p>{errors.userName}</p>
                ) : (
                  ""
                )
              }
            />
            <TextField
              error={errors.userAge && touched.userAge ? true : false}
              name="userAge"
              id="outlined-basic"
              label="Enter your age"
              placeholder="Enter your age"
              variant="outlined"
              sx={{ margin: "10px" }}
              onChange={handleChange}
              value={values.userAge}
              helperText={
                errors.userAge && touched.userAge ? <p>{errors.userAge}</p> : ""
              }
            />
            <TextField
              error={errors.userEmail && touched.userEmail ? true : false}
              name="userEmail"
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              sx={{ margin: "10px" }}
              onChange={handleChange}
              value={values.userEmail}
              helperText={
                errors.userEmail && touched.userEmail ? (
                  <p>{errors.userEmail}</p>
                ) : (
                  ""
                )
              }
            />
            <TextField
              error={errors.userPassword && touched.userPassword ? true : false}
              name="userPassword"
              id="outlined-basic"
              label="Enter your password"
              variant="outlined"
              sx={{ margin: "10px" }}
              onChange={handleChange}
              value={values.userPassword}
              helperText={
                errors.userPassword && touched.userPassword ? (
                  <p>{errors.userPassword}</p>
                ) : (
                  ""
                )
              }
            />
            <TextField
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              name="confirmPassword"
              id="outlined-basic"
              label="Confirm your password"
              variant="outlined"
              sx={{ margin: "10px" }}
              onChange={handleChange}
              value={values.confirmPassword}
              helperText={
                errors.confirmPassword && touched.confirmPassword ? (
                  <p>{errors.confirmPassword}</p>
                ) : (
                  ""
                )
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ margin: "10px", width: "200px", marginLeft: "95px" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Form;
