import React from 'react';
import ReactDOM from 'react-dom';
import AppList from './AppList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
