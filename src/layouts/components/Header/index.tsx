import { createUseStyles } from 'react-jss';
import logoWithText from 'assets/images/logoWithText.png';
import { useNavigate } from 'react-router-dom';
import {
  AboutLocation,
  ContactLocation,
  PriorWorkLocation,
  RootLocation,
} from 'Locations';
import Flex from 'components/Flex';

const useStyles = createUseStyles({
  container: {
    alignItems: 'center',
    borderBottom: '1px solid #10995A',
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    paddingInline: '16px',
  },
  logo: {
    cursor: 'pointer',
    height: '65px',
    width: 'auto',
  },
});

const links = [
  { location: PriorWorkLocation, text: 'Prior work' },
  { location: AboutLocation, text: 'About' },
  { location: ContactLocation, text: 'Contact' },
];

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img
        alt='Logo'
        className={styles.logo}
        onClick={() => navigate(RootLocation)}
        src={logoWithText}
      />
      <Flex gap='24px'>
        {links.map((link) => (
          <div onClick={() => navigate(link.location)}>{link.text}</div>
        ))}
      </Flex>
      <div>Add something here</div>
    </div>
  );
}
