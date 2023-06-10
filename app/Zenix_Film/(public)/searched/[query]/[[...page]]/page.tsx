"use client";

import React, { FC, useEffect } from "react";
import { useSearchedFilms } from "../../../../../../src/features/search/hooks/useSearchedFilms";
import { useActions } from "../../../../../../src/hooks/useActions";
import { useAuth } from "../../../../../../src/features/auth/hooks/useAuth";
import { useSupabaseData } from "../../../../../../src/hooks/useSupabaseData";
import { supabase } from "../../../../../../src/features/auth/services/auth";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { IFilmInfo } from "../../../../../../src/types/supabaseFilmInfo.types";
import FilmCard from "../../../../../../src/components/FilmCard/FilmCard";
import Loader from "../../../../../../src/components/UI/Loader/Loader";
import PagePagination from "../../../../../../src/components/UI/Pagination/Pagination";
import cl from "./SearchedFilmsPage.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBarLeft from "../../../../../../src/layouts/SideBar/SideBarLeft/SideBarLeft";
import SideBarRight from "../../../../../../src/layouts/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../../../../../src/features/auth/components/SignInBtn";
import Header from "../../../../../../src/layouts/Header/Header";
import { useRouter } from "next/navigation";

const Page: FC = () => {
  const { isLogined } = useAuth();
  const { filmsFound, loading, totalPages, page, filmQuery } =
    useSearchedFilms();
  const { changeSearchedFilmPage, fetchSearchedFilms, setFavouriteFilm } =
    useActions();
  const router = useRouter();

  const changePage = (page: number) => {
    router.push(`/Zenix_film/searched/${filmQuery}/page/${page}`);
    changeSearchedFilmPage(page);
  };

  useSupabaseData();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSearchedFilms();
  }, [page]);

  useEffect(() => {
    (async function getFavFilms() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data }: PostgrestSingleResponse<{ film: IFilmInfo }[]> =
        await supabase.from("FavFilm").select("film").eq("userId", user?.id);

      if (data) {
        setFavouriteFilm(data);
      }
    })();
  }, []);

  return (
    <div className={cl.grid}>
      <SideBarLeft />
      <div className={cl.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Box sx={{ marginTop: "120px" }}>
              {filmsFound.length ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      rowGap: "20px",
                      columnGap: "20px",
                      width: "100%",
                    }}
                  >
                    {filmsFound.map((film) => {
                      return <FilmCard key={film.id} film={film} />;
                    })}
                  </Box>
                  <PagePagination
                    totalPages={totalPages}
                    changePage={changePage}
                    currentPage={page}
                  />
                </Box>
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
          </>
        )}
      </div>
      {isLogined ? <SideBarRight /> : <SignInBtn />}
    </div>
  );
};

export default Page;
