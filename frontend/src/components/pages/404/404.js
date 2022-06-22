import React from 'react';
import Wp from '../../../assets/img/404_page_not_found_.svg';
import './404.css';
import { withRouter } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const E404 = (props) => {
    return (
        <div className="_404">
            <div className="osssoo">
                <img src={Wp} alt="404" />
            </div>
            <span>
                <Button onClick={(e) => {
                    e.preventDefault();
                    props.history.goBack();
                }} variant="warning">Kembali</Button>
            </span>
        </div>
    )
}

export default withRouter(E404);