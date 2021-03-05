import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { H1 } from '../../components/atoms/Headings';
import { BannerContentWrap, BannerProfileName } from '../../components/molecules/ProfileBanner/partial';
import ProfileBanner from '../../components/molecules/ProfileBanner/ProfileBanner';
import ProfileForm from '../../components/molecules/ProfileForm/ProfileForm';
import ProfilePicture from '../../components/molecules/ProfilePicture/ProfilePicture';
import { setLoginToken, TOKEN_KEY, logoutService } from '../../services/auth';
import { BaseURL, config } from '../../services/config';
import { logoutServics } from '../../services/cookieService';
import { getFriendLists } from '../../Store/Actions/friendListAction';



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

    const { getUser, user, getFriendLists, friends } = props;
    const [userInfo, setuserInfo] = useState(user||null);

    const logout=()=> {
        logoutService();
        return true;
    }

    useEffect(() => {
        getUser();
        getFriendLists();
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

                <BannerContentWrap>
                    <BannerProfileName>{props.user.data ?props.user.data.fullName : 'No Name'}</BannerProfileName>
                    <em className="text-muted">{props.user.data ?props.user.data.title:''}</em>
                </BannerContentWrap>

            </ProfileBanner>

            {props.user.loading? 'loading...':''}

            <h2>Friend list</h2>

            {
                friends.loading ? (
                    'friends loading...'
                ):(
                    !friends.error ? (
                        (friends.data||[]).map(friend=>(
                            <div>
                                <img src={friend.profilePicUrl} />
                                <h4>{friend.name}</h4>
                                <hr />
                            </div>
                        ))
                    ):'loading error'
                )
            }

            
        </CenterText>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        friends: state.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser:() => dispatch(getUser()),
        getFriendLists: ()=> dispatch(getFriendLists())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
