import { useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import aztec from 'assets/images/aztec.jpeg';
import battlezips from 'assets/images/battlezips.png';
import blitz from 'assets/images/blitz.svg';
import rigor from 'assets/images/rigor.svg';
import { useLocation } from 'react-router-dom';

const useStyles = createUseStyles({
  card: {
    backgroundColor: 'white',
    border: '1px solid #10995A',
    borderRadius: '8px',
    maxWidth: '600px',
    padding: '24px',
  },
  content: {
    marginInline: 'auto',
    maxWidth: '1000px',
  },
  image: {
    borderRadius: '8px',
    height: '40px',
    width: '40px',
  },
});

export default function Portfolio(): JSX.Element {
  const location = useLocation();
  const styles = useStyles();

  useEffect(() => {
    // TODO: Change to ref
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  return (
    <MainLayout>
      <div className={styles.content}>
        <div className={styles.card}>
          <Flex alignItems='center' gap='16px'>
            <img alt='Rigor' className={styles.image} src={rigor} />
            <Typography variant='text3'>Rigor</Typography>
          </Flex>
          <iframe
            allowFullScreen
            height='250px'
            src='https://www.youtube.com/embed/JW0tFoB8TBs'
            style={{ border: 'none', marginTop: '24px' }}
            title='Rigor'
            width='100%'
          />
          <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
            <a href='https://rigor.build/'>Rigor</a> is a home construction ERP
            and invoice factoring solution settled on the Ethereum blockchain.
            Mach 34 had the privilege of developing the proof of concept for
            Rigor as their first consultation. In the nearly 2 years since
            delivery, Rigor has raised over $3.5 million, hired an in-house dev
            team, and begun selling homes whose construction was financed and
            managed via Rigor's production beta software. Check out the video
            testimonial from the client to hear more about how Mach 34 can help
            you bring your innovative web3 product ideas into reality!
          </Typography>
        </div>
        <div className={styles.card} style={{ margin: '32px 0px 0px auto' }}>
          <Flex alignItems='center' gap='16px'>
            <img alt='Aztec' className={styles.image} src={aztec} />
            <Typography variant='text3'>Aztec / BattleZips-Noir</Typography>
          </Flex>
          <iframe
            allowFullScreen
            height='250px'
            src='https://www.youtube.com/embed/videoseries?list=PLabpoAlaCBY3SM6xHmZCOhPHlmLB4EY6H'
            style={{ border: 'none', marginTop: '24px' }}
            title='BattleZips-Noir'
            width='100%'
          />
          <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
            <a href='https://aztec.network/'>Aztec</a> is a pioneer in the world
            of zero-knowledge cryptography. They are the birthplace of the{' '}
            <a href='https://eprint.iacr.org/2019/953.pdf'>PlonK</a> proving
            system and the creators of{' '}
            <a href='https://aztec.network/connect'>Aztec Connect</a> (now
            sunset). Their latest contribution to the world of zero-knowledge
            cryptography is the creation of a new ZK DSL named{' '}
            <a href='https://noir-lang.org/'>Noir</a>. The language aims to
            relieve the burdenous tasks of learning the underlying mathematics
            and cryptographic principles that enable ZK. <br />
            <br /> Mach 34 was awarded a grant by Aztec to produce a video
            series and written documentation demonstrating how to write circuits
            in Noir and integrate them in a frontend application. We did this
            re-writing the{' '}
            <a href='https://github.com/BattleZips/BattleZips'>
              BattleZips
            </a>{' '}
            circuits from Circom into Noir.
          </Typography>
        </div>
        <div className={styles.card} id='blitz' style={{ marginTop: '32px' }}>
          <Flex alignItems='center' gap='16px'>
            <img alt='Blitz' className={styles.image} src={blitz} />
            <Typography variant='text3'>Blitz</Typography>
          </Flex>
          <Typography
            paragraph
            variant='body1'
            style={{ color: '#10995A', marginTop: '8px' }}
          >
            <b>
              "...the product was a super competitive product on the
              market...would definitely recommend these guys if you're looking
              to build out a product in crypto or web3" - Myth, Owner of Blitz
            </b>
          </Typography>
          <iframe
            allowFullScreen
            height='250px'
            src='https://www.youtube.com/embed/nH3AIaD_qYk'
            style={{ border: 'none', marginTop: '24px' }}
            title='Battlezips'
            width='100%'
          />
          <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
            Blitz, was an MVP for a Magic Eden (Solana) NFT sniper web app. With
            our help, Blitz went from an idea to a serious threat to existing
            SaaS Solana NFT token snipers on the market. To build a superior
            product, we abstracted different ETL steps across an AWS serverless
            stack designed to maximize availability and reliability regardless
            of transaction throughput or Blitz user volume.
            <br />
            <br />
            Services: Software Engineering, R&D, Cloud, Blockchain ETL, React,
            Backend/ API
          </Typography>
        </div>
        <div
          className={styles.card}
          id='battlezips'
          style={{ margin: '32px 0px 0px auto' }}
        >
          <Flex alignItems='center' gap='16px'>
            <img
              alt='BattleZips Privacy Stack'
              className={styles.image}
              src={battlezips}
            />
            <Typography variant='text3'>BattleZips Privacy Stack</Typography>
          </Flex>
          <Typography
            paragraph
            variant='body1'
            style={{ color: '#10995A', marginTop: '8px' }}
          >
            <b>
              Won 6th out of 171 participating teams at{' '}
              <a href='https://dorahacks.io/grant/ethdenver22/top'>
                EthDenver 2022
              </a>
            </b>
          </Typography>
          <iframe
            allowFullScreen
            height='250px'
            src='https://www.youtube.com/embed/wAFJ1mJO0d0'
            style={{ border: 'none', marginTop: '24px' }}
            title='Battlezips'
            width='100%'
          />
          <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
            <a href='https://github.com/jp4g/battlezips'>BattleZips</a> is a
            demonstration of Zero Knowledge cryptography applied to layer 1 EVM
            contracts to play hidden information games in public execution
            environments. Written in Solidity, SnarkJS, and Circom, this stack
            was built as a demonstration to ourselves and others of our
            capability in applying zero knowledge to arbitrary business logic.
            BattleZips Privacy Stack presented February 2022 at EthDenver.
            <br />
            Disclaimer: The same individuals comprise the teams of Mach 34 and
            BattleZips, but BattleZips is not a Mach 34 project. No organization
            that affiliates with BattleZips should also be perceived as
            affiliating with Mach 34. BattleZips is open source as licensed
            under CC-BY-SA 4.0 (V1) and GNU GPLv3 (V2).
            <br />
            <br />
            Services: Zero Knowledge, Cryptography, Smart Contracts, Subgraphs,
            Metatransactions, IPFS, R&D
          </Typography>
        </div>
      </div>
    </MainLayout>
  );
}
