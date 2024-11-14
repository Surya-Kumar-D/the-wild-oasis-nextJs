import Logo from './components/Logo';
import Navigation from './components/Navigation';
import './globals.css';
export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body>
        <>
          <header>
            <Logo /> <Navigation />
          </header>

          <main>{children}</main>
        </>
      </body>
    </html>
  );
}
