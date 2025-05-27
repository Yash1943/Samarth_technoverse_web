import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import ChatBot from '@/components/shared/ChatBot';
import LenisProvider from '@/components/shared/LenisProvider';
import RouteLoadingOverlay from '@/components/shared/RouteLoadingOverlay';
import LogoCarousel from '@/components/shared/LogoCarousel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samarth Technoverse - IT Solutions & Services',
  description: 'Expert IT services including ERP solutions, web & app development, and technology consultancy for businesses of all sizes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider />
          <RouteLoadingOverlay />
          <Navbar />
          <div className="flex min-h-screen items-center flex-col w-full">
            <main className="flex-1 w-full">{children}</main>
          </div>
          <LogoCarousel />
          <Footer />
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}