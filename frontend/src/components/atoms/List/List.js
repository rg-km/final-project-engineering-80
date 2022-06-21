import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const List = (props) => {

    const { children, className, onClick, id, expand} = props;

    return React.createElement('ul', {
        className: `list-wrapper${className ? ' ' +  className : ''}${expand ? ' expand' : ''}`,
        id,
        onClick
    }, children)
}

export const Item = (props) => {
    
    const { children, className, onClick, id, style, to } = props;

    return to ? <Link to={to} className="list-item">{ children }</Link>: React.createElement('li', {
            className: `list-item${className ? ' ' +  className : ''}`,
            id,
            onClick,
            style
    }, children)
}
export default List;