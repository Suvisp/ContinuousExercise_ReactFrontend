import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import TopicPage from './components/TopicPage';
import TopicEdit from './components/TopicEdit';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="Content">
      <Switch>
      <Route path="/" exact component={TopicPage}/>
      <Route path="/edit/:id" exact component={TopicEdit}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
