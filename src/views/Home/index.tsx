import Flex from 'components/Flex';
import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';

const useStyles = createUseStyles({
  container: {
    textAlign: 'center',
  },
});

export default function Home(): JSX.Element {
  const styles = useStyles();
  return (
    <MainLayout>
      <div className={styles.container}>
        <Typography style={{ color: '#10995A' }} variant='heading1'>
          <Fade bottom cascade>
            Mach 34
          </Fade>
        </Typography>
        <Typography
          style={{
            color: '#10995A',
            margin: '32px auto 0px auto',
            maxWidth: '600px',
          }}
          variant='text4'
        >
          <Fade bottom delay={1000}>
            <Flex gap='8px' justifyContent='center' wrap='wrap'>
              <div>Ceramic</div>
              <div>·</div>
              <div>React</div>
              <div>·</div>
              <div>Smart Contracts</div>
              <div>·</div>
              <div>Subgraph</div>
              <div>·</div>
              <div>Zero Knowledge</div>
            </Flex>
          </Fade>
        </Typography>
      </div>
    </MainLayout>
  );
}
