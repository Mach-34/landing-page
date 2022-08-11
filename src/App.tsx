import ReactGA from 'react-ga';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import MediaProvider from 'contexts/MediaContext';
import { theme } from 'theme';
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';

const browserHistory = createBrowserHistory();

function App() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID ?? '');

  browserHistory.listen((location: any) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <MediaProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </MediaProvider>
  );
}

export default App;
