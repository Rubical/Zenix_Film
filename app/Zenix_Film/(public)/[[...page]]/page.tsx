"use client";

import { useEffect } from "react";
import { useFilmList } from "../../../../src/hooks/useFilmList";
import { useFilmFilter } from "../../../../src/features/filter/hooks/useFilmFilter";
import { useActions } from "../../../../src/hooks/useActions";
import { useAuth } from "../../../../src/features/auth/hooks/useAuth";
import { useSupabaseData } from "../../../../src/hooks/useSupabaseData";
import FilmCard from "../../../../src/components/FilmCard/FilmCard";
import FrontFilmCard from "../../../../src/components/FrontFilmCard/FrontFilmCard";
import Loader from "../../../../src/components/UI/Loader/Loader";
import PagePagination from "../../../../src/components/UI/Pagination/Pagination";
import SideBarLeft from "../../../../src/layouts/SideBar/SideBarLeft/SideBarLeft";
import SideBarRight from "../../../../src/layouts/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../../../src/features/auth/components/SignInBtn";
import Header from "../../../../src/layouts/Header/Header";
import style from "./MainScreen.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

type TypeMainPage = {
  params: {
    urlPage: string;
  };
};

const MainPage: NextPage<TypeMainPage> = ({ params: { urlPage } }) => {
  const { isLogined } = useAuth();
  const { page, loading, filmsList } = useFilmList();
  const { type, category } = useFilmFilter();
  const { fetchFilms, changeFilmListPage } = useActions();

  const router = useRouter();

  useSupabaseData();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFilms();
  }, [page, type, category]);

  const changePage = (page: number) => {
    router.push(`./Zenix_Film/${type}/${category}/page/${page}`);
    changeFilmListPage(page);
  };

  return (
    <main className={style.grid}>
      <SideBarLeft />
      <div className={style.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <div className={style.background}></div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                rowGap: "20px",
                columnGap: "20px",
                padding: "0",
              }}
            >
              {filmsList && filmsList.length ? (
                <FrontFilmCard film={filmsList[0]} />
              ) : null}
              {filmsList &&
                filmsList.slice(1, filmsList.length - 1).map((film) => {
                  return <FilmCard film={film} key={film.id} />;
                })}
              {filmsList && filmsList.length ? (
                <PagePagination
                  currentPage={page}
                  totalPages={100}
                  changePage={changePage}
                />
              ) : null}
            </div>
          </>
        )}
      </div>
      {isLogined ? <SideBarRight /> : <SignInBtn />}
    </main>
  );
};

export default MainPage;
