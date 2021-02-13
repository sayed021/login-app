import styled from "styled-components";

export const ModalBody = styled.div `
    position: relative;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    z-index: 2;
    max-height: 100%;
    overflow: auto;
    max-width: ${(props)=> props.maxWidth? props.maxWidth+'px' : '550px' };
`;

