import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Switch } from './switch';
import Link from 'next/link';
import { getStaticParams } from '../../../locales/server'

export function generateStaticParams() {
  return getStaticParams()
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heco Workflow",
  description: "Github Workflow in Heco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ul>
            <li>
              <Link href="/en">
                <button style={{
                  padding: '5px 10px',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Home
                </button>
              </Link>
            </li>
          </ul>
          <div>
            {/* Uncomment the suspense boundary if using `preserveSearchParams` in `useChangeLocale()` */}
            {/* <Suspense> */}
            <Switch />
            {/* </Suspense> */}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
