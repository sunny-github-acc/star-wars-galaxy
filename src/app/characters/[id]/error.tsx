'use client';

import Layout from '@/app/components/Layout';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Layout>
      <div className='max-w-md'>
        <h2 className='mb-6 text-2xl font-bold text-red-500'>
          {'// DOSSIER CORRUPTED OR UNAVAILABLE //'}
        </h2>
        <p className='mb-4 border border-red-500/50 bg-red-900/30 p-4 text-lg text-slate-300'>
          {error.message}
        </p>
        <button
          onClick={() => reset()}
          className={
            'border border-imperial-blue-glow px-4 py-2 text-white ' +
            'hover:bg-imperial-blue-glow/20'
          }
        >
          Attempt Re-Sync
        </button>
      </div>
    </Layout>
  );
}