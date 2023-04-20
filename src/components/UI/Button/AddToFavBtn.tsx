import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  addfavouriteFilm,
  removeFavouriteFilm,
} from "../../../state/favouriteFilmsSlice";
import { IFilmsList } from "../../../state/filmListSlice";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface IAddBtn {
  film: IFilmsList;
}

const AddToFavBtn: FC<IAddBtn> = ({ film }) => {
  const dispatch = useAppDispatch();
  const favouriteFilms = useAppSelector((state) => state.favouriteFilms);
  const type = useAppSelector((state) => state.category.type);

  return (
    <Button
      disableRipple={true}
      sx={{
        padding: "10px 0px",
        "&:hover": { backgroundColor: "transparent" },
      }}
      onClick={(event) => {
        event.stopPropagation();
        favouriteFilms.find((el) => el.film.id === film.id)
          ? dispatch(removeFavouriteFilm(film.id))
          : dispatch(addfavouriteFilm({ film: film, type: type }));
      }}
    >
      {favouriteFilms.find((el) => el.film.id === film.id) ? (
        <FavoriteIcon
          sx={{
            color: "rgba(164,23,23,0.84)",
            transition: "color 0.1s ease-in",
            "&:hover": { color: "rgba(129,50,50,0.84)" },
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            color: "rgba(129,50,50,0.84)",
            transition: "color 0.1s ease-in",
            "&:hover": { color: "rgba(164,23,23,0.84)" },
          }}
        />
      )}
    </Button>
  );
};

export default AddToFavBtn;