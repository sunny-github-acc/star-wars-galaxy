export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  url: string;
  release_date: string;
  characters: string[];
}

export interface Character {
  name: string;
  url: string;
  films: string[];
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}