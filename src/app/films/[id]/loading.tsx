import Layout from '@/app/components/Layout';

const SkeletonBar = ({ className }: { className?: string }) => (
  <div className={`rounded bg-slate-700/50 ${className}`} />
);

export default function Loading() {
  return (
    <Layout>
      <div className='animate-pulse'>
        <SkeletonBar className='h-8 w-3/4' />
        <SkeletonBar className='mt-2 h-6 w-1/2' />
      </div>

      <div className='mt-8 animate-pulse border border-imperial-blue-glow/20 bg-black/20 p-4'>
        <SkeletonBar className='h-4 w-full' />
        <SkeletonBar className='mt-2 h-4 w-full' />
        <SkeletonBar className='mt-2 h-4 w-5/6' />
      </div>

      <div className='mt-8 animate-pulse'>
        <SkeletonBar className='mb-4 h-6 w-1/3' />
        <div className='space-y-2'>
          <SkeletonBar className='h-6 w-1/2' />
          <SkeletonBar className='h-6 w-1/2' />
        </div>
      </div>
    </Layout>
  );
}