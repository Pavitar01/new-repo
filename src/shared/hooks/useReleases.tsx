'use client'
import axios from "axios"
import { useEffect, useState } from "react";

export const useReleases = () => {
    const [releases, setReleases] = useState<Releases[]>([]);
    const [isDataFetching, setIsDataFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchTrending = async () => {
        if (isDataFetching) return
        setIsDataFetching(true)
        try {
            // const response = await axios.get("/api/releases");
            setReleases(data.releases as Releases[])
        } catch (err) {
            setError("Failed to fetch data")
        } finally {
            setIsDataFetching(false)
        }
    }
    useEffect(() => {
        fetchTrending()
    }, [])
    return { releases, error, isDataFetching }
}

const data ={
    releases: [
      {
        id: 3213275,
        title: 'Government Cheese',
        type: 'tv_series',
        imdb_id: 'tt30428883',
        tmdb_id: 241491,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03213275_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 371,
        source_name: 'AppleTV+',
        is_original: 0
      },
      {
        id: 548318,
        title: 'The Stolen Girl',
        type: 'tv_miniseries',
        imdb_id: 'tt28228082',
        tmdb_id: 233256,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/0548318_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 157,
        source_name: 'Hulu',
        is_original: 0
      },
      {
        id: 1787582,
        title: 'The Diamond Heist',
        type: 'movie',
        imdb_id: '',
        tmdb_id: 1239841,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01787582_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 0
      },
      {
        id: 1604720,
        title: "No Man's Land",
        type: 'movie',
        imdb_id: 'tt10449052',
        tmdb_id: 678491,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01604720_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 157,
        source_name: 'Hulu',
        is_original: 0
      },
      {
        id: 3224554,
        title: 'Project UFO',
        type: 'tv_miniseries',
        imdb_id: 'tt32245125',
        tmdb_id: 252591,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03224554_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 1
      },
      {
        id: 3218298,
        title: 'Sherlock & Daughter',
        type: 'tv_series',
        imdb_id: 'tt31322085',
        tmdb_id: 246461,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03218298_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 284,
        source_name: 'The CW',
        is_original: 0
      },
      {
        id: 3203007,
        title: 'LOL: Last One Laughing Colombia',
        type: 'tv_series',
        imdb_id: 'tt28502014',
        tmdb_id: 231804,
        tmdb_type: 'tv',
        season_number: 2,
        poster_url: 'https://cdn.watchmode.com/posters/03203007_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 26,
        source_name: 'Prime Video',
        is_original: 1
      },
      {
        id: 3264683,
        title: 'Yo no soy Mendoza',
        type: 'tv_series',
        imdb_id: 'tt10348228',
        tmdb_id: 287899,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03264683_poster_w780.jpg',
        source_release_date: '2025-04-16',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 1
      },
      {
        id: 3212759,
        title: 'Ransom Canyon',
        type: 'tv_series',
        imdb_id: 'tt28088031',
        tmdb_id: 240993,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03212759_poster_w780.jpg',
        source_release_date: '2025-04-17',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 1
      },
      {
        id: 3193685,
        title: '#1 Happy Family USA',
        type: 'tv_series',
        imdb_id: 'tt18566094',
        tmdb_id: 218510,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03193685_poster_w780.jpg',
        source_release_date: '2025-04-17',
        source_id: 26,
        source_name: 'Prime Video',
        is_original: 1
      },
      {
        id: 3170487,
        title: 'Leverage: Redemption',
        type: 'tv_series',
        imdb_id: 'tt12197698',
        tmdb_id: 106502,
        tmdb_type: 'tv',
        season_number: 3,
        poster_url: 'https://cdn.watchmode.com/posters/03170487_poster_w780.jpg',
        source_release_date: '2025-04-17',
        source_id: 26,
        source_name: 'Prime Video',
        is_original: 0
      },
      {
        id: 3170363,
        title: 'Law & Order: Organized Crime',
        type: 'tv_series',
        imdb_id: 'tt12677870',
        tmdb_id: 106158,
        tmdb_type: 'tv',
        season_number: 5,
        poster_url: 'https://cdn.watchmode.com/posters/03170363_poster_w780.jpg',
        source_release_date: '2025-04-17',
        source_id: 388,
        source_name: 'Peacock',
        is_original: 0
      },
      {
        id: 3245169,
        title: 'Istanbul Encyclopedia',
        type: 'tv_series',
        imdb_id: 'tt30965512',
        tmdb_id: 278004,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03245169_poster_w780.jpg',
        source_release_date: '2025-04-17',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 1
      },
      {
        id: 1780689,
        title: 'Dead Mail',
        type: 'movie',
        imdb_id: 'tt26474783',
        tmdb_id: 1229915,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01780689_poster_w780.jpg',
        source_release_date: '2025-04-18',
        source_id: 252,
        source_name: 'Shudder',
        is_original: 0
      },
      {
        id: 1870990,
        title: 'iHostage',
        type: 'movie',
        imdb_id: 'tt31181421',
        tmdb_id: 1371202,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01870990_poster_w780.jpg',
        source_release_date: '2025-04-18',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 0
      },
      {
        id: 1688527,
        title: 'Jane',
        type: 'movie',
        imdb_id: 'tt15040500',
        tmdb_id: 853867,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01688527_poster_w780.jpg',
        source_release_date: '2025-04-18',
        source_id: 371,
        source_name: 'AppleTV+',
        is_original: 0
      },
      {
        id: 1976001,
        title: 'Oklahoma City Bombing: American Terror',
        type: 'movie',
        imdb_id: 'tt36351149',
        tmdb_id: 1455132,
        tmdb_type: 'movie',
        season_number: null,
        poster_url: 'https://cdn.watchmode.com/posters/01976001_poster_w780.jpg',
        source_release_date: '2025-04-18',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 0
      },
      {
        id: 3210030,
        title: 'The Narrow Road to the Deep North',
        type: 'tv_series',
        imdb_id: 'tt11389652',
        tmdb_id: 238339,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03210030_poster_w780.jpg',
        source_release_date: '2025-04-18',
        source_id: 26,
        source_name: 'Prime Video',
        is_original: 1
      },
      {
        id: 3226276,
        title: 'Heavenly Ever After',
        type: 'tv_series',
        imdb_id: '',
        tmdb_id: 254389,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/03226276_poster_w780.jpg',
        source_release_date: '2025-04-19',
        source_id: 203,
        source_name: 'Netflix',
        is_original: 0
      },
      {
        id: 550499,
        title: 'Secrets of the Penguins',
        type: 'tv_miniseries',
        imdb_id: 'tt26351137',
        tmdb_id: 218275,
        tmdb_type: 'tv',
        season_number: 1,
        poster_url: 'https://cdn.watchmode.com/posters/0550499_poster_w780.jpg',
        source_release_date: '2025-04-20',
        source_id: 157,
        source_name: 'Hulu',
        is_original: 0
      }
    ]
  }