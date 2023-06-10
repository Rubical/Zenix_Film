import { FC } from "react";
import { useActions } from "../../_hooks/useActions";
import { useActiveFilterBtns } from "../../_features/filter/hooks/useActiveFilterBtns";
import cl from "./NavBar.module.css";
import FilmSearchInput from "../../_features/search/components/FilmSearchInput";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const {
    changeFilmListPage,
    setType,
    setCategory,
    setActiveTypeBtn,
    setActiveCategoryBtn,
    showFavFilmsCards,
    changeSearchedQuery,
    changeSearchedFilmPage,
  } = useActions();

  const { activeTypeBtn } = useActiveFilterBtns();
  const router = useRouter();

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
      position="absolute"
    >
      <Container maxWidth="xl" sx={{ paddingRight: { xs: "0px", md: "20px" } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: { xs: "15px" },
            justifyContent: { xs: "space-between" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              paddingTop: "8px",
            }}
          >
            <Button
              onClick={() => {
                changeFilmListPage(1);
                setType("movie");
                setCategory("popular");
                setActiveTypeBtn(1);
                setActiveCategoryBtn(1);
                showFavFilmsCards();
                changeSearchedQuery("");
                changeSearchedFilmPage(1);
                router.push("Zenix_Film/movie/popular/page/1");
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeTypeBtn === 1 ? "white" : "lightgray",
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "1px",
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                  backgroundColor: "transparent",
                },
              }}
              className={activeTypeBtn === 1 ? cl.navLinkActive : null}
            >
              Movies
            </Button>

            <Button
              onClick={() => {
                changeFilmListPage(1);
                setType("tv");
                setCategory("popular");
                setActiveTypeBtn(2);
                setActiveCategoryBtn(1);
                showFavFilmsCards();
                changeSearchedQuery("");
                changeSearchedFilmPage(1);
                router.push("Zenix_Film/tv/popular/page/1");
              }}
              disableRipple={true}
              sx={{
                my: 2,
                color: activeTypeBtn === 2 ? "white" : "lightgray",
                fontSize: "14px",
                fontWeight: "600",
                display: "block",
                letterSpacing: "1px",
                transition: "color 0.1s ease-in",
                "&:hover": {
                  color: "white",
                  backgroundColor: "transparent",
                },
              }}
              className={activeTypeBtn === 2 ? cl.navLinkActive : null}
            >
              TV series
            </Button>
          </Box>
          <FilmSearchInput />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
