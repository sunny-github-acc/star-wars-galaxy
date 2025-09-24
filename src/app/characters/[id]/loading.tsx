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

      <div
        className='
          mt-8
          grid
          grid-cols-2
          gap-4
          border
          border-imperial-blue-glow/20
          bg-black/20
          p-4
          md:grid-cols-4
        '
      >
        {[...Array(7)].map((_, i) => (
          <div key={i} className='animate-pulse'>
            <SkeletonBar className='h-4 w-1/3' />
            <SkeletonBar className='mt-2 h-6 w-2/3' />
          </div>
        ))}
      </div>

      <div className='mt-8 animate-pulse'>
        <SkeletonBar className='mb-4 h-6 w-1/3' />
        <div className='space-y-2'>
          <SkeletonBar className='h-12 w-full' />
          <SkeletonBar className='h-12 w-full' />
        </div>
      </div>
    </Layout>
  );
}