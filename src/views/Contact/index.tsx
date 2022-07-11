import { useMemo, useState } from 'react';
import Input from 'components/Input';
import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';
import Button from 'components/Button';
import axios from 'axios';

const { REACT_APP_AIRTABLE_API_KEY: AIRTABLE_KEY } = process.env;

const useStyles = createUseStyles({
  inputs: {
    marginInline: 'auto',
  },
  wrapper: {
    backgroundColor: '#10995A',
    borderRadius: '8px',
    marginInline: 'auto',
    maxWidth: '600px',
    padding: '24px',
    textAlign: 'center',
  },
});

export default function Contact(): JSX.Element {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');

  const clear = () => {
    setEmail('');
    setMessage('');
    setName('');
    setOrganization('');
  };

  const disabled = useMemo(() => {
    return !email || !message || !name || !organization;
  }, [email, message, name, organization]);

  const saveResponse = async () => {
    const headers = {
      Authorization: `Bearer ${AIRTABLE_KEY}`,
      'Content-Type': 'application/json',
    };
    const data = {
      fields: {
        Email: email,
        Message: message,
        Name: name,
        Organization: organization,
      },
    };
    await axios.post(
      'https://api.airtable.com/v0/appYcw478ja5MA2Fr/Users',
      data,
      {
        headers,
      }
    );
    clear();
  };

  return (
    <MainLayout>
      <Fade>
        <div className={styles.wrapper}>
          <Typography style={{ color: 'white' }} variant='text3'>
            Contact
          </Typography>
          <div className={styles.inputs}>
            <Input
              id='contact-name'
              label='Name'
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              style={{ marginTop: '24px' }}
              value={name}
            />
            <Input
              id='contact-email'
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              style={{ marginTop: '24px' }}
              value={email}
            />
            <Input
              id='contact-organization'
              label='Organization'
              onChange={(e) => setOrganization(e.target.value)}
              placeholder='Organization'
              style={{ marginTop: '24px' }}
              value={organization}
            />
            <Input
              id='contact-message'
              label='Message'
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message'
              rows={5}
              style={{ marginTop: '24px', width: '100%' }}
              textarea
              value={message}
            />
          </div>
          <Button
            disabled={disabled}
            onChange={() => saveResponse()}
            style={{ marginTop: '24px' }}
            text='Send'
          />
        </div>
      </Fade>
    </MainLayout>
  );
}
