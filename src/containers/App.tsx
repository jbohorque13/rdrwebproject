import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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