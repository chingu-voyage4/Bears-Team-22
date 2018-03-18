import React from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from './../components/homepage/Home';
import Jobs from './../components/jobs/Jobs';
import JobAdd from './../components/jobs/JobAdd';
import Login from './../components/auth/login/Login';

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
        component: () => (<div className="app-routes"><JobAdd /></div>)
    },

    {
        path: '/login',
        component: () => (<div className="bg-dark-gradient auth-route flex-center">
                            <Login/>
                          </div>)
    },

    {
        path: '/join',
        component: () => (<div className="app-routes">
                            {/* replace for a component */}
                            <h1> employee registration </h1>
                          </div>)
    },
    {
        path: '/employee',
        component: () => (<div className="app-routes">
                            {/* replace for a component */}
                            <h1> employee stuff here </h1>
                          </div>)
    },

    {
        path: '/company',
        component: () => (<div className="app-routes">
                            {/* replace for a component */}
                            <h1> company stuff here </h1>
                        </div>)
    }

]

export default routes;