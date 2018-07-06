import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store';
import Project from './components/Project';

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/project/:id' component={Project} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App;