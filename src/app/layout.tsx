import { Orbitron } from 'next/font/google';
import { ReactNode } from 'react';

import '@/app/globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${orbitron.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}