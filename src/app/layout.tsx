import { ReactNode } from 'react';
import './styles.css';
import './variables.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {

  return (
    <html lang="uk">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
