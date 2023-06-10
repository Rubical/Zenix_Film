import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useFilmFilter } from "../../_features/filter/hooks/useFilmFilter";
import { useActions } from "../../_hooks/useActions";
import { useAuth } from "../../_features/auth/hooks/useAuth";
import { IFilm } from "../../_types/film.types";
import { getGenreByID } from "../../_utils/getGenreById";
import AddFilmToFavouriteBtn from "./AddFilmToFavouriteBtn";
import imgNotFound from "./filmcard-image-placeholder.jpg";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

interface IFilmCard {
  film: IFilm;
  filmType?: string;
}

const FilmCard: FC<IFilmCard> = ({ film, filmType }) => {
  const { isLogined } = useAuth();
  const { type } = useFilmFilter();
  const { hideFavFilmsCards } = useActions();

  const {
    id,
    original_title,
    backdrop_path,
    release_date,
    vote_average,
    genre_ids,
    name,
    first_air_date,
    poster_path,
  } = film;

  const date = release_date ? release_date : first_air_date;
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        margin: "10px 10px",
        backgroundColor: "rgba(30,30,30,0.67)",
        boxShadow: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "transform 0.2s ease-in",
        "&:hover": { transform: "scale(1.05)" },
      }}
      onClick={() => {
        hideFavFilmsCards();
      }}
    >
      <CardCover sx={{ position: "absolute" }}>
        <img
          style={{ borderRadius: "5px" }}
          src={
            backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
              : poster_path
              ? `https://www.themoviedb.org/t/p/original/${poster_path}`
              : imgNotFound
          }
          alt="image"
        />
      </CardCover>
      <Box
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          padding: "6px 6px 8px 7px",
          borderTopLeftRadius: "5px",
          columnGap: "2px",
        }}
      >
        <StarIcon sx={{ color: "rgb(230, 230, 0)", transform: "scale(0.9)" }} />
        <Typography
          sx={{ color: "white", fontSize: "15px", fontWeight: "600" }}
        >
          {vote_average?.toFixed(1)}
        </Typography>
      </Box>

      <CardContent
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {isLogined ? (
          <Box sx={{ position: "absolute", right: "0px", top: "0px" }}>
            <AddFilmToFavouriteBtn film={film} />
          </Box>
        ) : (
          ""
        )}

        <Box
          sx={{
            backgroundColor: "rgba(18, 18, 18 ,0.5)",
            padding: "13px 10px",
            borderRadius: "10px",
          }}
        >
          <Typography
            level="h2"
            fontSize="lg"
            textColor="#fff"
            marginBottom="5px"
          >
            {original_title || name || "No name"}
          </Typography>
          <Box sx={{ display: "flex", columnGap: "10px" }}>
            <Typography
              textColor="white"
              sx={{ fontSize: "12px", marginRight: "10px", marginTop: "2px" }}
            >
              {date ? new Date(date).getFullYear() : ""}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              {getGenreByID(genre_ids)?.map((el) => {
                return (
                  <Typography
                    key={el}
                    sx={{ color: "white", fontSize: "14px" }}
                  >
                    {el}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
