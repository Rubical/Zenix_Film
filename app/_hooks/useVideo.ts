import { useTypedSelector } from "./useTypedSelector";

export const useVideo = () => {
  const filmVideo = useTypedSelector((state) => state.filmVideo);
  return filmVideo;
};
