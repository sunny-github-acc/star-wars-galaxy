import { Film } from '@/types/swapi';

const BASE_URL = 'https://swapi.py4e.com/api';

export async function getFilms(): Promise<Film[]> {
  try {
    const response = await fetch(`${BASE_URL}/films`);

    if (!response.ok) {
      throw new Error('// TRANSMISSION FAILED. UNABLE TO ACCESS HOLOCRON ARCHIVE.');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFilmById(id: string): Promise<Film> {
  try {
    const response = await fetch(`${BASE_URL}/films/${id}/`);

    if (!response.ok) {
      throw new Error(`// DOSSIER NOT FOUND: ${id}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}