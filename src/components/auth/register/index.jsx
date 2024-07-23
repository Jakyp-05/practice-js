import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

function Register() {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", fontSize: "25px" }}>
        Регистрация
      </Typography>
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
      />
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="email"
        variant="outlined"
        placeholder="Введите ваш email"
      />
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="Пароль"
        variant="outlined"
        placeholder="Введите ваше пароль"
      />
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="Пароль"
        variant="outlined"
        placeholder="Повторите ваше пароль"
      />
      <FormControlLabel control={<Checkbox />} label="Согласить" />
      <Button
        sx={{ my: 2, width: "80%", margin: "0 auto" }}
        type="submit"
        variant="contained"
      >
        Отправить
      </Button>
    </>
  );
}

export default Register;
