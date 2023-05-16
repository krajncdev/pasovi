import { ToastContainer } from 'react-toastify';
import { Providers } from './providers';

import '@/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Pasovi štern',
  description: 'Prodaja pasov za harmoniko preko spleta',
  keywords: [
    'pasovi za harmoniko',
    'harmonika pasi',
    'pasi za harmoniko',
    'pasovi za diatonično harmoniko',
    'pasovi za klavirsko harmoniko',
    'trakovi za harmoniko',
    'pasovi za harmoniko na spletu',
    'diatonični pasovi za harmoniko',
    'klavirski pasovi za harmoniko',
    'usnjeni pasovi za harmoniko',
    'pasovi za harmoniko za prodajo',
    'kakovostni pasovi za harmoniko',
    'udobni pasovi za harmoniko',
    'pasovi za harmoniko za začetnike',
    'pasovi za harmoniko za profesionalce',
    'pasovi za harmoniko po meri',
    'ročno izdelani pasovi za harmoniko',
    'trpežni pasovi za harmoniko',
    'pasovi za harmoniko z brezplačno dostavo',
    'pasovi za harmoniko iz usnja',
    'pasovi za harmoniko za moške',
    'pasovi za harmoniko za ženske',
  ],
  creator: 'Jaka Krajnc',
  publisher: 'Jaka Krajnc',
  applicationName: 'pasovi',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=' font-poppins p-0 m-0 '>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
