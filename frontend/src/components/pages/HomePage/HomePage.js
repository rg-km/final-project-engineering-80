import React from 'react';
import './HomePage.css';
import Button from '../../atoms/Button/Button';
import Product from '../../molecules/Product/Product';

const HomePage = () => {

    return (
        <div className="home-page">
            <div className="banner-main">
                <h1>Grand Opening!!!</h1>
                <p>Ikutii event dan dapatkan hadiah hingga 2000 Iphone 12 secara gratis</p>
                <Button variant="default">Gabung Sekarang</Button>
            </div>
            <h4 className="title-thumb">Rekomendasi</h4>
            <div className="container-product">
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
        </div>

    )
}
export default HomePage;