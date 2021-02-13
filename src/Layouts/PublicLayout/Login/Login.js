import react, { useState } from 'react';
import { H1, H2, H4 } from '../../../components/atoms/Headings'
import {
    CenterText,
    ContentCard,
    LoginCard,
    LoginWrap,
} from './pertial';
import LoginForm from './LoginForm';
import Modal from '../../../components/molecules/Modal';
import { ModalTitle } from '../../../components/molecules/Modal/ModalTitle';
import { FormGroup } from '../../../components/molecules';
import { Separator } from '../../../components/atoms';
import { ButtonSuccessLink } from '../../../components/atoms/Buttons';
import RegristronForm from '../Regristration';


const Login = props => {

    const [showModal, setshowModal] = useState(false);

    const closeModal=e=>{
        setshowModal(false)
    }

    return (
        <>
        <LoginWrap>

            <ContentCard>
                <H2>BDbook</H2>
                <p>BDbook helps you connect and share with the people in your life.</p>
            </ContentCard>

            <LoginCard>
                <LoginForm />

                <Separator />

                <FormGroup noGap>
                    <CenterText>

                        <ButtonSuccessLink onClick={(e)=> setshowModal(!showModal) }>
                            Create New Account
                        </ButtonSuccessLink>

                    </CenterText>
                </FormGroup>
            </LoginCard>
        </LoginWrap>

        <Modal 
            show={showModal}
            closeModal={(e)=>closeModal()}
        >
            <ModalTitle>
                <H4 className="mb-0">Sign Up</H4>
                <p>It's quick and easy.</p>
            </ModalTitle>

            <RegristronForm />
        </Modal>
        </>
    )
}

export default Login;

