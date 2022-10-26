import React from 'react';

import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home';
import Person from '../pages/PersonToGroup';

interface IRoute {
  path?: string;
  element?: () => JSX.Element;
}

type CommonJSON<V = any> = {
  [key: string]: V;
};

export const routes: CommonJSON<IRoute> = {
    HOME:{
      path: '/',
      element: Home
    },
    DASHBOARD:{
      path: '/dashboard',
      element: Dashboard
    },
    PERSON:{
      path: '/person-to-group',
      element: Person
    }
  }