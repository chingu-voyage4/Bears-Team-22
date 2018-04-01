import React from 'react';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/employee/profile/userProfile';

const routes = [

  {
    path: '/employee/profile',
    exact: true,
    component: () => (
      <div className="app-routes">
        <UserProfile />
      </div>
    )
  },
];

export default routes;
