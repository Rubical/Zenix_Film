export interface IFilm {
  id: number;
  backdrop_path: string;
  budget: number;
  first_air_date: string;
  genres: TypeFilmGenre[];
  genre_ids: number[];
  homepage: string;
  name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  status: string;
  revenue: number;
  runtime: number;
  last_episode_to_air: IEpisode;
  next_episode_to_air: IEpisode;
}

export type TypeFilmGenre = { id: number; name: string };
export type IEpisode = {
  air_date: string;
  episode_number: number;
  name: string;
};
