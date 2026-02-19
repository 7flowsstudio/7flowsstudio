import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // This component is now deprecated and its functionality has been moved to the layout files
  // Keeping it for backward compatibility but it just returns children
  return <>{children}</>;
}
