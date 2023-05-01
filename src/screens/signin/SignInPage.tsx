import React, { ChangeEvent, useState } from "react";
import { supabase } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useActions } from "../../hooks/useActions";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../themes/themes";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import UndoIcon from "@mui/icons-material/Undo";
import { validateEmail, validatePassword } from "../../utils/authValidation";

const SignInPage = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [isBtnVisible, setVisible] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { email, name, password } = useAuth();
  const { changePassword, changeEmail, changeName, login } = useActions();

  const makeBtnUnvisible = () => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  };

  const clearFields = () => {
    changePassword("");
    changeEmail("");
    changeName("");
  };

  const removeError = () => {
    setError("");
  };

  const changeFormToSignIn = () => {
    setSignIn(true);
    makeBtnUnvisible();
    clearFields();
    removeError();
  };

  const changeFormToSignUp = () => {
    setSignIn(false);
    makeBtnUnvisible();
    clearFields();
    removeError();
  };

  const backToMainPage = () => {
    navigate("/Zenix_Film");
  };

  const createUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });
    if (data.session && data.user) {
      clearFields();
      login();
      navigate("/Zenix_Film");
    }
    if (error) {
      setError(error.message);
    }
  };

  const signinUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setError(error.message);
    }

    if (data.session && data.user) {
      clearFields();
      login();
      navigate("/Zenix_Film");
    }
  };

  async function signInWithFacebook() {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "https://rubical.github.io/Zenix_Film/",
      },
    });
    if (data) {
      localStorage.setItem("log", "true");
    }
  }

  async function signInWithLinkedIn() {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "linkedin",
      options: {
        redirectTo: "https://rubical.github.io/Zenix_Film/",
      },
    });
    if (data) {
      localStorage.setItem("log", "true");
    }
  }

  const checkPassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!validatePassword(e.target.value)) {
      setError("Password should be at least 6 characters");
    } else {
      setError("");
    }
  };

  const checkEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!validateEmail(e.target.value)) {
      setError("Enter a valid email");
    } else {
      setError("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          position: "relative",
          width: "1000px",
          height: "600px",
          margin: "50px auto 0 auto",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Button
          onClick={backToMainPage}
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            transform: "scale(2)",
            zIndex: "300",
            padding: "0px",
            opacity: isBtnVisible ? "1" : "0",
            transition: "transform 0.3s ease-in",
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(2) rotate(-45deg)",
            },
          }}
          disableRipple={true}
        >
          <UndoIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0",
            width: "600px",
            height: "100%",
            padding: "25px",
            backgroundColor: "#1e1e1e",
            transition: "1.25s",
            color: "lightgray",
            zIndex: "100",
            left: isSignIn ? "0px" : "calc(100% - 600px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "700",
                lineHeight: "3",
                color: "lightgray",
              }}
            >
              Create Account
            </Typography>
            <Input
              onFocus={removeError}
              value={name}
              onChange={(e) => {
                changeName(e.target.value);
              }}
              sx={{
                width: "350px",
                height: "40px",
                margin: "4px 0",
                paddingLeft: "25px",
                fontSize: "13px",
                letterSpacing: "0.15px",
                border: "none",
                outline: "none",
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(31, 31, 31, 0.73)",
                color: "lightgray",
                transition: "0.25s ease",
                boxShadow: error
                  ? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
                  : "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
                "&:focus": {
                  boxShadow:
                    "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
                },
              }}
              type="text"
              placeholder="Name (optional)"
            />
            <Input
              onFocus={removeError}
              value={email}
              onChange={(e) => {
                changeEmail(e.target.value);
                checkEmail(e);
              }}
              sx={{
                width: "350px",
                height: "40px",
                margin: "4px 0",
                paddingLeft: "25px",
                fontSize: "13px",
                letterSpacing: "0.15px",
                border: "none",
                outline: "none",
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(31, 31, 31, 0.73)",
                color: "lightgray",
                transition: "0.25s ease",
                boxShadow: error
                  ? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
                  : "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
                "&:focus": {
                  boxShadow:
                    "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
                },
              }}
              placeholder="Email"
            />
            <Input
              onFocus={removeError}
              value={password}
              onChange={(e) => {
                changePassword(e.target.value);
                checkPassword(e);
              }}
              sx={{
                width: "350px",
                height: "40px",
                margin: "4px 0",
                paddingLeft: "25px",
                fontSize: "13px",
                letterSpacing: "0.15px",
                border: "none",
                outline: "none",
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(31, 31, 31, 0.73)",
                color: "lightgray",
                transition: "0.25s ease",
                boxShadow: error
                  ? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
                  : "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
                "&:focus": {
                  boxShadow:
                    "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
                },
              }}
              type="password"
              placeholder="Password"
            />
            <Typography
              sx={{ color: "rgb(192,0,0)", fontSize: "15px", height: "22.5px" }}
            >
              {error}
            </Typography>
            <Button
              onClick={() => {
                createUser();
              }}
              sx={{
                width: " 180px",
                height: "50px",
                borderRadius: "25px",
                marginTop: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1.15px",
                backgroundColor: "rgb(172,0,0)",
                color: "lightgray",
                border: "none",
                outline: "none",
                "&:hover": {
                  backgroundColor: "rgb(132,0,0)",
                },
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: " 0",
            width: "600px",
            height: "100%",
            padding: "25px",
            backgroundColor: "#1e1e1e",
            transition: "1.25s",
            color: "lightgray",
            left: isSignIn ? "0" : "calc(100% - 600px)",
            zIndex: isSignIn ? "200" : "0",
            transformOrigin: "right",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "700",
                lineHeight: "3",
                color: "lightgray",
              }}
            >
              Sign in to Website
            </Typography>
            <Box>
              <Button
                onClick={() => {
                  signInWithFacebook();
                }}
                sx={{
                  "&:hover": { backgroundColor: "rgba(59,89,152,0.3)" },
                }}
                disableRipple={true}
              >
                <FacebookIcon sx={{ color: "#3b5998" }} />
              </Button>
              <Button
                onClick={() => {
                  signInWithLinkedIn();
                }}
                sx={{ "&:hover": { backgroundColor: "rgba(0,119,181,0.3)" } }}
                disableRipple={true}
              >
                <LinkedInIcon sx={{ color: "#0077b5" }} />
              </Button>
            </Box>
            <Typography sx={{ marginTop: "30px", marginBottom: "12px" }}>
              or use your email account
            </Typography>
            <Input
              onFocus={removeError}
              value={email}
              onChange={(e) => {
                changeEmail(e.target.value);
                checkEmail(e);
              }}
              sx={{
                width: "350px",
                height: "40px",
                margin: "4px 0",
                paddingLeft: "25px",
                fontSize: "13px",
                letterSpacing: "0.15px",
                border: "none",
                outline: "none",
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(31, 31, 31, 0.73)",
                color: "lightgray",
                transition: "0.25s ease",
                boxShadow: error
                  ? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
                  : "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
                "&:focus": {
                  boxShadow:
                    "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
                },
              }}
              placeholder="Email"
            />
            <Input
              onFocus={removeError}
              value={password}
              onChange={(e) => {
                changePassword(e.target.value);
                checkPassword(e);
              }}
              sx={{
                width: "350px",
                height: "40px",
                margin: "4px 0",
                paddingLeft: "25px",
                fontSize: "13px",
                letterSpacing: "0.15px",
                border: "none",
                outline: "none",
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(31, 31, 31, 0.73)",
                color: "lightgray",
                transition: "0.25s ease",
                boxShadow: error
                  ? "inset 2px 2px 4px rgba(174, 0, 0, 0.93), inset -2px -2px 4px rgba(174, 0, 0, 0.93)"
                  : "inset 2px 2px 4px rgba(44, 44, 44, 0.73), inset -2px -2px 4px rgba(44, 44, 44, 0.73)",
                "&:focus": {
                  boxShadow:
                    "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
                },
              }}
              type="password"
              placeholder="Password"
            />
            <Typography
              sx={{ color: "rgb(192,0,0)", fontSize: "15px", height: "22.5px" }}
            >
              {error}
            </Typography>
            <Button
              onClick={() => {
                signinUser();
              }}
              sx={{
                width: " 180px",
                height: "50px",
                borderRadius: "25px",
                marginTop: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1.15px",
                backgroundColor: "rgb(172,0,0)",
                color: "lightgray",
                border: "none",
                outline: "none",
                "&:hover": {
                  backgroundColor: "rgb(132,0,0)",
                },
              }}
            >
              SIGN IN
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: " 0",
            left: isSignIn ? "calc(100% - 400px)" : " 0",
            height: "100%",
            width: "400px",
            padding: "50px",
            zIndex: "200",
            transition: "1.25s",
            backgroundColor: "#1e1e1e",
            overflow: "hidden",
            transformOrigin: "left",
            boxShadow:
              "4px 4px 10px rgba(70, 70, 70, 0.87), -4px -4px 10px rgba(70, 70, 70, 0.87)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              backgroundColor: "rgba(28, 28, 28, 0.87)",
              boxShadow:
                "inset 8px 8px 12px rgba(70, 70, 70, 0.87), inset -8px -8px 12px rgba(70, 70, 70, 0.87)",
              bottom: "-60%",
              left: isSignIn ? "calc(100% - 400px)" : "-60%",
              transition: "1.25s",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "rgba(28, 28, 28, 0.87)",
              boxShadow:
                "inset 8px 8px 12px rgba(70, 70, 70, 0.87), inset -8px -8px 12px rgba(70, 70, 70, 0.87)",
              top: "-30%",
              left: isSignIn ? "calc(100% - 400px)" : "60%",
              transition: "1.25s",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "400px",
              padding: "50px 55px",
              transition: " 1.25s",
              visibility: isSignIn ? "hidden" : "visible",
              opacity: isSignIn ? "0" : "1",
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "700",
                lineHeight: "3",
                color: "lightgray",
              }}
            >
              Welcome Back !
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                letterSpacing: "0.25px",
                textAlign: "center",
                lineHeight: "1.6",
                color: "lightgray",
              }}
            >
              To keep connected with us please login with your personal info
            </Typography>
            <Button
              onClick={() => {
                changeFormToSignIn();
              }}
              sx={{
                width: " 180px",
                height: "50px",
                borderRadius: "25px",
                marginTop: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1.15px",
                backgroundColor: "rgb(172,0,0)",
                color: "lightgray",
                border: "none",
                outline: "none",
                "&:hover": {
                  backgroundColor: "rgb(132,0,0)",
                },
              }}
            >
              SIGN IN
            </Button>
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "400px",
              padding: "50px 55px",
              transition: " 1.25s",
              visibility: isSignIn ? "visible" : "hidden",
              opacity: isSignIn ? "1" : "0",
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "700",
                lineHeight: "3",
                color: "lightgray",
              }}
            >
              Hello Friend !
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                letterSpacing: "0.25px",
                textAlign: "center",
                lineHeight: "1.6",
                color: "lightgray",
              }}
            >
              Enter your personal details and start journey with us
            </Typography>
            <Button
              onClick={() => {
                changeFormToSignUp();
              }}
              sx={{
                width: " 180px",
                height: "50px",
                borderRadius: "25px",
                marginTop: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1.15px",
                backgroundColor: "rgb(172,0,0)",
                color: "lightgray",
                border: "none",
                outline: "none",
                "&:hover": {
                  backgroundColor: "rgb(132,0,0)",
                },
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;