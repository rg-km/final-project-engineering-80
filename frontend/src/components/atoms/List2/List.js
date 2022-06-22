import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

export const Item = (props) => {
    const { variant, className, children, effect, to } = props;
    let types = variant ? variant.split(' ') : [];
    const itemRef = useRef(null);

    let newClass = `item${types[1] ? ' ' + types[1] : ' circle'}${className ? ' ' + className : ''}${effect ? ' effect' : ''}`;

    return to ? (
        <Link className={newClass} to={to}> {children} </Link>
    ) : React.createElement(types[0] ? types[0] : 'div', {
        ...props,
        effect: undefined,
        ref: itemRef,
        className: newClass
    }, children);
};

const List = (props) => {
    const { className, children, type } = props;

    return React.createElement(type ? type : 'div', {
        ...props,
        className: `list-group${className ? ' ' + className : ''}`
    }, children);
};

export default List;
