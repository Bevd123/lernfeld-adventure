import React from "react";
import { inter } from '@/app/ui/fonts';

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
      <html lang="de">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html> 
    );
  } 