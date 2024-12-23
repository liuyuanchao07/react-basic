import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import Discover from './views/discover';

function App() {
  return (
    <>
      <Discover name="abc" age={19} height={300} /> 
      <div className="App">{useRoutes(routes)}</div>
    </>
  );
}

export default App;
