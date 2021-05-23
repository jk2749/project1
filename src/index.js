import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
//그려줄 컴포넌트 import해줌
import App from './App';
import { BrowserRouter, Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import FirstPage from './FirstPage';
import ThreePage from './ThreePage';
// ReactDOM 컴포넌트의 render()를 이용하여 브라우저에 그려줌
ReactDOM.render(<HashRouter>
    <Switch>
      <Route exact path='/three' component={ThreePage}/>
      <Route exact path='/app' component={App}/>
      <Route exact path='/' component={FirstPage}/>
      <Redirect path='*' to='/' />
    </Switch>
  </HashRouter>,document.getElementById('root'));