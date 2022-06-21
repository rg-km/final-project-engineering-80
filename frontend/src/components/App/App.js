import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Base from '../pages/Base/Base';
import Payment from '../pages/PaymentPage/Payment';
import './App.css';
import E404 from '../pages/404/404';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/payment">
                    <Payment />
                </Route>
                <Route path="/home">
                    <Base />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
                <Route path="/account">
                    <SettingsPage />
                </Route>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route to="/404">
                    <E404 />
                </Route>
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default App;