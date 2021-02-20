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
import styled from 'styled-components';

const ErrorMessage = styled.div `
    background: rgba(0,0,0,0.6);
    color: red;
    padding: 10px 15px;
`
const LoginForm = props => {

    const {login, usrLogin } = props;

    const [user, setUser] = useState({
        userName:'',
        password: ''
    });

    if (login?.logegIn) {
        return <Redirect to='/profile' />
    }

    const submitForm = e => {
        e.preventDefault();
        usrLogin(user);
    }

    return (
        <form onSubmit={(e)=>submitForm(e) }>
           {
            login.loginError? (
                    <ErrorMessage>
                        Login error
                    </ErrorMessage>
            ):''
           } 
            <FormGroup>
                <Input 
                    type="text"
                    name="userName" 
                    onChange={(e)=>setUser({...user, userName : e.target.value})}
                    value={user?.userName||''} 
                    placeholder="Email address or phone number" />
            </FormGroup>

            <FormGroup>
                <Input
                    type="password" 
                    name="Password" 
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                    value={user?.password||''} 
                    placeholder="Password" />
            </FormGroup>

            <FormGroup>
                <ButtonPrimary type="submit" onClick={(e)=>submitForm(e)} fluid>
                {!login.loginLoading? 'Login' : 'Loading...' }
                </ButtonPrimary>
            </FormGroup>

            <CenterText>
                <A href="#">Forgotten password?</A>
            </CenterText>
        </form>
    );
}


const mapStateToProps = (state) => {

    return {
        login: state.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usrLogin:(user) => dispatch(usrLogin(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
