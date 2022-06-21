import React from 'react';
import './HorizontalScrollMenu.css';
import List from '../../atoms/List2/List';

const HorizontalScrollMenu = (props) => {
    const { children } = props;

    return (
        <List className="horizontal-scroll-menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, { ...child.props, className: ' horizontal-item' })
            })}
        </List>
    )
}

export default HorizontalScrollMenu;