import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Buttons';
import { Input } from '../../atoms/FormControls';
import FormGroup from '../FormGroup';

const FormWrap = styled.div `
    max-width: 550px;
    margin: 0 auto;
    border: 2px solid #eee;
`

const ProfileForm = props => {
    const {
        fullName,
        firstName,
        sureName,
        email,
        title,
        profilePic,
        coverPic,
        friendsList,
        onChangevalue,
        onSubmitProfile
    } = props;

    const [isEditMode, setisEditMode] = useState(false);

    return (
        <FormWrap>
            <button onClick={(e)=>setisEditMode(true)}>Edit</button>
            <FormGroup>
                <Input
                    type="text"
                    name="fullName" 
                    onChange={e=>onChangevalue(e)}
                    value={fullName||''}
                    readOnly={!isEditMode}
                    placeholder="User Full name" />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    name="firstName" 
                    onChange={e=>onChangevalue(e)}
                    value={firstName||''} 
                    readOnly={!isEditMode}
                    placeholder="first Name" />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    name="sureName" 
                    onChange={e=>onChangevalue(e)}
                    value={sureName||''} 
                    readOnly={!isEditMode}
                    placeholder="sure Name" />
            </FormGroup>
            <FormGroup>
                <Input
                    type="text"
                    name="text" 
                    onChange={e=>onChangevalue(e)}
                    value={email||''} 
                    readOnly={!isEditMode}
                    placeholder="first Name" />
            </FormGroup>

            <FormGroup>
                <Input
                    type="text"
                    name="title" 
                    onChange={e=>onChangevalue(e)}
                    value={title||''}
                    readOnly={!isEditMode}
                    placeholder="title" />
            </FormGroup>

            {isEditMode ? (
                <FormGroup>
                    <Button>Save</Button>
                    <Button onClick={()=>setisEditMode(false)}>Cancel</Button>
                </FormGroup>
            ):''}
            
        </FormWrap>
    );
}

export default ProfileForm;
