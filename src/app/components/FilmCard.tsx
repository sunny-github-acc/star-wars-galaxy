import Link from 'next/link';

import { Film } from '@/types/swapi';

const getFilmId = (url: string) => url.split('/').filter(Boolean).pop();

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link
      href={`/films/${getFilmId(film.url)}`}
      className={
        [
          'block p-4 border border-imperial-blue-glow/20 bg-black/20',
          'hover:bg-imperial-blue-glow/10 hover:border-imperial-blue-glow/50',
          'transition-all duration-300'
        ].join(' ')
      }
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold text-white'>
          EPISODE {film.episode_id}: {film.title}
        </h3>
        <span className='text-sm text-imperial-text'>{film.release_date}</span>
      </div>
      <p
        className='
          mt-2
          text-imperial-text
          italic
          font-light
          border-l-2
          border-imperial-red-accent/50
          pl-4
        '
      >
        {film.opening_crawl.substring(0, 128)}...
      </p>
    </Link>
  );
}