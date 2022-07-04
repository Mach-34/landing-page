import { Route, Routes as DOMRoutes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import AboutView from './views/About';
import ContactView from './views/Contact';
import HomeView from './views/Home';
import PriorWorkView from 'views/PriorWork';
import {
  AboutLocation,
  ContactLocation,
  PriorWorkLocation,
  RootLocation,
} from './Locations';

export default function Routes(): JSX.Element {
  const routes = [
    {
      component: <HomeView />,
      path: RootLocation,
    },
    {
      component: <AboutView />,
      path: AboutLocation,
    },
    {
      component: <ContactView />,
      path: ContactLocation,
    },
    {
      component: <PriorWorkView />,
      path: PriorWorkLocation,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <DOMRoutes>
        {routes.map((route) => (
          <Route element={route.component} key={route.path} path={route.path} />
        ))}
      </DOMRoutes>
    </>
  );
}
