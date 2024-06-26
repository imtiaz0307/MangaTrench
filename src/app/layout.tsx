// Lib Imports.
import { Inter } from 'next/font/google';

// Local Imports.
import './globals.css';

// Font.
const inter = Inter({ subsets: ['latin'] });

// Types.
type Props = {
  children: React.ReactNode;
};

// Components.
export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
