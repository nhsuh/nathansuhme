import './globals.css';
import { Playfair_Display, Source_Sans_3, Bruno_Ace } from 'next/font/google';
import { ThemeProvider } from '@components/ThemeProvider';
import Navbar from '@components/Navbar';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  display: 'swap'
});

const brunoAce = Bruno_Ace({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-bruno-ace',
  display: 'swap'
});

export const metadata = {
  title: 'Nathan Suh – Software Engineer',
  description: 'Personal site of Nathan Suh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${brunoAce.variable}`}> 
      <body className="font-body bg-background-light text-neutral-900 dark:bg-background-dark dark:text-neutral-100">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 