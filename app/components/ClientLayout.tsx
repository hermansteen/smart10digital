"use client"
import { TeamsProvider } from '../context/TeamsContext';
import GlobalEffects from './GlobalEffects';

export default function ClientLayout({
  children,
  geistSans,
  geistMono,
}: {
  children: React.ReactNode;
  geistSans: string;
  geistMono: string;
}) {
  return (
    <body className={`${geistSans} ${geistMono} antialiased`}>
      <TeamsProvider>
        <GlobalEffects />
        {children}
      </TeamsProvider>
    </body>
  );
} 