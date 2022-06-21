import React from 'react';
import './Product.css';
import { useState } from 'react';
import { IoMdClose, IoMdStar, IoMdImage, IoMdBookmark, IoMdStarHalf, IoIosCart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const Product = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className="card-product">
                <Link to="#"><div className="image-product"><IoMdImage size="50px" /></div></Link>
                <h4>Judul</h4>
            </div>
            {
                open ? (
                    <div className="background-outside">
                        <div className="modal-box">
                            <div className="header">
                                <span onClick={() => setOpen(false)} className="close-btn"><IoMdClose size="20px" /></span>
                            </div>
                            <div className="box-wrapper">
                                <div className="image-product-detail">
                                    <span className="image">
                                        <IoMdImage size="50px" />
                                    </span>
                                    <span className="icon-bookmark"><IoMdBookmark size="30px" /></span>
                                    <Link to="#">Lebih detail</Link>
                                </div>
                                <div className="detail-product">
                                    <h1>Database Redis Pemula</h1>
                                    <span className="group-star"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></span>
                                    <hr />
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, totam.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eveniet?</p>
                                    <table className="detail-table">
                                        <tbody>
                                            <tr>
                                                <td>Tebal Halaman</td>
                                                <td>876</td>
                                            </tr>
                                            <tr>
                                                <td>Pengarang</td>
                                                <td>Mukhlis</td>
                                            </tr>
                                            <tr>
                                                <td>ISBN</td>
                                                <td>0922232872226</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Button className="cart" variant="primary"><IoIosCart size={24} /></Button>
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Product;