import styled from "styled-components";

export const ProfilePicCircleOuter = styled.div `
    position: relative;
`
export const ProfilePicCircle = styled.div `
    position: absolute;
    width: ${props=>props.radiusSize ? props.radiusSize + 'px' : '170px'};
    height: ${props=>props.radiusSize ? props.radiusSize + 'px' : '170px'};
    border-radius: 50%;
    border: 5px solid #eee;
    left: 50%;
    transform: translate(-50%, 10px);
    z-index: 11;
    bottom: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.2)
`
export const ProfilePicLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
`;

export const ProfilePic = styled.img`
    display: block;
    object-fit: cover;
    transform: translate(-50%,-50%);
    left: 50%;
    bottom: 0;
    right: 0;
    top: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
`;


// upload circle
export const ProfilePicUploadButton = styled.label `
    height: 40px;
    width: 40px;
    line-height: 35px;
    font-size: 29px;
    border-radius: 50%;
    cursor: pointer;
    background: #eee;
    color: #555555;
    position: absolute;
    bottom: 0;
    right: 20px;
`