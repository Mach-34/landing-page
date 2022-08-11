import ReactGA from 'react-ga';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import MediaProvider from 'contexts/MediaContext';
import { theme } from 'theme';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID ?? '');
ReactGA.pageview(window.location.pathname + window.location.search);

browserHistory.listen((location: any) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
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
