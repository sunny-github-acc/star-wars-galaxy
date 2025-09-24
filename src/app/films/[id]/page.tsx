import Layout from '@/app/components/Layout';
import { getFilmById } from '@/lib/swapi';

export default async function FilmDetailPage({ params }: { params: { id: string } }) {
  const film = await getFilmById(params.id);

  return (
    <Layout>
      <h1 className='text-3xl font-bold text-white'>{film.title}</h1>
      <h2 className='text-xl text-imperial-red-accent mt-1'>
        {`// EPISODE ${film.episode_id} // RELEASE DATE: ${film.release_date}`}
      </h2>

      <div className='mt-8 p-4 border border-imperial-blue-glow/30 bg-black/20'>
        <p className='text-lg leading-relaxed whitespace-pre-wrap'>{film.opening_crawl}</p>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl font-bold text-white mb-4'>
          {'// PERSONNEL REFERENCES'}
        </h3>
        <ul>
          {film.characters.map(charUrl => <li key={charUrl}>{charUrl}</li>)}
        </ul>
      </div>
    </Layout>
  );
}