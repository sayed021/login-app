import styled from "styled-components";

export const ModalTitle = styled.div`
    position: relative;
    border-bottom: 2px solid ${({theme})=> theme.lightColor || '#222'};
    padding: 10px 30px 0 15px;
`;
