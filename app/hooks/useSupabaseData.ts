import { supabase } from "../auth/auth";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { IFilmInfo } from "../types/supabaseFilmInfo.types";
import { useActions } from "./useActions";
import { useEffect } from "react";

export const useSupabaseData = () => {
  const { setUser, setFavouriteFilm } = useActions();
  useEffect(() => {
    (async function () {
      if (
        localStorage.getItem("sb-jdcbrbtfhykwfqsuukms-auth-token") ||
        localStorage.getItem("log")
      ) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
        const { data }: PostgrestSingleResponse<{ film: IFilmInfo }[]> =
          await supabase.from("FavFilm").select("film").eq("userId", user?.id);
        if (data) {
          setFavouriteFilm(data);
        }
      } else {
        return;
      }
    })();
  }, []);
};
