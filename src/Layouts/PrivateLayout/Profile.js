import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { H1 } from '../../components/atoms/Headings';
import ProfileForm from '../../components/molecules/ProfileForm/ProfileForm';
import { setLoginToken, TOKEN_KEY, logoutService } from '../../services/auth';
import { logoutServics } from '../../services/cookieService';



import { getUser } from '../../Store/Actions/userAction';
import { CenterText } from '../PublicLayout/Login/pertial';

const WrapperHeader = styled.div `
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;




const Profile = props => {

    const { getUser, user } = props;

    const logout=()=> {
        logoutService();
        return true;
    }

    useEffect(() => {
        getUser()
    }, []);

    
    return (
        <>
        <WrapperHeader>
            <div>
                <H1>BDBook</H1>
            </div>
            
            <div>
                <a href="/login" onClick={()=>logout()}>Logout</a>
            </div>
        </WrapperHeader>
        <CenterText>
            <H1>Profile page</H1>
            <ProfileForm 
                fullName={user.fullName = 'hello'}
                firstName={user.firstName}
                sureName={user.sureName}
                email={user.email}
                title={user.title}
                onChangevalue={e=>console.log(e)}
            />
        </CenterText>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser:() => dispatch(getUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
