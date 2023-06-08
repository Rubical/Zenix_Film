import * as React from "react";
import { useFavouriteFilms } from "../../../../hooks/useFavouriteFilms";
import { useFavFilmCardsShow } from "../../../../hooks/useFavFilmCardsShow";
import { useActions } from "../../../../hooks/useActions";
import { useAuth } from "../../../../hooks/useAuth";
import SideBarFilmCard from "../../../FavourilteFilmCard/FavouriteFilmCard";
import ShowMoreBtn from "./ShowMoreBtn";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import StarsIcon from "@mui/icons-material/Stars";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import getPrettyDate from "../../../../utils/getPrettyDate";
import { useRouter } from "next/navigation";

export default function SideBarRight() {
  const {
    setType,
    setCategory,
    changeFilmListPage,
    setActiveTypeBtn,
    setActiveCategoryBtn,
    hideFavFilmsCards,
  } = useActions();
  const favouriteFilms = useFavouriteFilms();
  const favFilmsCardsShow = useFavFilmCardsShow();
  const { user } = useAuth();
  const router = useRouter();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [openNotifications, setNotifications] = React.useState(false);
  const handleOpenNotifications = () => setNotifications(true);
  const handleCloseNotifications = () => setNotifications(false);

  const [openProfile, setProfile] = React.useState(false);
  const handleOpenProfile = () => setProfile(true);
  const handleCloseProfile = () => setProfile(false);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const openFavPage = () => {
    setType("movie");
    setCategory("popular");
    changeFilmListPage(1);
    setActiveTypeBtn(1);
    setActiveCategoryBtn(1);
    hideFavFilmsCards();
    router.push("/Zenix_Film/favourite");
  };

  const renderMobileMenu = (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgb(20, 20, 20)",
          position: "relative",
          zIndex: "5",
          width: "300px",
        },
      }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMobileMenuClose();
          openFavPage();
        }}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <StarsIcon />
          </Badge>
        </IconButton>
        <p>Favourite</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMobileMenuClose();
          handleOpenNotifications();
        }}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMobileMenuClose();
          handleOpenProfile();
        }}
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(15,15,15)",
          },
        }}
      >
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "50px", sm: "80px", md: "100px", lg: "200px" },
        flexDirection: "column",
        alignItems: "center",
        color: "lightgray",
        flexShrink: "0",
        position: "relative",
        zIndex: "5",
      }}
      role="presentation"
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "5",
          display: {
            xs: "none",
            lg: "flex",
          },
          justifyContent: "center",
          paddingTop: "13px",
        }}
      >
        <IconButton
          onClick={openFavPage}
          sx={{ color: "lightgray" }}
          size="large"
          aria-label="show 0 new mails"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <StarsIcon />
          </Badge>
        </IconButton>
        <IconButton
          onClick={handleOpenNotifications}
          sx={{ color: "lightgray" }}
          size="large"
          aria-label="show 0 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          onClick={handleOpenProfile}
          sx={{ color: "lightgray" }}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { md: "flex", lg: "none" } }}>
        <IconButton
          sx={{ color: "lightgray", padding: " 24px 0" }}
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
        >
          <MoreIcon />
        </IconButton>
        <Modal
          open={openNotifications}
          onClose={handleCloseNotifications}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              padding: "30px 0",
              backgroundColor: {
                xs: "rgba(19,19,19,0.76)",
                lg: "rgba(19,19,19,0.64)",
              },
              color: "lightgray",
              boxShadow:
                "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: { xs: "20px", lg: "25px" } }}
            >
              There are no new notifications!
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={openProfile}
          onClose={handleCloseProfile}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "70%", md: "600px" },
              backgroundColor: {
                xs: "rgba(19,19,19,0.76)",
                lg: "rgba(19,19,19,0.64)",
              },
              color: "lightgray",
              boxShadow:
                "inset 2px 2px 4px rgba(65, 65, 65, 0.58), inset -2px -2px 4px rgba(65, 65, 65, 0.58)",
              padding: "30px 40px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "22px", md: "28px" },
                marginBottom: "40px",
              }}
            >
              User Info
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                marginBottom: "15px",
              }}
            >
              Name: {user?.user_metadata.name || "Anonymous"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                marginBottom: "15px",
              }}
            >
              E-mail: {user?.email || "No info"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                marginBottom: "15px",
              }}
            >
              Registered at:
              {getPrettyDate(new Date(user?.created_at!)) || "No info"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                marginBottom: "15px",
              }}
            >
              Your unique id: {user?.id || "No info"}
            </Typography>
          </Box>
        </Modal>
      </Box>
      {renderMobileMenu}
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {favFilmsCardsShow ? (
          favouriteFilms.length ? (
            <>
              <Typography
                sx={{
                  width: "150px",
                  color: "white",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
                component="div"
                variant="h5"
              >
                Favourite
              </Typography>
              {favouriteFilms.slice(0, 3).map((el) => (
                <SideBarFilmCard
                  key={el.film.film.id}
                  film={el.film.film}
                  filmType={el.film.type}
                />
              ))}
              {favouriteFilms.length > 3 ? <ShowMoreBtn /> : ""}
            </>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
