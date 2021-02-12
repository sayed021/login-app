import React from 'react';
import { Separator } from '../../../components/atoms';
import { Input } from '../../../components/atoms/FormControls';

import { A } from '../../../components/atoms'
import { ButtonPrimary, ButtonSuccessLink } from '../../../components/atoms/Buttons'
import { FormGroup } from '../../../components/molecules';
import { CenterText } from './pertial';

const LoginForm = () => {
    return (
        <form>
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
        </form>
    );
}

export default LoginForm;
