import React, { useState, useRef, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';
import './Menu.css';

export const Content = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} id={props.id} className={`content${props.className ? ' ' + props.className : ''}`}>
            {props.children}
        </div>
    )
});

function Menu(props) {

    const contentRef = useRef(null);

    const { children, className, id, delay } = props;
    const [isOpen, setOpen] = useState(false);

    Menu['handleClickOutside_' + id] = () => setOpen(false);
    Menu._onSelect = () => setOpen(false);

    useEffect(() => {
        if (contentRef.current) {
            [].slice.call(contentRef.current.children).forEach((e) => {
                e.addEventListener('click', () => setTimeout(() => setOpen(false), delay ? delay : 200))
            });
        }
    }, [delay]);

    return (
        <div className={`menu${className ? ' ' + className : ''}`}>
            {React.cloneElement(children[0], { onClick: () => setOpen(!isOpen) })}
            {isOpen ? React.cloneElement(children[1], { ref: contentRef }) : null}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: ({ props }) => Menu['handleClickOutside_' + props.id],
};

export default onClickOutside(Menu, clickOutsideConfig);