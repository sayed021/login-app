import React, { useEffect , useState} from 'react';
import { Separator } from '../../../components/atoms';
import { Input } from '../../../components/atoms/FormControls';

import { A } from '../../../components/atoms'
import { ButtonPrimary, ButtonSuccessLink } from '../../../components/atoms/Buttons'
import { FormGroup } from '../../../components/molecules';
import { CenterText } from './pertial';
import { Redirect } from 'react-router-dom';


const LoginForm = () => {
    const [redirected, setRedirected] = useState();

    if (redirected) {
        return <Redirect to='/profile' />
    }

    const submitForm = e => {
        sessionStorage.setItem('BDBOOK_LOGEDIN', true);
        setRedirected(true);
    }

    return (
        <form onSubmit={(e)=>submitForm(e) }>
            <FormGroup>
                <Input type="email" name="eamil" placeholder="Email address or phone number" />
            </FormGroup>

            <FormGroup>
                <Input type="email" name="eamil" placeholder="Password" />
            </FormGroup>

            <FormGroup>
                <ButtonPrimary type="submit" fluid>
                    Login
                </ButtonPrimary>
            </FormGroup>

            <CenterText>
                <A href="#">Forgotten password?</A>
            </CenterText>
        </form>
    );
}

export default LoginForm;
