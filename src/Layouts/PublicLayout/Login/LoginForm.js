import React, { useEffect , useState} from 'react';
import { Separator } from '../../../components/atoms';
import { Input } from '../../../components/atoms/FormControls';

import { A } from '../../../components/atoms'
import { ButtonPrimary, ButtonSuccessLink } from '../../../components/atoms/Buttons'
import { FormGroup } from '../../../components/molecules';
import { CenterText } from './pertial';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { usrLogin } from '../../../Store/Actions/loginAction';


const LoginForm = props => {
    console.log("my props", props);

    const { usrLogin } = props;

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
                <ButtonPrimary type="button" onClick={()=>usrLogin({name: 'sayed', password:1234})} fluid>
                    Login
                </ButtonPrimary>
            </FormGroup>

            <CenterText>
                <A href="#">Forgotten password?</A>
            </CenterText>
        </form>
    );
}


const mapStateToProps = (state) => {
    console.log(state, 'my state')

    return {
        login: state
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("dispatch ", dispatch )
    return {
        usrLogin:(user) => dispatch(usrLogin(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
