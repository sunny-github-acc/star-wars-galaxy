import Link from 'next/link';

import Layout from '@/app/components/Layout';
import { getCharacterById, getFilmByUrl } from '@/lib/swapi';

const getFilmId = (url: string) => url.split('/').filter(Boolean).pop();

const DataItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className='text-sm text-imperial-text/70'>{label.toUpperCase()}</p>
    <p className='text-lg font-bold text-white'>{value}</p>
  </div>
);

export default async function CharacterDetailPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    return (
      <Layout>
        <div className='text-red-500 font-bold'>{'// ERROR: NO DESIGNATION PROVIDED.'}</div>
      </Layout>
    );
  }

  const character = await getCharacterById(params.id);

  const films = await Promise.all(
    character.films.map(url => getFilmByUrl(url))
  );

  return (
    <Layout>
      <h1 className='text-3xl font-bold text-white'>{character.name.toUpperCase()}</h1>
      <h2 className='mt-1 text-xl text-imperial-red-accent'>
        {`// PERSONNEL DOSSIER // DESIGNATION: ${params.id}`}
      </h2>

      <div
        className='
          mt-8
          grid grid-cols-2 md:grid-cols-4
          gap-4
          border border-imperial-blue-glow/20
          bg-black/20
          p-4
        '
      >
        <DataItem label='Height' value={character.height} />
        <DataItem label='Mass' value={character.mass} />
        <DataItem label='Hair Color' value={character.hair_color} />
        <DataItem label='Skin Color' value={character.skin_color} />
        <DataItem label='Eye Color' value={character.eye_color} />
        <DataItem label='Birth Year' value={character.birth_year} />
        <DataItem label='Gender' value={character.gender} />
      </div>

      {/* Cross-Referenced Film Appearances */}
      <div className='mt-8'>
        <h3 className='mb-4 text-xl font-bold text-white'>{'// RECORDED APPEARANCES'}</h3>
        <ul className='space-y-2'>
          {films.map(film => (
            <li key={film.title}>
              <Link
                href={`/films/${getFilmId(film.url)}`}
                className={
                  'block border border-imperial-blue-glow/20 p-3 text-imperial-text ' +
                  'hover:bg-imperial-blue-glow/20'
                }
              >
                EPISODE {film.episode_id}: {film.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
