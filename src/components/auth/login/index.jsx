import { Button, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";

function Login(props) {
  const { setEmail, setPassword } = props;
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", fontSize: "25px" }}>
        Войти
      </Typography>
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="email"
        variant="outlined"
        placeholder="Введите ваш email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="passowrd"
        variant="outlined"
        placeholder="Введите ваш password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography sx={{ my: 2, textAlign: "end" }} variant="body1">
        Забыли пароль?
      </Typography>
      <Button
        sx={{ my: 2, width: "80%", margin: "0 auto" }}
        type="submit"
        variant="contained"
      >
        Отправить
      </Button>
      <Typography variant="body1" sx={{ textAlign: "end", mt: 2 }}>
        Регистрация
      </Typography>
    </>
  );
}

export default Login;
