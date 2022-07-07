import { createUseStyles } from 'react-jss';
import logo from 'assets/images/logo.png';
import { X } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import { AboutLocation, ContactLocation, PriorWorkLocation } from 'Locations';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles({
  close: {
    cursor: 'pointer',
    display: 'block',
    height: '32px',
    marginLeft: 'auto',
    width: '32px',
  },
  content: {
    height: '100%',
    position: 'relative',
  },
  logo: {
    bottom: 0,
    left: 0,
    height: 'auto',
    margin: 'auto',
    opacity: 0.2,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '450px',
    zIndex: -1,
  },
  wrapper: (props: MobileMenuStyleProps) => ({
    backgroundColor: 'white',
    boxSizing: 'border-box',
    height: '100vh',
    padding: '32px',
    position: 'fixed',
    transform: props.open ? 'translateY(0%)' : 'translateY(100vh)',
    transition: '.3s transform',
    top: 0,
    width: '100vw',
    zIndex: 1000,
  }),
});

type MobileMenuProps = {
  onHide: () => void;
  open: boolean;
};

type MobileMenuStyleProps = Pick<MobileMenuProps, 'open'>;

export default function MobileMenu({
  onHide,
  open,
}: MobileMenuProps): JSX.Element {
  const navigate = useNavigate();
  const styles = useStyles({ open });

  const links = [
    { location: PriorWorkLocation, text: 'Prior work' },
    { location: AboutLocation, text: 'About' },
    { location: ContactLocation, text: 'Contact' },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img alt='Logo' className={styles.logo} src={logo} />
        <X className={styles.close} onClick={() => onHide()} />
        <Flex
          alignItems='center'
          direction='column'
          gap='64px'
          justifyContent='center'
          style={{ height: '100%', textAlign: 'center' }}
        >
          {links.map((link) => (
            <Typography onClick={() => navigate(link.location)} variant='text5'>
              {link.text}
            </Typography>
          ))}
        </Flex>
      </div>
    </div>
  );
}
