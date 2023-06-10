import * as React from "react";
import { useFilmFilter } from "../../../features/filter/hooks/useFilmFilter";
import { useActiveFilterBtns } from "../../../features/filter/hooks/useActiveFilterBtns";
import { useActions } from "../../../hooks/useActions";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "./logo.png";
import { supabase } from "../../../features/auth/services/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideBarLeft: React.FC = () => {
  const { logout } = useActions();
  const { isLogined } = useAuth();
  const { type } = useFilmFilter();
  const { activeCategoryBtn } = useActiveFilterBtns();
  const {
    setType,
    setCategory,
    changeFilmListPage,
    setActiveTypeBtn,
    setActiveCategoryBtn,
    showFavFilmsCards,
    changeSearchedQuery,
    changeSearchedFilmPage,
  } = useActions();

  const router = useRouter();

  const signOut = async () => {
    localStorage.removeItem("log");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    logout();
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        color: "lightgray",
        margin: "0 auto",
        alignItems: { xs: "center", lg: "flex-start" },
        position: "relative",
        width: { xs: "50px", sm: "80px", md: "100px", lg: "200px" },
        height: "100%",
        paddingLeft: "20px",
        zIndex: "2",
        flexShrink: "0",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex", padding: "20px 10px" },
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          router.push("/Zenix_Film/movie/popular/page/1");
          setType("movie");
          setCategory("popular");
          changeFilmListPage(1);
          setActiveTypeBtn(1);
          setActiveCategoryBtn(1);
          showFavFilmsCards();
          changeSearchedQuery("");
          changeSearchedFilmPage(1);
        }}
      >
        <Image src={logo} width={130} height={45} alt="logo" />
      </Box>

      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          paddingLeft: { xs: "0", sm: "3px" },
          paddingTop: "9px",
          marginBottom: "40px",
        }}
      >
        <IconButton
          sx={{ padding: { xs: "15px 0", sm: "15px" } }}
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: "lightgray" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiPaper-root": {
              backgroundColor: "rgb(20, 20, 20)",
              width: "200px",
            },
          }}
        >
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "rgb(15,15,15)",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              setType("movie");
              changeFilmListPage(1);
              changeSearchedQuery("");
              changeSearchedFilmPage(1);
              handleCloseNavMenu();
              router.push("/Zenix_Film/movie/popular/page/1");
            }}
          >
            <Typography
              sx={{
                color: "white",
              }}
              textAlign="center"
            >
              Movies
            </Typography>
          </MenuItem>

          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "rgb(15,15,15)",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              setType("tv");
              changeFilmListPage(1);
              changeSearchedQuery("");
              changeSearchedFilmPage(1);
              handleCloseNavMenu();
              router.push("/Zenix_Film/tv/popular/page/1");
            }}
          >
            <Typography sx={{ color: "white" }} textAlign="center">
              TV series
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        sx={{
          fontSize: "10px",
          padding: "40px 0 16px 20px",
          color: "gray",
          display: { xs: "none", lg: "flex" },
          letterSpacing: "8px",
        }}
      >
        MOVIES
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              setActiveCategoryBtn(1);
              setCategory("popular");
              changeFilmListPage(1);
              changeSearchedQuery("");
              changeSearchedFilmPage(1);
              showFavFilmsCards();
              router.push(`/Zenix_Film/${type}/popular/page/1`);
            }}
            sx={{
              marginBottom: { xs: "10px", sm: "20px", lg: "10px" },
              padding: { xs: "18px 0", sm: "8px 16px" },
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "white",
              },
              color: activeCategoryBtn === 1 ? "white" : "lightgray",
            }}
          >
            <WhatshotIcon
              sx={{
                width: "24px",
                height: "24px",
                color: activeCategoryBtn === 1 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },

                letterSpacing: "1px",
              }}
            >
              TRENDING
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              setActiveCategoryBtn(2);
              setCategory("top_rated");
              changeFilmListPage(1);
              changeSearchedQuery("");
              changeSearchedFilmPage(1);
              showFavFilmsCards();
              showFavFilmsCards();
              router.push(`/Zenix_Film/${type}/top-rated/page/1`);
            }}
            sx={{
              marginBottom: { xs: "10px", sm: "20px", lg: "10px" },
              padding: { xs: "18px 0", sm: "8px 16px" },
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "white",
              },
              color: activeCategoryBtn === 2 ? "white" : "lightgray",
            }}
          >
            <ThumbUpIcon
              sx={{
                color: activeCategoryBtn === 2 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "18px 0", sm: "10px" },
                transform: "scale(0.9)",
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                letterSpacing: "1px",
              }}
            >
              TOP RATED
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            disableRipple={true}
            onClick={() => {
              setActiveCategoryBtn(3);
              setCategory("coming");
              changeFilmListPage(1);
              changeSearchedQuery("");
              changeSearchedFilmPage(1);
              showFavFilmsCards();
              router.push(`/Zenix_Film/${type}/coming-soon/page/1`);
            }}
            sx={{
              marginBottom: { xs: "10px", sm: "20px", lg: "10px" },
              padding: { xs: "18px 0", sm: "8px 16px" },
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "white",
              },
              color: activeCategoryBtn === 3 ? "white" : "lightgray",
            }}
          >
            <EventIcon
              sx={{
                color: activeCategoryBtn === 3 ? "rgb(172, 0, 0)" : "lightgray",
                marginRight: { xs: "8px 0", sm: "10px" },
              }}
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                display: { xs: "none", lg: "flex" },
                letterSpacing: "1px",
              }}
            >
              COMING SOON
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
      {isLogined ? (
        <Typography
          sx={{
            fontSize: "10px",
            padding: "40px 0 16px 20px",
            color: "gray",
            display: { xs: "none", lg: "flex" },
            letterSpacing: "8px",
          }}
        >
          OPTIONS
        </Typography>
      ) : (
        ""
      )}
      <List>
        <ListItem disablePadding>
          {isLogined ? (
            <ListItemButton
              onClick={() => {
                signOut();
              }}
              disableRipple={true}
              sx={{
                marginBottom: "10px",
                padding: { xs: "0", sm: "8px 16px" },
              }}
            >
              <LogoutIcon
                sx={{
                  color: "lightgray",
                  marginRight: { xs: "0", sm: "10px" },
                  marginLeft: "2px",
                  marginTop: { xs: "25px", lg: "0" },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  display: { xs: "none", lg: "flex" },
                  transition: "color 0.1s ease-in",
                  "&:hover": {
                    color: "white",
                  },
                  color: "lightgray",
                  letterSpacing: "1px",
                }}
              >
                LOG OUT
              </Typography>
            </ListItemButton>
          ) : null}
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBarLeft;
