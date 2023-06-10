import React from "react";
import cl from "../../components/FrontFilmCard/FrontFilmCard.module.css";
import logo from "./logo.png";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ position: "relative", zIndex: "2" }}>
      <Box
        className={`${cl.fromBlack} ${cl.bgGradientToTop}`}
        style={{
          borderRadius: "0px",
          width: "100%",
          height: "20vh",
          position: "relative",
          zIndex: "10",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "black",
          paddingBottom: "50px",
        }}
      >
        <Image src={logo} width={130} height={45} alt="logo" />
        <Box
          sx={{
            display: "flex",
            columnGap: "15px",
            marginTop: "20px",
          }}
        >
          <Link
            href={"https://www.facebook.com/evgeniy.pivovarov.9"}
            target={"_blank"}
          >
            <FacebookIcon
              sx={{ color: "white", width: "30px", height: "30px" }}
            ></FacebookIcon>
          </Link>
          <Link href={"https://t.me/evgenyoh"} target={"_blank"}>
            <TelegramIcon
              sx={{ color: "white", width: "30px", height: "30px" }}
            ></TelegramIcon>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/yauheni-pivavarau-b5665116a/"}
            target={"_blank"}
          >
            <LinkedInIcon
              sx={{ color: "white", width: "30px", height: "30px" }}
            ></LinkedInIcon>
          </Link>
        </Box>
        <Typography
          sx={{
            color: "lightgray",
            paddingTop: "30px",
            fontSize: "13px",
            fontWeigth: "600",
            width: "100%",
            textAlign: "center",
          }}
        >
          ⓒ 2023 Rubical. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
