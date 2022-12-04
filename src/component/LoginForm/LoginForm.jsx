import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./LoginForm.module.css";
import { Stack } from "@mui/material";
function LoginForm({ deleteFunc }) {
  return (
    <Box spacing="10px" component="form" noValidate autoComplete="off">
      <div className={styles.deletebtn} onClick={(e) => deleteFunc(e)}>
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </div>
      <Typography
        style={{
          marginTop: "60px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        <Stack
          direction="row"
          style={{ justifyContent: "center", display: "flex" }}
          spacing={3}
        >
          <Avatar sx={{ width: 50, height: 50 }} />
        </Stack>
        Sign Up
      </Typography>

      <TextField
        sx={{
          marginBottom: "20px",
          width: "100%",
          alignItems: "center",
          display: "flex",
          "& .MuiInputBase-root": {
            height: 40,
          },
        }}
        id="outlined-error"
        placeholder=" your name"
        type="text"
      />

      <TextField
        sx={{
          marginBottom: "20px",
          width: "100%",
          alignItems: "center",
          display: "flex",
          "& .MuiInputBase-root": {
            height: 40,
          },
        }}
        id="outlined-error"
        placeholder="yours@example.com"
        type="email"
      />
      <TextField
        sx={{
          marginBottom: "10px",
          width: "100%",
          alignItems: "center",
          display: "flex",
          "& .MuiInputBase-root": {
            height: 40,
          },
        }}
        id="outlined-error"
        placeholder=" your password"
        type="password"
      />

      <Button
        sx={{
          width: 226,
          margin: 6,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        fullWidth
        variant="contained"
      >
        Create Account
      </Button>

      <div className={styles.content}>
        <Typography className={styles.or}>or</Typography>
        <Typography className={styles.createAccount}>
          Create Account with
        </Typography>
      </div>
      <Box className={styles.myIcons}>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-google"></i>
      </Box>
      <Typography className={styles.createAccount}>
        Aready have an account? <span>LOGIN</span>
      </Typography>
    </Box>
  );
}

export default LoginForm;
