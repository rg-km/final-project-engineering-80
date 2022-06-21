import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {

    const { variant, children, to, className, style } = props;

    return (
        variant === 'link' ? <Link style={style} to={to} className="btn btn-link">{children}</Link> :
            React.createElement('button', {
                ...props,
                className: `btn${variant ? ' ' + variant : ''}${className ? ' ' + className : ''}`
            }, children)
    )
}

export default Button;