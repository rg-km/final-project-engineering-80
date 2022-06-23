import React from 'react';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import './SettingsPage.css';
import List, { Item } from '../../atoms/List2/List';
import { Route, useLocation } from 'react-router';

const SettingsPage = () => {
    let loc = useLocation();
    const getLoc = (path) => path === loc.pathname ? 'active' : '';

    return (
        <>
            <TopNavbar />
            <div id="settings-page">
                <List className="settings-nav">
                    <Item to="/account" className={getLoc('/account')} variant="div rectangle" >
                        Account
                    </Item>
                    <Item to="/account/notifictation" className={getLoc('/account/notifictation')} variant="div rectangle" >
                        Notifications
                    </Item>
                    <Item to="/account/connected_accounts" className={getLoc('/account/connected_accounts')} variant="div rectangle">
                        Connected accounts
                    </Item>
                    <Item to="/account/billing_and_payments" className={getLoc('/account/billing_and_payments')} variant="div rectangle">
                        Billing and payments
                    </Item>
                    <Item to="/account/advanced_settings" className={getLoc('/account/advanced_settings')} variant="div rectangle">
                        Advanced settings
                    </Item>
                </List>
                <div className="settings-container">
                    <Route path="/account" exact>
                        <Account />
                    </Route>
                    <Route path="/account/notifictation">
                        <h3>Notifikasi</h3>
                    </Route>
                    <Route path="/account/connected_accounts">
                        <h3>Akun yang terhubung</h3>
                    </Route>
                    <Route path="/account/billing_and_payments">
                        <h3>Pembayaran dan Penyewaan</h3>
                    </Route>
                    <Route path="/account/advanced_settings">
                        <h3>Pengaturan lanjutan</h3>
                    </Route>
                </div>
            </div>
        </>
    )
}

function Account() {
    return (
        <div className="account-comp">
            <h3>Akun</h3>
            <h1>Pilih bagaimana kamu terlihat dan apa yang kamu lihat</h1>
            <h4> </h4>
        </div>
    )
}

export default SettingsPage;