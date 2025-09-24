import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>

      <main className='flex-1 p-8 overflow-y-auto'>
        {children}
      </main>
      <aside className='w-64 bg-black/30 p-4 border-r border-imperial-blue-glow/30'>
        <Link href='/'>
          <h1 className='text-xl font-bold text-white mb-8'>
            ISB HOLONET
          </h1>
        </Link>
        <nav className='flex flex-col space-y-4'>
          <Link href='/films' className='hover:text-white'>
            {'// FILM ARCHIVES'}
          </Link>
          <Link href='/characters' className='hover:text-white'>
            {'// PERSONNEL DATABASE'}
          </Link>
        </nav>
      </aside>
    </div>
  );
}