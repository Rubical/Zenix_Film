import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useFavouriteFilms } from "../../hooks/useFavouriteFilms";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { IFilm } from "../../types/film.types";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { supabase } from "../../auth/auth";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

interface IFilmInfo {
  film: IFilm;
  type: string;
}

interface IAddBtn {
  film: IFilm;
}

const AddFilmToFavouriteBtn: FC<IAddBtn> = ({ film }) => {
  const favouriteFilms = useFavouriteFilms();
  const { type } = useFilmFilter();
  const { addFavoutiteFilm, deleteFavouriteFilm } = useActions();

  const toggleFavouriteFilm = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data }: PostgrestSingleResponse<{ film: IFilmInfo }[]> =
      await supabase.from("FavFilm").select("film").eq("userId", user?.id);

    if (data?.find((el) => el.film.film.id === film.id)) {
      deleteFavouriteFilm(film.id);
      await supabase.from("FavFilm").delete().eq("filmId", film.id);
    } else {
      addFavoutiteFilm({ film: { film: film, type: type } });
      await supabase.from("FavFilm").insert([
        {
          id: Date.now(),
          userId: user?.id,
          filmId: film.id,
          film: { film: film, type: type },
        },
      ]);
    }
  };

  return (
    <Button
      disableRipple={true}
      sx={{
        padding: "10px 0px",
        "&:hover": { backgroundColor: "transparent" },
      }}
      onClick={(event) => {
        event.stopPropagation();
        toggleFavouriteFilm();
      }}
    >
      {favouriteFilms.find((el) => el.film.film.id === film.id) ? (
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

export default AddFilmToFavouriteBtn;
