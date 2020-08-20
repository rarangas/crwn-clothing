import React from 'react';
import {Route, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';


import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets PAGE</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>Sneakers PAGE</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>Womens PAGE</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>Mens PAGE</h1>
  </div>
);

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC V1 PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};


function App() {
  return (
    <div >
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
        <Route exact path='/topics/:topicId' component={TopicDetail} />        
    </div>
  );
}

export default App;
