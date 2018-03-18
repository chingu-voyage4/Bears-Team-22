/* eslint-disable react/display-name */
import React from 'react';
// import { withRouter } from 'react-router-dom';
import HomePage from './../components/homepage/Home';
import Jobs from './../components/jobs/Jobs';
import JobAdd from './../components/jobs/JobAdd';
import UserProfile from './../components/userProfile/UserProfile';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/jobs',
    exact: true,
    component: Jobs
  },

  {
    path: '/jobs/add',
    component: () => (
      <div className="app-routes">
        <JobAdd />
      </div>
    )
  },

  {
    path: '/login',
    component: () => (
      <div className="app-routes">
        {/* replace for a component */}
        <h1> employee login </h1>
      </div>
    )
  },

  {
    path: '/join',
    component: () => (
      <div className="app-routes">
        {/* replace for a component */}
        <h1> employee registration </h1>
      </div>
    )
  },
  {
    path: '/employee',
    component: () => (
      <div className="app-routes">
        {/* replace for a component */}
        <h1> employee stuff here </h1>
      </div>
    )
  },

  {
    path: '/company',
    component: () => (
      <div className="app-routes">
        {/* replace for a component */}
        <h1> company stuff here </h1>
      </div>
    )
  },

  {
    path: '/profile',
    component: () => (
      <div className="app-routes">
        <UserProfile />
      </div>
    )
  }
];

export default routes;
