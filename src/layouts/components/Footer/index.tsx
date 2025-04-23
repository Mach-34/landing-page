import Typography from 'components/Typography';
import { createUseStyles } from 'react-jss';
import { Github, Linkedin, Youtube } from 'react-bootstrap-icons';
import Flex from 'components/Flex';

const useStyles = createUseStyles({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#10995A',
    bottom: 0,
    boxSizing: 'border-box',
    display: 'flex',
    height: '40px',
    justifyContent: 'space-between',
    paddingInline: '32px',
    position: 'absolute',
    width: '100%',
  },
});

export default function Footer(): JSX.Element {
  const styles = useStyles();
  return (
    <footer className={styles.wrapper}>
      <div>
        <Typography style={{ color: 'white' }} variant='text5'>
          @ Copyright {new Date().getFullYear()} Mach34
        </Typography>
      </div>
      <Flex alignItems='center' gap='16px'>
        <a href='https://github.com/Mach-34' rel='noreferrer' target='_blank'>
          <Github fill='white' />
        </a>
        <a
          href='https://www.linkedin.com/company/81878456'
          rel='noreferrer'
          target='_blank'
        >
          <Linkedin fill='white' />
        </a>
        <a
          href='https://www.youtube.com/channel/UClAhjO4IQzqOSk1u6JGUlLQ'
          rel='noreferrer'
          target='_blank'
        >
          <Youtube fill='white' />
        </a>
      </Flex>
    </footer>
  );
}
