import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/index';
import Content, { renderRoutes } from './components/content/index';
import NotFoundPage from './components/notFoundPage';
import envVars from './env';

const { PRE_EXPANDED_LESSONS } = envVars;


function App() {
  const [expandedLessons, setExpandedLessons] = useState(PRE_EXPANDED_LESSONS);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Content
                {...props}
                preExpandedLessons={expandedLessons}
                setExpandedLessons={setExpandedLessons}
              />
            )}
          />
          {renderRoutes()}
        
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
