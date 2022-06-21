import React, { useState } from 'react';
import './ProfilePage.css';
import Button from '../../atoms/Button/Button';
import Product from '../../molecules/Product/Product';
import Avatar from '../../../assets/img/avatar.svg';
import { IoMdHome, IoMdPeople, IoIosLink } from 'react-icons/io';
import { useMatchMedia } from '../../utils/utils';
import { Route } from 'react-router';

const ProfilePage = (props) => {

    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);
    useMatchMedia((size) => setWidth(size));

    return (
        <div className="profile-page">
            <div className="profile">
                <img className="profile-photo" src={Avatar} alt="profile" />
                <div className="description">
                    <h1>{props.username}</h1>
                    <h3>node_subejo</h3>
                    {width > 768 ? <Button variant="default">Edit profile</Button> : ''}
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quas?</span>
                    <div className="card-detail">
                        <span><IoMdPeople />BCC Filkom</span>
                        <span><IoMdHome />Mojokerto</span>
                        <span><IoIosLink />github.com/bagus2x/buku-kita</span>
                    </div>
                </div>
            </div>
            <div className="bookshelf-wrapper">
                <Route path="/home/profile" exact>
                    <Tes text="Koleksi pribadi" />
                    <Tes text="Ditandai" />
                    <Tes text="Riwayat" />
                </Route>
                <Route path="/home/profile/collection" exact>
                    <Tes text="Koleksi pribadi" />
                </Route>
                <Route path="/home/profile/bookmark" exact>
                    <Tes text="Ditandai" />
                </Route>
                <Route path="/home/profile/history" exact>
                    <div className="a-history">
                        <h1>Riwayat peminjaman</h1>
                        <h4>Microservice Architecture</h4>
                        <span>Dikembalikan 1 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                        <h4>Belajar Database NoSQL</h4>
                        <span>Dikembalikan 3 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                        <h4>Flutter untuk Pemula</h4>
                        <span>Dikembalikan 4 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                        <h4>Vue & Node stack</h4>
                        <span>Dikembalikan 7 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                        <h4>Microservice dengan golang</h4>
                        <span>Dikembalikan 12 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                        <h4>Cerita Nabi</h4>
                        <span className="late">Waktu peminjaman berakhir 30 hari yang lalu</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, minima?</p>
                        <hr />
                    </div>
                </Route>
            </div>
        </div>
    )
}

// dummy aja
function Tes(props) {
    return (
        <>
            <h1>{props.text}</h1>
            <div className="bookshelf">
                <Product id="1" />
                <Product id="2" />
                <Product id="3" />
                <Product id="4" />
                <Product id="5" />
                <Product id="6" />
                <Product id="7" />
                <Product id="8" />
                <Product id="9" />
                <Product id="10" />
                <Product id="11" />
                <Product id="12" />
            </div>
        </>
    )
}

export default ProfilePage;