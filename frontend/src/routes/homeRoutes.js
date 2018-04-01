import React from 'react';
// import { withRouter } from 'react-router-dom';
import employerRoutes from './employerRoutes';
import Company from './../components/company';
import ForgotPassword from './../components/auth/ForgotPassword';
import HomePage from './../components/homepage/Home';
import Jobs from './../components/jobs/Jobs';
import JobForm from './../components/jobs/JobForm';
import Login from './../components/auth/login/Login';
import Registration from './../components/auth/Registration';

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
    exact: true,
    component: () => (
      <div className="app-routes">
        <JobForm />
      </div>
    )
  },

  {
    path: '/login',
    exact: true,
    component: () => (
      <div className="bg-dark-gradient auth-route flex-center">
        <Login />
      </div>
    )
  },
  {
    path: '/login/forgot',
    exact: true,
    component: () => (
      <div className="bg-dark-gradient auth-route flex-center">
        <ForgotPassword />
      </div>
    )
  },

  {
    path: '/join',
    component: () => (
      <div className="bg-dark-gradient auth-route flex-center">
        <Registration />
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
        <Company />
      </div>
    ),
    routes: employerRoutes
  }
];

export default routes;
