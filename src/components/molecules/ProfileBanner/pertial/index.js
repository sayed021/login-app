import styled from 'styled-components';

export const ProfileBannerWrap = styled.div `
    padding: 0 15px 20px 15px;
    // background-color: ${({ theme }) => theme.whiteColor || '#eee'};
    border-bottom: 2px solid #eee;
    // box-shadow: inset 0 7px 19px -7px rgba(0,0,0,0.3);
    background: linear-gradient(to top,#03a9f412,rgb(3 169 244 / 0%),rgb(149 255 216 / 13%),rgba(255,255,255,.4),rgb(50 150 162 / 8%));
`;

export const BannerBoxLInk = styled.a `
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top,#00000057 0,#ffffff 20%, #eef2f500 100%);
`;
export  const ProfileBannerCenter = styled.div `
    position: relative;
    max-width: 940px;
    margin: 0 auto;
    min-height: 350px;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
    height: ${props=>props.bannerHeight ? props.bannerHeight + 'px' : 'auto'};
`;

export const BannerImage = styled.img `
    position: relative;
    min-width: 100%;
    min-height: 100%;
    display: block;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    width: ${props=>props.width ? props.width :'auto'};
    height: ${props=>props.height ? props.height : 'auto'};
`;

export const BannerPicUpButton = styled.button `
    border: 1px solid #eee;
    outline: 0;
    background: #e4e6eb;
    font-size: 15px;
    font-weight: 600;
    min-height: 36px;
    color: #1c1e21;
    text-align: center;
    padding: 0 12px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:before,
    &:after {
        content: '';
        line-height: 0;
        font-size: 0;
    }
    &:hover {
        background: #eee;
    }
`

export const CoverImageFooter = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
    padding: 10px 50px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;