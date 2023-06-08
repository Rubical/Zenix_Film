"use client";

import { useEffect } from "react";
import { useFilmList } from "../../../../hooks/useFilmList";
import { useFilmFilter } from "../../../../hooks/useFilmFilter";
import { useActions } from "../../../../hooks/useActions";
import { useAuth } from "../../../../hooks/useAuth";
import { useSupabaseData } from "../../../../hooks/useSupabaseData";
import FilmCard from "../../../../components/FilmCard/FilmCard";
import FrontFilmCard from "../../../../components/FrontFilmCard/FrontFilmCard";
import Loader from "../../../../components/UI/Loader/Loader";
import PagePagination from "../../../../components/UI/Pagination/Pagination";
import SideBarLeft from "../../../../components/UI/SideBar/SideBarLeft/SideBarLeft";
import SideBarRight from "../../../../components/UI/SideBar/SideBarRight/SideBarRight";
import SignInBtn from "../../../../components/UI/Button/SignInBtn";
import NavBar from "../../../../components/UI/NavBar/NavBar";
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
    router.push(`./${type}/${category}/page/${page}`);
    changeFilmListPage(Number(urlPage));
  };

  return (
    <section className={style.grid}>
      <SideBarLeft />
      <div className={style.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
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
              {filmsList[0] ? <FrontFilmCard film={filmsList[0]} /> : null}
              {filmsList.slice(1, filmsList.length - 1).map((film) => {
                return (
                  <Link
                    href={`/info/${type}/${film.id}`}
                    key={film.id}
                    className={style.link}
                  >
                    <FilmCard film={film} />
                  </Link>
                );
              })}
              {filmsList[0] ? (
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
    </section>
  );
};

export default MainPage;
