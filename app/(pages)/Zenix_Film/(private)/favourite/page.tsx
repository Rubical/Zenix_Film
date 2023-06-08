"use client";

import React, { FC, useEffect } from "react";
import { useFavouriteFilms } from "../../../../hooks/useFavouriteFilms";
import { useAuth } from "../../../../hooks/useAuth";
import SideBarLeft from "../../../../components/UI/SideBar/SideBarLeft/SideBarLeft";
import NavBar from "../../../../components/UI/NavBar/NavBar";
import SideBarRight from "../../../../components/UI/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../../../components/UI/Button/SignInBtn";
import FilmCard from "../../../../components/FilmCard/FilmCard";
import cl from "./FavouritePage.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSupabaseData } from "../../../../hooks/useSupabaseData";
import { useActions } from "../../../../hooks/useActions";

const Page: FC = () => {
  const favouriteFilms = useFavouriteFilms();
  const { isLogined } = useAuth();
  const { hideFavFilmsCards } = useActions();

  useSupabaseData();

  useEffect(() => {
    window.scrollTo(0, 0);
    hideFavFilmsCards();
  }, []);
  return (
    <div className={cl.grid}>
      <SideBarLeft />
      <div className={cl.main}>
        <NavBar />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "20px",
              columnGap: "20px",
              marginTop: "120px",
              width: "100%",
            }}
          >
            {favouriteFilms.length ? (
              favouriteFilms.map((el) => {
                return (
                  <FilmCard
                    key={el.film.film.id}
                    film={el.film.film}
                    filmType={el.film.type}
                  />
                );
              })
            ) : (
              <Typography
                sx={{
                  color: "white",
                  marginTop: "50px",
                  fontSize: "30px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                No films found
              </Typography>
            )}
          </Box>
        </Box>
      </div>
      {isLogined ? <SideBarRight /> : <SignInBtn />}
    </div>
  );
};

export default Page;
