import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";

interface IDownloadBtn {
  download: () => void;
}

const DownloadBtn: FC<IDownloadBtn> = ({ download }) => {
  return (
    <Button
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        position: "absolute",
        bottom: "0px",
        backgroundColor: "#dadada",
        textTransform: "none",

        "&:hover": {
          backgroundColor: "#c1c1c1",
        },
      }}
      onClick={download}
    >
      <Typography
        sx={{
          color: "#313131",
          fontWeight: "600",
          fontSize: { xs: "12px", sm: "14px" },
          paddingTop: "1px",
        }}
      >
        Download
      </Typography>
      <FileDownloadIcon
        sx={{ color: "#313131", width: { xs: "18px", md: "24px" } }}
      ></FileDownloadIcon>
    </Button>
  );
};

export default DownloadBtn;
