import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import MediaProvider from 'contexts/MediaContext';
import { theme } from 'theme';
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
