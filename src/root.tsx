import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import TodoApp from "./components/TodoApp/TodoApp";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

const RootComponent: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const listName = params.get('listName') || 'default';

  return <TodoApp listName={listName} />;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <Router>
      <RootComponent />
    </Router>
  ),  errorBoundary(err, info, props) {
    return <div>Error in TodoApp</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
