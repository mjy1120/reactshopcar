import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
    
} from 'react-router-dom';

import App from '../components/app';
import Index from '../components/index';
import Shopping from '../components/libs/shopping';
function RouterConfig(){
    return <Router>
        <App>
            <Switch>
                <Redirect exact from="/" to="/index"></Redirect>
                <Route  path='/index' component={shoppings}/>
            </Switch>
            
        </App>
    </Router>;
};
let shoppings=()=>{
    return <Index>
         <Route  path='/index/shopping' component={Shopping}/>
    </Index>
}
export default RouterConfig;
