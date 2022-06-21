import React, { useState } from 'react';
import { ReactComponent as Wp } from '../../../assets/img/science_discovery.svg';
import bg from '../../../assets/img/bg.svg';
import TopNav from '../../atoms/TopNav/TopNav';
import Logo from '../../../assets/img/main_logo.svg';
import Button from '../../atoms/Button/Button';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Menu, { Content } from '../../atoms/Menu/Menu';
import List, { Item } from '../../atoms/List/List';
import { useMatchMedia } from '../../utils/utils';
import './LandingPage.css';

const LandingPage = () => {

    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);

    useMatchMedia((size) => setWidth(size));

    const productLink = (
        <List className="list-header" expand >
            <Item >Produk</Item>
            <Item >Kontak</Item>
            <Item >Tentang Kami</Item>
        </List>
    );
    const authLink = (
        <List className="auth-link" expand >
            <Item to="/register" ><span>Daftar</span></Item>
            <Item to="/login" >Masuk</Item>
        </List>
    );

    return (
        <div id="landing-page">
            <TopNav variant="transparent">
                <div className="left-wrapper">
                    <img src={Logo} alt="GedeBOOK" width="40" />
                    <span style={{ marginLeft: "10px", fontWeight: "bolder", fontSize: "18px" }}> <span style={{ fontSize: "18px" }}>Buku</span> Kita</span>
                </div>
                {width <= 576 ? null : productLink}
                {width <= 768 ? null : authLink}
                <Menu id="1" className="lp-menu" >
                    <Button className="toggle">
                        <IconContext.Provider value={{ size: '30px' }}><FiMenu style={{ fill: 'var(--text-primary)' }} /></IconContext.Provider>
                    </Button>
                    <Content className="lp-content" >
                        {width <= 576 ? productLink : null}
                        {width <= 576 ? <hr style={{ margin: '-10px 0', width: '100%' }} /> : null}
                        {width <= 768 ? authLink : null}
                    </Content>
                </Menu>
            </TopNav>
            <div style={{ backgroundImage: `url(${bg})` }} className="greeting">
                <h1>Perbanyak pengetahuanmu dengan membaca buku setiap hari</h1>
                <p>BukuKita mendukung kamu untuk mencari buku dari pepustakaan dan pengguna lain</p>
                <Button variant="primary">Jelajah Sekarang</Button>
            </div>
            <div className="wallpaper">
                <Wp className="svg-wallpaper" />
            </div>
        </div>
    )
}

export default LandingPage;