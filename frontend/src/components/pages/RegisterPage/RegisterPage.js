import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdArrowBack } from 'react-icons/md';
import Steps from './Steps';
import Button from '../../atoms/Button/Button';
import Logo from '../../../assets/img/main_logo.svg';
import './RegisterPage.css';
import { withRouter } from 'react-router';

const RegisterPage = (props) => {

    let initialFormStatus = {
        username: '',
        email: '',
        phonenumber: '',
        address: '',
        password: '',
        password2: ''
    }

    const [page, setPage] = useState(0);
    const [formValue, setFormValue] = useState({});
    const [formStatus, setformStatus] = useState(initialFormStatus);

    const handleNext = (e) => {
        e.preventDefault();
        if (page < 2) setPage(page + 1);
    }
    const handlePrevious = (e) => {
        e.preventDefault();
        if (page > 0) setPage(page - 1);
    }

    const getFormValue = (data) => setFormValue(data);

    const _onSubmit = (e) => {
        e.preventDefault();
        // contoh penggunaan alert, nanti akan di-replace dengan respon dari server // bagus2x 23:51 pm
        if (formValue.username.length < 4) setformStatus({ username: 'Gunakan 8 karakter sampai dengan 20 karakter' });
        props.history.push('/home');
    }

    return (
        <div id="register-page">
            <form className="form-group">
                <div className="header">
                    {page !== 0 ? (
                        <Button onClick={handlePrevious} variant="primary">
                            <IconContext.Provider value={{ size: '30px' }}><MdArrowBack style={{ fill: 'var(--text-primary)' }} /></IconContext.Provider>
                        </Button>
                    ) : null}
                    {page === 0 ? <h1>Buat akun di Buku Kita</h1> : ''}
                </div>
                <Steps formStatus={formStatus} getFormValue={getFormValue} step={page} />
                <Button onClick={page !== 2 ? handleNext : _onSubmit} variant="primary">{page !== 2 ? 'Selanjutnya' : 'Daftar'}</Button>
                <img className="logo" src={Logo} alt="Buku Kita" width="35" />
                <span className="index">{page + 1} / 3</span>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage);