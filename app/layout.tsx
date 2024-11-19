import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';

import './_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  //   title: 'The Wild Oasis',
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body
        className={` ${josefin.className} min-h-screen 
        antialiased relative bg-primary-950 text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12 ">
          <main className="w-full mx-auto max-w-7xl">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
