'use client';

import { AlertTriangle, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Layout from '@/app/components/Layout';
import { useDebounce } from '@/hooks/useDebounce';
import { getCharacters } from '@/lib/swapi';
import { Character } from '@/types/swapi';

const getCharacterId = (url: string) => url.split('/').filter(Boolean).pop();

const LoadingSkeleton = () => (
  <div className='animate-pulse space-y-2' role='status'>
    <div className='h-12 w-full rounded bg-slate-700/50' />
    <div className='h-12 w-full rounded bg-slate-700/50' />
    <div className='h-12 w-full rounded bg-slate-700/50' />
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div
    className={
      'flex flex-col items-center justify-center rounded border border-red-500/50 ' +
      'bg-red-900/30 p-8 text-center text-imperial-red-accent'
    }
    role='alert'
  >
    <AlertTriangle className='mb-2 h-8 w-8' />
    <p className='font-bold'>{'// SCAN FAILED //'}</p>
    <p className='text-sm'>{message}</p>
  </div>
);

const ResultsList = ({ results, term }: { results: Character[]; term: string }) => {
  if (term && results.length === 0) {
    return (
      <div
        className={
          'flex flex-col items-center justify-center rounded border border-imperial-blue-glow/20 ' +
          'bg-black/20 p-8 text-center text-imperial-text/70'
        }
      >
        <Search className='mb-2 h-8 w-8' />
        <p>{'// NO MATCHING DESIGNATIONS FOUND IN DATABASE //'}</p>
      </div>
    );
  }

  return (
    <ul className='space-y-2'>
      {results.map(char => (
        <li key={char.name}>
          <Link
            href={`/characters/${getCharacterId(char.url)}`}
            className={
              'block border border-imperial-blue-glow/20 p-3 text-imperial-text ' +
              'hover:bg-imperial-blue-glow/20'
            }
          >
            {char.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      setResults([]);
      setLoading(false);
      setError('');
      return;
    }

    async function fetchData() {
      setError('');
      setLoading(true);
      try {
        const data = await getCharacters(debouncedSearchTerm);
        setResults(data.results);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown transmission error occurred.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [debouncedSearchTerm]);

  const renderContent = () => {
    if (loading) {
      return <LoadingSkeleton />;
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    return <ResultsList results={results} term={debouncedSearchTerm} />;
  };

  return (
    <Layout>
      <h2 className='mb-6 text-2xl font-bold text-imperial-red-accent'>
        {'// PERSONNEL DATABASE SCANNER'}
      </h2>
      <div className='relative mb-6'>
        <input
          type='text'
          placeholder='// Enter target designation... (e.g., Skywalker)'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={
            'w-full border border-imperial-blue-glow/30 bg-black/20 p-4 text-white ' +
            'placeholder:text-imperial-text/50 ' +
            'focus:border-imperial-blue-glow/80 focus:outline-none'
          }
        />
      </div>
      <div>{renderContent()}</div>
    </Layout>
  );
}