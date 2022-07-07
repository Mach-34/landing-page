import MainLayout from 'layouts/MainLayout';
import Rotate from 'react-reveal/Rotate';
import { createUseStyles } from 'react-jss';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import blitz from 'assets/images/blitz.svg';
import rigor from 'assets/images/rigor.svg';

const useStyles = createUseStyles({
  card: {
    backgroundColor: 'white',
    border: '1px solid #10995A',
    borderRadius: '8px',
    maxWidth: '500px',
    padding: '24px',
  },
  content: {
    marginInline: 'auto',
    maxWidth: '1000px',
  },
  image: {
    height: '40px',
    width: '40px',
  },
});

export default function PriorWork(): JSX.Element {
  const styles = useStyles();
  return (
    <MainLayout>
      <div className={styles.content}>
        <Rotate left top>
          <div className={styles.card}>
            <Flex alignItems='center' gap='16px'>
              <img alt='Rigor' className={styles.image} src={rigor} />
              <Typography variant='text3'>Rigor</Typography>
            </Flex>
            <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
              Lorum impsum impsum impsum impsum impsum impsum impsum impsum
              impsum impsum impsum impsum impsum impsum impsum impsum impsum
              impsum impsum impsum impsum impsum impsum impsum impsum impsum ...
            </Typography>
          </div>
        </Rotate>
        <Rotate bottom right>
          <div className={styles.card} style={{ margin: '32px 0px 0px auto' }}>
            <Flex alignItems='center' gap='16px'>
              <img alt='Rigor' className={styles.image} src={blitz} />
              <Typography variant='text3'>Blitz</Typography>
            </Flex>
            <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
              Lorum impsum impsum impsum impsum impsum impsum impsum impsum
              impsum impsum impsum impsum impsum impsum impsum impsum impsum
              impsum impsum impsum impsum impsum impsum impsum impsum impsum ...
            </Typography>
          </div>
        </Rotate>
      </div>
    </MainLayout>
  );
}
