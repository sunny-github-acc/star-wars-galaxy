import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const main = (isBig: boolean) => (
    <main
      className={`${
        isBig ? 'hidden md:block' : 'block md:hidden'
      } flex-1 p-4 md:p-8 overflow-y-auto`}
    >
      {children}
    </main>
  );

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {main(true)}

      <aside
        className={
          'w-full md:w-64 bg-black/30 p-4 border-b ' +
          'md:border-b-0 md:border-r border-imperial-blue-glow/30'
        }
      >
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

      {main(false)}
    </div>
  );
}