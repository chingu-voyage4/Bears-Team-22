import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mainComponent = (
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  )
  
  ReactDOM.render(mainComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});
