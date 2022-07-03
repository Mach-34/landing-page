import {
  BrowserRouter as Router,
  Route,
  Routes as DOMRoutes,
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import HomeView from './views/Home';
import { RootLocation } from './Locations';

export default function Routes(): JSX.Element {
  const routes = [
    {
      component: <HomeView />,
      path: RootLocation,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <DOMRoutes>
        {/* {routes.map((route) => (
            <Route
              element={route.component}
              key={route.path}
              path={route.path}
            />
          ))} */}
        <Route element={<HomeView />} path={RootLocation} />
      </DOMRoutes>
    </>
  );
}
