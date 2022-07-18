import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import { useMedia } from 'contexts/MediaContext';
import Fade from 'react-reveal/Fade';
import about from 'assets/images/about.jpg';

const useStyles = createUseStyles({
  section: {
    marginInline: 'auto',
    textAlign: 'center',
    width: 'min(850px, 60%)',
  },
  image: {
    marginInline: 'auto',
    width: 'min(850px, 40%)',
  },
  span: {
    color: '#10995A',
    'font-weight': 'bold'
  },
  content: {
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'row'
  },
  "@media (max-width: 999px)": {
    content: {
      marginInline: 'auto',
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    image: {
      marginInline: 'auto',
      width: '90%'
    },
    section: {
      marginInline: 'auto',
      width: '90%',
      textAlign: 'center',
      padding: '2em'
    }
  }
});

export default function About(): JSX.Element {
  const styles = useStyles();
  const { sm } = useMedia();
  return (
    <MainLayout>
      <Fade>
        <div className={styles.content}>
          <div className={styles.section} style={{ textAlign: 'left' }}>
            <Typography style={{ color: '#000000' }} variant={sm ? 'text3' : 'text2'}>
              <span className={styles.span}>Mach34</span> is a full stack software consultancy that advises on, builds
              and deploys the infrastructure needed to bring your web3 ideas into
              production. React, EVM smart contracts, subgraphs, DID, and AUM
              Calculation/ RPC ETL are some of the most popular systems requested
              by our clients, though we are capable of handling direct/ special
              requests for your dApp. We are quickly capable of scaling up team
              size with trusted subcontractors depending on your timeline's
              urgency.
            </Typography>
            <br />
            <Typography style={{ color: '#000000' }} variant={sm ? 'text3' : 'text2'}>
              Please note that we have a special focus in the application of <span className={styles.span}>Zero
                Knowledge cryptography</span>. This enables the verification of private
              data on a public blockchain. Furthermore, clever algorithmic use of
              these proofs can be applied in the form of a Zero Knowledge roll-up
              to gain up to <span className={styles.span}>10,000x increase in transaction efficiency</span> for your
              users.
            </Typography>
            <br />
            <Typography style={{ color: '#10995A' }} variant={sm ? 'text3' : 'text2'}>
              <span className={styles.span}>Reach out if you have any web3 woes - we can solve them!</span>
            </Typography>
          </div>
          <img alt='Mach34 Team On-Stage at EthDenver' className={styles.image} src={about} />

        </div>
      </Fade>
    </MainLayout>
  );
}
