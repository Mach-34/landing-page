import { ReactNode, useEffect } from 'react';
import Header from './components/Header';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';
import logo from 'assets/images/logo.png';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

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
    minHeight: 'calc(100vh - 240px)',
    padding: '80px 16px',
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
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID ?? '');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <img alt='Background' className={styles.backgroundImage} src={logo} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
