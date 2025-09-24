import FilmCard from '@/app/components/FilmCard';
import Layout from '@/app/components/Layout';
import { getFilms } from '@/lib/swapi';
import { Film } from '@/types/swapi';

export default async function FilmsPage() {
  const films = await getFilms();

  return (
    <Layout>
      <h2 className='text-2xl font-bold text-imperial-red-accent mb-6 animate-pulse'>
        {'// HOLOCRON ARCHIVE: FILM RECORDS'}
      </h2>
      <div className='space-y-4'>
        {films.map((film: Film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
    </Layout>
  );
}