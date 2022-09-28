import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';

const useStyles = createUseStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 400px)',
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
            Mach34
          </Fade>
        </Typography>
        <Typography
          paragraph
          style={{
            color: '#10995A',
            margin: '32px auto 0px auto',
            maxWidth: '600px',
          }}
          variant='text4'
        >
          <Fade bottom delay={1000}>
            <div>
              A full-stack web3 consultancy specializing in applied zero
              knowledge cryptography
            </div>
          </Fade>
        </Typography>
      </div>
    </MainLayout>
  );
}
