import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';

const useStyles = createUseStyles({
  section: {
    marginInline: 'auto',
    textAlign: 'center',
    width: 'min(850px, 100%)',
  },
});

export default function About(): JSX.Element {
  const styles = useStyles();
  return (
    <MainLayout>
      <div className={styles.section} style={{ textAlign: 'left' }}>
        <Fade cascade>
          <Typography style={{ color: '#10995A' }} variant='text2'>
            Mach34 is a full stack software consultancy that advises on, builds
            and deploys the infrastructure needed to bring your web3 ideas into
            production. React, EVM smart contracts, subgraphs, DID, and AUM
            Calculation/ RPC ETL are some of the most popular systems requested
            by our clients, though we are capable of handling direct/ special
            requests for your dApp. We are quickly capable of scaling up team
            size with trusted subcontractors depending on your timeline's
            urgency.
          </Typography>
          <br />
          <Typography style={{ color: '#10995A' }} variant='text2'>
            Please note that we have a special focus in the application of Zero
            Knowledge cryptography. This enables the verification of private
            data on a public blockchain. Furthermore, clever algorithmic use of
            these proofs can be applied in the form of a Zero Knowledge roll-up
            to gain up to 10,000x increase in transaction efficiency for your
            users.
          </Typography>
          <br />
          <Typography style={{ color: '#10995A' }} variant='text2'>
            Reach out if you have any web3 woes - we can solve them!
          </Typography>
        </Fade>
      </div>
      <Fade>
        <div className={styles.section} style={{ marginTop: '64px' }}>
          <Typography variant='text2'>
            BattleZips Privacy Stack (EthDenver 2022)
          </Typography>
          <YouTube
            opts={{ height: '400px', width: '100%' }}
            style={{ marginTop: '24px' }}
            videoId='wAFJ1mJO0d0'
          />
          <a
            href='https://dorahacks.io/grant/ethdenver22/top'
            rel='noreferrer'
            style={{ marginTop: '8px' }}
            target='_blank'
          >
            https://dorahacks.io/grant/ethdenver22/top
          </a>
        </div>
      </Fade>
    </MainLayout>
  );
}
