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
          {'// TRANSMISSION FAILED //'}
        </h2>
        <div className='mb-4 rounded border border-red-500/50 bg-red-900/30 p-4'>
          <p className='text-lg text-slate-300'>{error.message}</p>
        </div>
        <button
          onClick={() => reset()}
          className={
            'rounded border border-imperial-blue-glow px-4 py-2 text-white ' +
            'hover:bg-imperial-blue-glow/20'
          }
        >
          Retry Transmission
        </button>
      </div>
    </Layout>
  );
}