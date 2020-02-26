import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const AppRouter = () => (
    <Switch>
        <Route path="/" component={HomePage} exact={true} />
    </Switch>
);

export default AppRouter;