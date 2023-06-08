import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../../../themes/themes";

interface IPagination {
  totalPages: number;
  changePage: (page: number) => void;
  currentPage: number;
}

const PagePagination: FC<IPagination> = ({
  totalPages,
  changePage,
  currentPage,
}) => {
  const isScreenBig = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          marginTop: "50px",
        }}
      >
        <Pagination
          boundaryCount={isScreenBig ? 2 : 0}
          hideNextButton={isScreenBig ? false : true}
          hidePrevButton={isScreenBig ? false : true}
          sx={{
            width: "100%",
            color: "white",
            button: {
              color: "#ffffff",
            },
            div: {
              color: "#ffffff",
            },
          }}
          onChange={(e, page) => {
            changePage(page);
          }}
          count={totalPages}
          shape="rounded"
          page={currentPage}
          color={"primary"}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default PagePagination;
