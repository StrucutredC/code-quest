import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'CODE QUEST — Aprende C jugando', description: 'Entrena programación en C con retos, niveles y misiones.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
