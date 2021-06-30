import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <React.Fragment>
                <p>Hello world</p>
            </React.Fragment>
        </Provider>
    );
};

export default App;
