import react from 'react';
import { H1 } from '../../../components/atoms/Headings'
import {
    ContentCard,
    LoginCard,
    LoginWrap,
} from './pertial';
import LoginForm from './LoginForm';

const Login = props => {
    return (
        <LoginWrap>

            <ContentCard>
                <H1>BDbook</H1>
                <p>BDbook helps you connect and share with the people in your life.</p>
            </ContentCard>

            <LoginCard>
                <LoginForm />
            </LoginCard>
        </LoginWrap>
    )
}

export default Login;

