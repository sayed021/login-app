import styled from "styled-components";

export const Wrapper = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 501;
    background: rgba(255,255,255,0.8);
    display: ${(props)=>props.show === true ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
`;


