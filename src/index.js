import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <App>
           <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
            </Switch>
        </App>
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
