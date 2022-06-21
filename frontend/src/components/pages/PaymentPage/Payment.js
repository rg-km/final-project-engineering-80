import React from 'react';
import './Payment.css';
import Input, { Label } from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { IoMdImage } from 'react-icons/io';
import { withRouter } from 'react-router';

const Payment = (props) => {
    return (
        <div className="payment-page">
            <div className="cont">
                <h1>Transaksi Peminjaman</h1>
                <div className="container-payment">
                    <div className="form-payment">
                        <div className="form-wrapper">
                            <Label title="Nama" id="username">
                                <Input disabled value="Budi" variant="line" />
                            </Label>
                            <Label title="No Hanphone/WhatsApp" id="no-hanphone">
                                <Input disabled value="08737373" variant="line" />
                            </Label>
                            <Label title="Alamat" id="address">
                                <Input disabled value="08228" variant="line" />
                            </Label>
                            <Label title="Durasi Peminjaman">
                                <Input type="date" variant="line" />
                            </Label>
                            <div className="radio-wrapper">
                                <input id="radio" className="check" type="radio" />
                                <label htmlFor="radio">Saya telah menyetujui kesepakatan yang telah di buat</label>
                            </div>
                        </div>
                    </div>
                    <div className="detail-product">
                        <div className="image-product"><IoMdImage size="50px" /></div>
                        <h4>Perpustakaan Sahaya</h4>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button onClick={props.history.goBack} variant="danger">Batal</Button>
                    <Button variant="primary">Pinjam</Button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(Payment);