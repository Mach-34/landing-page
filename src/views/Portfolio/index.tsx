import { useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from './data';

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

  const cardMargin = (index: number) => {
    if (!index) {
      return {};
    } else if (index % 2 === 1) {
      return { margin: '32px 0px 0px auto' };
    } else {
      return { marginTop: '32px' };
    }
  };

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
        {PROJECTS.map((project, index) => (
          <div className={styles.card} style={cardMargin(index)}>
            <Flex alignItems='center' gap='16px'>
              <img
                alt={project.logoAlt}
                className={styles.image}
                src={project.logo}
              />
              <Typography variant='text3'>{project.title}</Typography>
            </Flex>
            {project.videoHeader && (
              <Typography
                paragraph
                variant='body1'
                style={{ color: '#10995A', marginTop: '8px' }}
              >
                <b>{project.videoHeader}</b>
              </Typography>
            )}
            {project.videoLink && (
              <iframe
                allowFullScreen
                height='250px'
                src={project.videoLink}
                style={{ border: 'none', marginTop: '24px' }}
                title={project.videoTitle}
                width='100%'
              />
            )}
            <Typography paragraph style={{ marginTop: '24px' }} variant='body1'>
              {project.content}
            </Typography>
            <div style={{ marginTop: '16px' }}>
              {!!project.links?.length && (
                <>
                  <Typography style={{ color: '#10995A' }} variant='text5'>
                    <b>Links</b>
                  </Typography>
                  <ul>
                    {project.links.map(({ link, text }) => (
                      <li style={{ marginTop: '8px' }}>
                        <a href={link} rel='noreferrer' target='_blank'>
                          {text || link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
