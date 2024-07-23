import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import Login from "./login";
import Register from "./register";

const AuthComponent = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="root">
      <form className="form" onSubmit={handleClick}>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          maxWidth={600}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          {location.pathname === "/login" ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === "/register" ? (
            <Register />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthComponent;
