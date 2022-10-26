import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { routes } from './utils/routesHelper';

const InnerApp: React.FC = React.memo(() => {
  const renderRoutes = (
    <React.Suspense>
      <Routes>
        {Object.values(routes).map(route => (
            <Route path={route.path} />
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
    <div>
      <Sidebar />
      <InnerApp />
    </div>
  )
}

export default App