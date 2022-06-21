import React, { useState, useEffect } from 'react';
import Input, { Label, Alert } from '../../atoms/Input/Input';

const Steps = (props) => {

    const { step, getFormValue, formStatus } = props;

    let initialFormValue = {
        username: '',
        email: '',
        phonenumber: '',
        address: '',
        password: '',
        password2: ''
    }

    const [formValue, setFormValue] = useState(initialFormValue);
    
    const handleInputChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value});
        // Validate form before submit
        if(e.target.name === 'password2') {
            if(formValue.password !== e.target.value) e.target.style.borderColor = 'var(--danger-main)';
            else e.target.style.borderColor = 'var(--primary-main)' ;
        }
    }

    useEffect(() => {
        getFormValue(formValue);
    }, [getFormValue, formValue]);

    const pattern = {
        username: /^([a-zA-Z0-9_-]){5,10}$/.source,
        email: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/.source,
        phonenumber: (/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/).source,
        address: /^([a-zA-Z0-9_-]){5,20}$/.source,
    }

    switch(step) {
        case 0:
            return(
                <>
                    <Label id="username" title="Nama Pengguna">
                        <Input pattern={pattern.username} key="1" value={formValue.username} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.username } />
                    </Label>
                    <Label id="email" title="Email">
                        <Input pattern={pattern.email} key="2" value={formValue.email} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.email } />
                    </Label>
                </>
            )
        case 1:
            return(
                <>
                    <Label id="phonenumber" title="No Handphone">
                        <Input pattern={pattern.phonenumber} value={formValue.phonenumber} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.phonenumber } />
                    </Label>
                    <Label id="address" title="Alamat">
                        <Input value={formValue.address} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.address } />
                    </Label>
                </>
            )
        case 2:
            return(
                <>
                    <Label id="password" title="Password">
                        <Input type="password" value={formValue.password} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.password } />
                    </Label>
                        <Label id="password2" title="Konfirmasi Password">
                        <Input type="password" value={formValue.password2} onChange={ handleInputChange } variant="line" />
                        <Alert text={ formStatus.password2 } />
                    </Label>
                </>
            )
        default:
            return '';
    }

    
}

export default Steps;