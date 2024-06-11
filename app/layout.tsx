import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { CookiesProvider } from 'next-client-cookies/server';
 
export default function RootLayout( { children, } : { children: React.ReactNode; } ) {
  return (
    <html lang="en">
      <CookiesProvider>{children}</CookiesProvider>
      <body className={`${inter.className} antialiased`}></body>
    </html>
  );
} 