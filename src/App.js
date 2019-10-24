import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Iconfont />
        <Header />
      </Provider>
    );
  }
}

export default App;
