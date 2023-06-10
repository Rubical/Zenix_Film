import * as React from "react";
import { useActions } from "../../../hooks/useActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function ShowMoreBtn() {
  const router = useRouter();
  const {
    setType,
    setCategory,
    changeFilmListPage,
    setActiveTypeBtn,
    setActiveCategoryBtn,
    hideFavFilmsCards,
  } = useActions();

  const openFavPage = () => {
    setType("movie");
    setCategory("popular");
    changeFilmListPage(1);
    setActiveTypeBtn(1);
    setActiveCategoryBtn(1);
    hideFavFilmsCards();

    router.push("/Zenix_Film/favourite");
  };

  return (
    <Stack spacing={2} direction="row" sx={{ position: "static" }}>
      <Button
        onClick={openFavPage}
        sx={{
          border: "1px solid rgba(192, 0, 0, 0.5)",
          color: "rgba(192, 0, 0)",
          "&:hover": {
            border: "1px solid rgba(192, 0, 0)",
          },
        }}
        variant="outlined"
      >
        Show more
      </Button>
    </Stack>
  );
}
