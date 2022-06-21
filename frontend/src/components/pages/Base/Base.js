import React, { useEffect, useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import SideNavbar from '../../molecules/SideNavbar/SideNavbar';
import HomePage from '../HomePage/HomePage';
import './Base.css';
import ProfilePage from '../ProfilePage/ProfilePage';

const Base = (props) => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        let user = localStorage.getItem('username');
        if (user) return setUsername(user);
        props.history.push('/login');
    }, [props.history])

    return (
        <div className="base">
            <TopNavbar username={username} />
            <SideNavbar />
            <div className="container-main">
                <Route exact path="/home" >
                    <HomePage />
                </Route>
                <Route path="/home/profile" >
                    <ProfilePage username={username} />
                </Route>
            </div>
        </div>
    )
}

export default withRouter(Base);