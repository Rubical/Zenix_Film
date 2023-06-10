import React, { FC } from "react";
import Card from "@mui/material/Card";
import imgPlaceholder from "./youtube-frame-img-placeholder.jpg";

interface IYoutubeFrame {
  embedId: string | undefined;
}

const YoutubeFrame: FC<IYoutubeFrame> = ({ embedId }) => {
  return (
    <Card
      sx={{
        position: "relative",
        zIndex: "2",
        backgroundColor: "transparent",
        width: { xs: "100%", sm: "440px", md: "600px", lg: "600px" },
        height: { xs: "auto", sm: "230px", md: "330px", lg: "330px" },
        boxShadow: "none",
        marginBottom: { xs: "20px", lg: "0" },
      }}
    >
      {embedId ? (
        <iframe
          style={{ backgroundColor: "rgba(30,30,30,0.67)" }}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <img
          style={{ width: "100%", height: "420px" }}
          src={imgPlaceholder}
          alt="img"
        />
      )}
    </Card>
  );
};

export default YoutubeFrame;
