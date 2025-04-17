interface Movie {
    id: number;
    title: string;
    year: number;
    imdb_id: string;
    tmdb_id: number;
    tmdb_type: string;
    type: string;
}
interface Releases {
    id: number;
    title: string;
    type: string; // could be narrowed down to specific values if needed
    tmdb_id: number;
    tmdb_type: string; // e.g., "tv" or "movie"
    imdb_id: string;
    season_number: number;
    poster_url: string;
    source_release_date: string; // ISO date string
    source_id: number;
    source_name: string;
    is_original: number; // can be converted to boolean if preferred
  }
  