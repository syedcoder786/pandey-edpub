import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/dashboard/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/dashboard/Footer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
            <div className="App">
              <Header/>
              <Dashboard/>
              <Footer/>
            </div>
      </Provider>
    );
  }
}

export default App;
