'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileNavToggle from '@/components/MobileNavToggle';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brendan Jonsson | Portfolio",
  description: "Developer portfolio website for Brendan Jonsson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col md:flex-row`}>
        <MobileNavToggle onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
