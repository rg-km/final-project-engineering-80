import React, { useState } from 'react';
import List, { Item } from '../../atoms/List2/List';
import Input from '../../atoms/Input/Input';
import onClickOutside from 'react-onclickoutside';
import {
    IoIosSearch,
    IoMdSearch,
    IoMdArrowBack
} from 'react-icons/all';
import { useRef } from 'react';

function SearchBox(props) {
    const [inputBoxOpen, setInputBoxOpen] = useState(false);
    const [inputText, setInputText] = useState('');

    const inputDesktopRef = useRef(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    SearchBox['handleClickOutside_' + props.id] = () => setInputBoxOpen(false);

    let result = inputText ? (
        <h5 style={{ color: 'var(--info-main)', fontWeight: 'normal' }}>Cari '{inputText}'</h5>
    ) : (
        <div className="history">
            <h5>Riwayat Pencarian</h5>
            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">C++ Fundamental</Item>
            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">Struktur Data dan Algorita</Item>
            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">PHP untuk anak-anak</Item>
        </div>
    )

    switch (props.type) {
        case 'mobile':
            return (
                <List className="search-box-for-mobile">
                    <Item onClick={() => setInputBoxOpen(true)} effect variant="button"><IoIosSearch size={24} /></Item>
                    <div className={`content result-box${inputBoxOpen ? ' open' : ''}`}>
                        <div className="input-button-close-box">
                            <Item onClick={() => setInputBoxOpen(false)} effect variant="button"><IoMdArrowBack size={24} /></Item>
                            <Input value={inputText} onChange={handleInputChange} placeholder="Cari di Buku Kita" variant="full-border" />
                        </div>
                        {result}
                    </div>
                </List>
            )
        case 'desktop':
            return (
                <div className="search-box-for-desktop">
                    <Input onClick={() => setInputBoxOpen(true)} ref={inputDesktopRef} value={inputText} onChange={handleInputChange} placeholder="Cari di Buku Kita" variant="full-border" />
                    <IoMdSearch className="search-icon" size={20} />
                    {
                        <List className={`content result-box${inputBoxOpen ? ' open' : ''}`}>
                            {result}
                        </List>
                    }
                </div >
            )
        default:
            return ''
    }

}

const clickOutsideConfig = {
    handleClickOutside: ({ props }) => SearchBox['handleClickOutside_' + props.id],
};

export default onClickOutside(SearchBox, clickOutsideConfig);