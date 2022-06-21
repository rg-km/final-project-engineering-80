import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import List, { Item } from '../../atoms/List2/List';
import { useState } from 'react';
import { GoHome, GoChecklist, GoBookmark, GoHistory } from 'react-icons/go';
import './SideNavbar.css';
import { useMatchMedia } from '../../utils/utils';
import { useLocation } from 'react-router';
import onClickOutside from 'react-onclickoutside';

function SideNavbar(props) {
    let initialWidth = document.documentElement.clientWidth;
    const [navbarMax, setNavbarMax] = useState(false);
    const [width, setWidth] = useState(initialWidth);
    let loc = useLocation()

    SideNavbar['handleClickOutside_' + props.id] = () => setNavbarMax(false);

    useMatchMedia((size) => setWidth(size));

    let icon = {
        home: <span className="item-icon" ><GoHome size="25" /></span>,
        collections: <span className="item-icon" ><GoChecklist size="25" /></span>,
        bookmark: <span className="item-icon" ><GoBookmark size="22.5" /></span>,
        history: <span className="item-icon" ><GoHistory size="25" /></span>,
        arrow: navbarMax ? <IoMdArrowBack size="30" /> : <IoMdArrowForward size="30" />
    }

    const title = (message) => <h4 className={`item-title${navbarMax ? '' : ' invisble'}`}>{message}</h4>

    return (
        <div className={`side-navbar ${navbarMax ? 'maximize' : 'minimize'}`}>
            <List>
                {width > 576 ? <Item onClick={() => setNavbarMax(!navbarMax)} className="btn-arrow" effect variant="div circle">{icon.arrow}</Item> : ''}
                <Item className={loc.pathname === '/home' ? 'active' : ''} to="/home" variant="div rectangle">{icon.home}{title('Beranda')}</Item>
                <Item className={loc.pathname === '/home/profile/collection' ? 'active' : ''} to="/home/profile/collection" variant="div rectangle">{icon.collections}{title('Koleksi')}</Item>
                <Item className={loc.pathname === '/home/profile/bookmark' ? 'active' : ''} to="/home/profile/bookmark" variant="div rectangle">{icon.bookmark}{title('Ditandai')}</Item>
                <Item className={loc.pathname === '/home/profile/history' ? 'active' : ''} to="/home/profile/history" variant="div rectangle">{icon.history}{title('Riwayat')}</Item>
            </List>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: ({ props }) => SideNavbar['handleClickOutside_' + props.id],
};

export default onClickOutside(SideNavbar, clickOutsideConfig);