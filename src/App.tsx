import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ProviderAuth from './contexts/auth';
import { routes } from './utils/routesHelper';

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
      <div>
        {renderRoutes}
      </div>
    </>
  )
})

const App: React.FC = () => {
  return (
    <ProviderAuth>
      <Sidebar />
      <InnerApp />
    </ProviderAuth>
  )
}

export default App