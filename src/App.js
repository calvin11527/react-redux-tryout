import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


/* Component */
import DigimonList from './state/containers/DigimonList';
import Digimon from './state/containers/Digimon';

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <h2>{account}</h2>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={DigimonList} />
        <Route path={"/name/:name"} exact component={Digimon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
