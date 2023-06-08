import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useFilmFilter } from "../../hooks/useFilmFilter";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../../types/film.types";
import { getGenreByID } from "../../utils/getGenreById";
import cl from "./FrontFilmCard.module.css";
import WatchFilmBtn from "./WatchFilmBtn";
import imgPlaceholder from "./background-img.jpg";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StarIcon from "@mui/icons-material/Star";

type IFrontFilmCard = {
  film: IFilm;
};

const FrontFilmCard: FC<IFrontFilmCard> = ({ film }) => {
  const { hideFavFilmsCards } = useActions();
  const { type } = useFilmFilter();
  const { id, original_title, backdrop_path, genre_ids, name, vote_average } =
    film;

  const onClick = () => {
    hideFavFilmsCards();
  };

  return (
    <Card
      sx={{
        height: { lg: "700px", sm: "350px", md: "450px", xs: "200px" },
        width: "100%",
        marginTop: { xs: "110px", sm: "0" },
        background: "black",
        borderRadius: "0px",
        boxShadow: "none",
        backgroundColor: "rgba(30,30,30,0.67)",
      }}
    >
      <CardCover
        sx={{
          right: "0px",
          top: "0px",
          left: "auto",
          width: "100%",
          height: { lg: "700px", sm: "350px", md: "450px", xs: "200px" },
          display: "flex",
          alignSelf: "flex-end",
          borderRadius: "0px",
          position: "absolute",
        }}
      >
        <img
          style={{
            borderRadius: "0px",
          }}
          src={
            backdrop_path
              ? `https://www.themoviedb.org/t/p/original/${backdrop_path}`
              : imgPlaceholder
          }
          alt="image"
        />
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToRight}`}
          sx={{ borderRadius: "0px", width: { xs: "20%", md: "40%" } }}
        ></Box>
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToBottom}`}
          sx={{
            display: { xs: "flex", sm: "none" },
            borderRadius: "0px",
            width: "100%",
            height: { xs: "10vh", md: "20vh" },
            top: "0px",
          }}
        ></Box>
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToTop}`}
          sx={{
            borderRadius: "0px",
            width: "100%",
            height: { xs: "10vh", md: "20vh" },
            bottom: "0px",
          }}
        ></Box>
        <Box
          className={`${cl.fromBlack} ${cl.bgGradientToLeft}`}
          sx={{
            width: { xs: "20%", md: "55%" },
            right: "0px",
          }}
        ></Box>
      </CardCover>
      <CardContent
        sx={{
          justifyContent: "flex-start",
          ml: "15px",
          flexDirection: "column",
          marginTop: { xs: "0", sm: "60px", md: "145px" },
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: { lg: "40px", md: "35px", sm: "30px", xs: "20px" },
            maxWidth: { xs: "200px", sm: "60%" },
          }}
          textColor="#fff"
          mb={1}
        >
          {original_title || name || "No name"}
        </Typography>
        {vote_average ? (
          <Box
            sx={{
              display: "flex",
              marginBottom: { xs: "10px", sm: "15px" },
            }}
          >
            <StarIcon
              sx={{
                color: "rgb(230, 230, 0)",
                width: { xs: "20px", md: "30px" },
              }}
            ></StarIcon>
            <Box
              sx={{
                marginLeft: "5px",
                display: "flex",
                columnGap: "7px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "16px" },
                  paddingTop: { xs: "2px", sm: "0" },
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {`${vote_average?.toFixed(1)} `}
              </Typography>
            </Box>
          </Box>
        ) : (
          ""
        )}
        {genre_ids ? (
          <Box sx={{ display: "flex", columnGap: "15px" }}>
            {getGenreByID(genre_ids)?.map((el) => {
              return (
                <Typography
                  key={el}
                  sx={{
                    justifyContent: "center",
                    color: "white",
                    backgroundColor: "rgba(53, 51, 56, 0.7)",
                    padding: { xs: "3px 10px", sm: "5px 10px" },
                    borderRadius: "15px",
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                >
                  {el}
                </Typography>
              );
            })}
          </Box>
        ) : (
          ""
        )}

        <WatchFilmBtn clickAction={onClick} />
      </CardContent>
    </Card>
  );
};

export default FrontFilmCard;
