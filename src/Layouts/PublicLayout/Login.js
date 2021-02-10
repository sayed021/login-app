import react from 'react';
import styled from 'styled-components';
import Input from '../../components/atoms/FormControls/Inputs/Input';

import { H1, H2, H3 } from '../../components/atoms/Headings'
import { Button, ButtonPrimary, ButtonSuccess, ButtonSuccessLink } from '../../components/atoms/Buttons'
import { FormGroup } from '../../components/molecules';

const CenterText = styled.div `text-align: center`;
const Separator = styled.div`
    align-items: center;
    border-bottom: 1px solid #dadde1;
    display: flex;
    margin: 20px 5px;
    text-align: center;
`

const A = styled.a `
    color: #1877f2;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const LoginWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
    flex-wrap: wrap;
`

const ContentCard = styled.div `
    padding: 20px 15px;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

const LoginCard = styled.div `
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    margin: 40px 0 0;
    padding: 20px 15px 28px;
    width: 450px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 15px;
    }
}    
`

const Login = props => {
    return (
        <LoginWrap>

            <ContentCard>
                <H1>BDbook</H1>
                <p>BDbook helps you connect and share with the people in your life.</p>
            </ContentCard>

            <LoginCard>

                <FormGroup>
                    <Input type="email" name="eamil" placeholder="Email address or phone number" />
                </FormGroup>

                <FormGroup>
                    <Input type="email" name="eamil" placeholder="Password" />
                </FormGroup>

                <FormGroup>
                    <ButtonPrimary fluid>
                        Login
                    </ButtonPrimary>
                </FormGroup>

                <CenterText>
                    <A href="#">Forgotten password?</A>
                </CenterText>

                <Separator />

                <FormGroup noGap>
                    <CenterText>
                        <ButtonSuccessLink fluid href="#">
                            Create New Account
                        </ButtonSuccessLink>
                    </CenterText>
                </FormGroup>

            </LoginCard>
        </LoginWrap>
    )
}

export default Login;

