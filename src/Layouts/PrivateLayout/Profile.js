import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { H1 } from '../../components/atoms/Headings';
import ProfileBanner from '../../components/molecules/ProfileBanner/ProfileBanner';
import ProfileForm from '../../components/molecules/ProfileForm/ProfileForm';
import ProfilePicture from '../../components/molecules/ProfilePicture/ProfilePicture';
import { setLoginToken, TOKEN_KEY, logoutService } from '../../services/auth';
import { BaseURL, config } from '../../services/config';
import { logoutServics } from '../../services/cookieService';



import { getUser } from '../../Store/Actions/userAction';
import { CenterText } from '../PublicLayout/Login/partial';

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
    const [userInfo, setuserInfo] = useState(user||null);

    const logout=()=> {
        logoutService();
        return true;
    }

    useEffect(() => {
            getUser();
    }, []);

    useEffect(() => {
        setuserInfo(user||null)
    }, [user]);

    
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

            
            <ProfileBanner 
                src={props.user.data ? config.BaseURL+props.user.data.coverPic : ''} 
                width="50%"
                bannerHeight={350}
            >
                <ProfilePicture
                    radiusSize={200}
                    src={props.user.data ?config.BaseURL+props.user.data.profilePic:''}
                    alt="profile pic"
                    enableUpload={true}
                />

            </ProfileBanner>

            {props.user.loading? 'loading...':''}

            {/* {props.user.data ? (
                <ProfileForm 
                    fullName={props.user.data.fullName ||'full neme'}
                    firstName={userInfo.firstName}
                    sureName={userInfo.sureName}
                    email={userInfo.email}
                    title={userInfo.title}
                    onChangevalue={e=>console.log(e)}
                />

            ):'No user data '} */}
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
