"use client";

import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const SignInBtn: FC = () => {
  return (
    <Link href={"/Zenix_Film/auth-page"} style={{ justifySelf: "flex-end" }}>
      <Box
        sx={{
          flexGrow: 0,
          color: "lightgray",
          padding: { xs: "17px 5px 0 0", lg: "24px 40px 0 0" },
          position: "relative",
          zIndex: "100",
        }}
      >
        <Button
          onClick={() => {}}
          disableRipple={true}
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "lightgray",
            transition: "color 0.1s ease-in",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "flex" },
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            SIGN IN
          </Typography>
          <LoginIcon sx={{ display: { xs: "flex", sm: "none" } }}></LoginIcon>
        </Button>
      </Box>
    </Link>
  );
};

export default SignInBtn;
