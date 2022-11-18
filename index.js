import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import List from './list';
//import List1 from './list1';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <List />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
