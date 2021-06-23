import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';
import NotFound from './components/pages/NotFound';

import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"/>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/new">
            <NewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
