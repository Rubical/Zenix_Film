import { FC } from "react";
import imgPlaceholder from "./actor-img-placeholder.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IActor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface IActorCard {
  actor: IActor;
}

const ActorCard: FC<IActorCard> = ({ actor }) => {
  const { name, character, profile_path } = actor;
  return (
    <Card
      sx={{
        width: { xs: "140px", md: "180px" },
        height: { xs: "280px", md: "360px" },
        color: "white",
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "70%",
          backgroundColor: "rgba(30,30,30,0.67)",
        }}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w185_and_h278_face${profile_path}`
            : imgPlaceholder
        }
        alt="actor"
      />

      <CardContent>
        <Typography
          sx={{ fontSize: { xs: "13px", md: "15px" }, fontWeight: "600" }}
        >
          {name ? name : "No info"}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "11px", md: "12px" }, color: "lightgray" }}
        >
          {character ? character : "No info"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
