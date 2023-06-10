"use client";

import React, { FC, useEffect } from "react";
import { useFavouriteFilms } from "../../../../_features/favourite/hooks/useFavouriteFilms";
import { useAuth } from "../../../../_features/auth/hooks/useAuth";
import SideBarLeft from "../../../../_layouts/SideBar/SideBarLeft/SideBarLeft";
import Header from "../../../../_layouts/Header/Header";
import SideBarRight from "../../../../_layouts/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../../../_features/auth/components/SignInBtn";
import FilmCard from "../../../../_components/FilmCard/FilmCard";
import cl from "./FavouritePage.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSupabaseData } from "../../../../_hooks/useSupabaseData";
import { useActions } from "../../../../_hooks/useActions";

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
        <Header />
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
