import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// hooks
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import ProviderAuth from '../contexts/auth';
import { routes } from '../utils/routesHelper';
// theme
import { GlobalStyle } from 'theme/globalStyle';
// styles
import {
  StyledRoutesContainer,
  StyledContentMain
} from './style';

const InnerApp: React.FC = React.memo(() => {
  // Hooks
  const location = useLocation();
  // Effects
  React.useEffect(() => {
    // Save token redirectoToDate and redirect on local storage.
    if(location.hash !== null && location.pathname.startsWith('/index.html') && !localStorage.getItem('rdr-token')) {
      localStorage.setItem('rdr-redirectToDate', Date.now().toString());
      localStorage.setItem('rdr-redirectTo', location.pathname);
      localStorage.setItem('rdr-token', location.hash.slice(location.hash.indexOf('=') + 1, location.hash.length));
    }

  }, [location]);
  
  const renderRoutes = (
    <React.Suspense>
      <Routes>
        {Object.values(routes).map(route => (
            <Route
              key={route.path}
              path={route.path} 
              element={route.element} 
            />
        ))}
      </Routes>
    </React.Suspense>
  )

  return (
    <>
      {renderRoutes}
    </>
  )
})

const App: React.FC = () => {
  return (
    <ProviderAuth>
      <ThemeProvider theme={{}} >
        <GlobalStyle />
        <StyledContentMain>
          <Sidebar />
          {/* Content routes render */}
          <StyledRoutesContainer>
            <InnerApp />
          </StyledRoutesContainer>
        </StyledContentMain>
      </ThemeProvider>
    </ProviderAuth>
  )
}

export default App