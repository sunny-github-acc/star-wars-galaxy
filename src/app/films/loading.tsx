// In app/films/loading.tsx
import Layout from '@/app/components/Layout';

const FilmCardSkeleton = () => (
  <div className='animate-pulse rounded border border-imperial-blue-glow/20 bg-black/20 p-4'>
    <div className='h-6 w-3/4 rounded bg-slate-700/50' />
    <div className='mt-3 h-4 w-full rounded bg-slate-700/50' />
    <div className='mt-2 h-4 w-5/6 rounded bg-slate-700/50' />
  </div>
);

export default function Loading() {
  return (
    <Layout>
      <h2 className='mb-6 text-2xl font-bold text-imperial-red-accent animate-pulse'>
        {'// ACCESSING HOLOCRON ARCHIVE...'}
      </h2>
      <div className='space-y-4'>
        <FilmCardSkeleton />
        <FilmCardSkeleton />
        <FilmCardSkeleton />
      </div>
    </Layout>
  );
}