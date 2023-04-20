import React, { FC, useEffect } from "react";
import Card from "@mui/material/Card";
import noSources from "./no-sources.jpg";

interface IYoutubeFrame {
  embedId: string;
}

const YoutubeFrame: FC<IYoutubeFrame> = ({ embedId }) => {
  return (
    <Card
      sx={{
        position: "relative",
        zIndex: "2",
        backgroundColor: "transparent",
        width: { xs: "100%", sm: "440px", md: "600px", lg: "600px" },
        height: { xs: "200px", sm: "230px", md: "330px", lg: "330px" },
        boxShadow: "none",
        marginBottom: { xs: "20px", lg: "0" },
      }}
    >
      {embedId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <img style={{ width: "100%", height: "420px" }} src={noSources} />
      )}
    </Card>
  );
};

export default YoutubeFrame;