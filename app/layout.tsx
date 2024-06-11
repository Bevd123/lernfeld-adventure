import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { CookiesProvider } from 'next-client-cookies/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout( { children, } : { children: React.ReactNode; } ) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <CookiesProvider>{children}</CookiesProvider>
      <body className={`${inter.className} antialiased`}></body>
    </html>
  );
} 