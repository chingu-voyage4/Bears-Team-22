import React from 'react';
import { withRouter } from 'react-router-dom';
import Messages from './../components/messages/Messages';

const routes = [
    {
        path: '/company',
        exact: true,
        isPrivate: true,
        component: () => (<h1> company dashboard here </h1>)
    },
    {
        path: '/company/profile',
        exact: true,
        component: () => (<div className="app-routes"> <h1> My Profile </h1></div>)
    },

    {
        path: '/company/findCandidates',
        component: () => (<div className="app-routes"> <h1> Find Candidates </h1></div>)
    },

    {
        path: '/company/settings',
        exact: true,
        component: () => <Messages/>
    },
    {
      path: '/company/messages',
      exact: true,
      component: () => (<Messages/>)
    },

    {
        path: '/company/posts',
        component: () => (<div className="app-routes">
                            {/* replace for a component */}
                            <h1> My Posts </h1>
                          </div>)
    },

    {
        path: '/company/savedCandidates',
        component: () => (<div className="app-routes">
                            {/* replace for a component */}
                            <h1> Saved Candidates </h1>
                          </div>)
    }

]

export default routes;