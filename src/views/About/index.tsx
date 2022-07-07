import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Slide from 'react-reveal/Slide';
import Flex from 'components/Flex';
import ian from 'assets/images/ian.png';
import jack from 'assets/images/jack.png';
import { useMedia } from 'contexts/MediaContext';

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

export default function About(): JSX.Element {
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
              <Typography
                paragraph
                style={{ maxWidth: '350px', marginTop: '12px' }}
                variant='body2'
              >
                Lorum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                ipsum ipsum ipsum ipsum ...
              </Typography>
            </div>
          </Flex>
          <div style={{ width: '50px' }} />
        </Slide>
        <Slide right>
          <Flex justifyContent={sm ? 'space-between' : 'center'}>
            {sm && <div style={{ width: '50px' }} />}
            <Flex
              alignItems={sm ? 'flex-start' : 'center'}
              direction={sm ? 'row' : 'column-reverse'}
              gap='16px'
              mt='48px'
            >
              <div>
                <Typography variant='text3'>Ian Brighton</Typography>
                <Typography
                  style={{ color: '#969696', marginTop: '4px' }}
                  variant='text6'
                >
                  <i>Co-Founder / CTO</i>
                </Typography>
                <Typography
                  paragraph
                  style={{ maxWidth: '350px', marginTop: '12px' }}
                  variant='body2'
                >
                  Lorum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                  ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                  ipsum ipsum ipsum ipsum ...
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
