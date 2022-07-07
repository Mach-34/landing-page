import Typography from 'components/Typography';
import { createUseStyles } from 'react-jss';
import { Linkedin, Youtube } from 'react-bootstrap-icons';
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
    <div className={styles.wrapper}>
      <div>
        <Typography style={{ color: 'white' }} variant='text5'>
          @ Copyright {new Date().getFullYear()} Mach34
        </Typography>
      </div>
      <Flex gap='16px'>
        <Linkedin
          fill='white'
          onClick={() =>
            window.open('https://www.linkedin.com/company/81878456', '_blank')
          }
          style={{ cursor: 'pointer' }}
        />
        <Youtube
          fill='white'
          onClick={() =>
            window.open(
              'https://www.youtube.com/channel/UClAhjO4IQzqOSk1u6JGUlLQ',
              '_blank'
            )
          }
          style={{ cursor: 'pointer' }}
        />
      </Flex>
    </div>
  );
}
