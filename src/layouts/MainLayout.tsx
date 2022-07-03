import { ReactNode } from 'react';
import Header from './components/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
