import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../components/atoms/Headings';
import { CenterText } from '../PublicLayout/Login/pertial';

const WrapperHeader = styled.div `
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const logout=()=> {
    sessionStorage.setItem('BDBOOK_LOGEDIN', false)
}

const Profile = props => {
    return (
        <>
        <WrapperHeader>
            <div>
                <H1>BDBook</H1>
            </div>
            <div>
                <a href="#" onClick={()=>logout()}>Logout</a>
            </div>
        </WrapperHeader>
        <CenterText>
            <H1>Profile page</H1>
        </CenterText>
        </>
    );
}

export default Profile;
