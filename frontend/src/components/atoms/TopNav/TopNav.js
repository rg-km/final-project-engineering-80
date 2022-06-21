import React from 'react';
import './TopNav.css';

const TopNav = (props) => {

    const { variant, children, classname } = props;
    
    return (
        <header
            style={{backgroundColor:`var(--${variant}-main)`}} id="top-nav"
            className={ classname }
            >
            {children}
        </header>
    )
}

export default TopNav;