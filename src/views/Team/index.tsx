import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Slide from 'react-reveal/Slide';
import Flex from 'components/Flex';
import ian from 'assets/images/ian.png';
import jack from 'assets/images/jack.png';
import { useMedia } from 'contexts/MediaContext';
import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';

const useStyles = createUseStyles({
  content: {
    marginInline: 'auto',
    maxWidth: '850px',
  },
  image: {
    aspectRatio: 2 / 2,
    borderRadius: '12px',
    width: '300px',
  },
});

export default function Team(): JSX.Element {
  const { sm } = useMedia();
  const styles = useStyles();
  return (
    <MainLayout>
      <div className={styles.content}>
        <Slide left>
          <Flex
            alignItems={sm ? 'flex-start' : 'center'}
            direction={sm ? 'row' : 'column'}
            gap='16px'
            mb='48px'
          >
            <img alt='Jack Gilcrest' className={styles.image} src={jack} />
            <div>
              <Typography variant='text3'>Jack Gilcrest</Typography>
              <Typography
                style={{ color: '#969696', marginTop: '4px' }}
                variant='text6'
              >
                <i>Co-Founder / CEO</i>
              </Typography>
              <Flex alignItems='center' gap='8px' mt='12px'>
                <a
                  href='https://github.com/jp4g'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Github fill='black' />
                </a>
                <a
                  href='https://www.linkedin.com/in/jp4g/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Linkedin fill='black' />
                </a>
                <a
                  href='mailto:jp4g@mach34.space'
                  rel='noreferrer'
                  target='_blank'
                >
                  <EnvelopeFill fill='black' />
                </a>
              </Flex>
              <Typography
                paragraph
                style={{ maxWidth: '450px', marginTop: '12px' }}
                variant='body2'
              >
                2018 published 'Smart Contracts: Legal Considerations' to IEEE
                Big Data ‘18. 2019 contributed to EVM-based small claims
                insurance protocol TandaPay. 2020 served as President of Miami
                University Blockchain Club; led consultation for Senary Ventures
                on first proof of concept of DeFi home construction loan
                platform Rigor. 2021 orchestrated automated AUM infrastructure,
                ERC1404 security token and web hosting for Senary Ventures
                Commonwealth fund; further contributed to matured Rigor protocol
                codebase. 2022 7th place winner of EthDenver with BattleZips
                (see Overview); Chair of Smart Contracts on the Blockchain Cross
                Sector Council at Infragard.
              </Typography>
            </div>
          </Flex>
          <div style={{ width: '50px' }} />
        </Slide>
        <Slide right>
          <Flex justifyContent={sm ? 'space-between' : 'center'} mb='48px'>
            {sm && <div style={{ width: '50px' }} />}
            <Flex
              alignItems={sm ? 'flex-start' : 'center'}
              direction={sm ? 'row' : 'column-reverse'}
              gap='16px'
            >
              <div>
                <Typography variant='text3'>Ian Brighton</Typography>
                <Typography
                  style={{ color: '#969696', marginTop: '4px' }}
                  variant='text6'
                >
                  <i>Co-Founder / CTO</i>
                </Typography>
                <Flex alignItems='center' gap='8px' mt='12px'>
                  <a
                    href='https://github.com/Ian-Bright'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Github fill='black' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/ian-brighton/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Linkedin fill='black' />
                  </a>
                  <a
                    href='mailto:ian@mach34.space'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <EnvelopeFill fill='black' />
                  </a>
                </Flex>
                <Typography
                  paragraph
                  style={{ maxWidth: '450px', marginTop: '12px' }}
                  variant='body2'
                >
                  One of the lead developers of the Miami University Blockchain
                  Club incentive token project. Web3 Engineer for Senary
                  Ventures on the precursor to what is now Rigor. Provided
                  full-stack development skills to Senary’s fund, Commonwealth.
                  Currently a core team member at Rigor as well a founding
                  member of PlazaDAO, a service DAO providing top tier Web3
                  development expertise to the space. Primary skillset is
                  front-end development, smart contract & web3 integrations, and
                  subgraph development.
                </Typography>
              </div>
              <img alt='Ian Brighton' className={styles.image} src={ian} />
            </Flex>
          </Flex>
        </Slide>
      </div>
    </MainLayout>
  );
}
