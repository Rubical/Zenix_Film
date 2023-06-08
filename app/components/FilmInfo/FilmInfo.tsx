import { FC } from "react";
import { IFilm, TypeFilmGenre } from "../../types/film.types";
import imgPlaceholder from "./filminfo-img-placeholder.jpg";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

interface IFilmInfoCard {
  film: IFilm;
}

const FilmInfo: FC<IFilmInfoCard> = ({ film }) => {
  const {
    name,
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
    poster_path,
    first_air_date,
  } = film;

  return (
    <Box
      sx={{
        position: "relative",
        color: "lightgray",
        marginTop: { xs: "120px", lg: "170px" },
        overflow: "auto",
        marginBottom: { xs: "100px", md: "150px" },
        zIndex: "2",
        display: { xs: "flex", md: "block" },
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: { xs: "20px", lg: "0" },
      }}
    >
      <Box
        sx={{
          float: "left",
          width: { xs: "200px", sm: "300px" },
          height: { xs: "300px", sm: "450px" },
          marginRight: "30px",
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            marginRight: "30px",
            backgroundColor: "rgba(30,30,30,0.67)",
          }}
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/original/${poster_path}`
              : imgPlaceholder
          }
          alt="poster"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "30px", md: "35px" },
            fontWeight: "600",
            maxWidth: "100%",
            lineHeight: { xs: "1.2", md: "1.4" },
          }}
        >
          {original_title || name ? original_title || name : "No title"}
        </Typography>
        {release_date || first_air_date ? (
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "35px" },
              fontWeight: "600",
              maxWidth: "80%",
              whiteSpace: "nowrap",
              lineHeight: { xs: "1.3", md: "1.4" },
            }}
          >
            {new Date(release_date || first_air_date).getFullYear()}
          </Typography>
        ) : (
          ""
        )}
      </Box>
      {vote_average ? (
        <Box
          sx={{
            display: "flex",
            marginTop: { xs: "10px", md: "20px" },
            color: "lightgray",
            marginBottom: "5px",
          }}
        >
          <StarIcon
            sx={{
              color: "rgb(230, 230, 0)",
              width: { xs: "15px", md: "20px" },
            }}
          ></StarIcon>
          <Box
            sx={{
              marginLeft: "5px",
              display: "flex",
              columnGap: "7px",
              paddingTop: { xs: "2px", md: "0" },
            }}
          >
            <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }}>
              {vote_average.toFixed(1)}
            </Typography>
            <Typography sx={{ fontSize: { xs: "13px", md: "16px" } }}>
              Rating
            </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
      {genres ? (
        <Box sx={{ display: "flex", columnGap: "7px", flexWrap: "wrap" }}>
          {genres.map((el: TypeFilmGenre, index: number) => {
            return (
              <Typography key={el.id} sx={{ fontSize: "14px" }}>
                {`${el.name} / `}
              </Typography>
            );
          })}
        </Box>
      ) : (
        ""
      )}
      {overview ? (
        <Box>
          <Typography
            sx={{
              marginTop: { xs: "25px", md: "40px" },
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Overview
          </Typography>
          <Typography
            sx={{ maxWidth: "100%", fontSize: { xs: "14px", md: "16px" } }}
          >
            {overview}
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default FilmInfo;
