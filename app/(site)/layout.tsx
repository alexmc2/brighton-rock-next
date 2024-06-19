// app/(site)/layout.tsx
import '../globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/Header';

export const metadata = {
  title: 'Brighton Rock Housing Co-operative',
  description:
    'A small housing co-op established in 1987, located in West Hove',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <AppRouterCacheProvider>
          <Header />
          <main>{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
