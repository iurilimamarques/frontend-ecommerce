import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import combineReducers from './store';

class App extends Component {
    render() {
        return (
            <Provider store={combineReducers}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
