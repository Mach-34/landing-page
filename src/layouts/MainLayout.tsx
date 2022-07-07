import { ReactNode } from 'react';
import Header from './components/Header';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';
import logo from 'assets/images/logo.png';
import Footer from './components/Footer';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  backgroundImage: {
    filter: 'blur(10px)',
    opacity: 0.25,
    position: 'fixed',
    right: '-140px',
    transform: 'scale(1.5)',
    top: '-120px',
    zIndex: -1,
  },
  content: {
    minHeight: 'calc(100vh - 90px)',
    padding: '100px 16px',
  },
  [`@media(min-width: ${theme.breakpoints.sm}px)`]: {
    content: {
      paddingInline: '32px',
    },
  },
}));

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const styles = useStyles();
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <img alt='Background' className={styles.backgroundImage} src={logo} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
