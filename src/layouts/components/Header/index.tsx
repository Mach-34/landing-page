import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import logoWithText from 'assets/images/logoWithText.png';
import { useNavigate } from 'react-router-dom';
import {
  AboutLocation,
  ContactLocation,
  PortfolioLocation,
  RootLocation,
  TeamLocation,
} from 'Locations';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import { useMedia } from 'contexts/MediaContext';
import { List } from 'react-bootstrap-icons';
import { Mach34Theme } from 'theme';
import MobileMenu from './MobileMenu';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    paddingInline: '32px',
    position: 'relative',
    zIndex: 100,
  },
  hamburger: {
    cursor: 'pointer',
    height: '32px',
    width: '32px',
  },
  logo: {
    cursor: 'pointer',
    height: '60px',
    width: 'auto',
  },
  [`@media(min-width: ${theme.breakpoints.sm}px)`]: {
    container: {
      paddingInline: '64px',
    },
  },
}));

const links = [
  { location: PortfolioLocation, text: 'Portfolio' },
  { location: TeamLocation, text: 'Team' },
  { location: AboutLocation, text: 'About' },
  { location: ContactLocation, text: 'Contact' },
];

export default function Header(): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const { sm } = useMedia();
  const navigate = useNavigate();
  const styles = useStyles();

  useEffect(() => {
    setExpanded(false);
  }, [sm]);

  return (
    <>
      <div className={styles.container}>
        <img
          alt='Logo'
          className={styles.logo}
          onClick={() => navigate(RootLocation)}
          src={logoWithText}
        />
        {sm ? (
          <Flex gap='32px'>
            {links.map((link) => (
              <Typography
                onClick={() => navigate(link.location)}
                key={link.text}
                variant='text5'
              >
                {link.text}
              </Typography>
            ))}
          </Flex>
        ) : (
          <List
            className={styles.hamburger}
            onClick={() => setExpanded(true)}
          />
        )}
      </div>
      {!sm && <MobileMenu onHide={() => setExpanded(false)} open={expanded} />}
    </>
  );
}
