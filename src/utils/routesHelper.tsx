import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const Home = React.lazy(() => import('../pages/Home'));
const Person = React.lazy(() => import('../pages/PersonToGroup'));

interface IRoute {
  path?: string;
  element?: React.ReactNode | null;
}

type CommonJSON<V = any> = {
  [key: string]: V;
};

export const routes: CommonJSON<IRoute> = {
    HOME:{
      path: '/:id_token',
      element: <Home />
    },
    DASHBOARD:{
      path: '/dashboard',
      element: <Dashboard />
    },
    PERSON:{
      path: '/person-to-group',
      element: <Person />
    }
  }