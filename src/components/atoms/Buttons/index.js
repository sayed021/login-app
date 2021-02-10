import styled from "styled-components";

const ButtonRounded = `
    border-radius: 25px;
`

// base button
export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    min-height: 45px;
    border: 0;
    outline: 0;
    cursor: pointer;
`

// I used props primary, secondary .....
// and decleard static value and asign them


// extend Primary button name is ButtonPrimary
export const ButtonPrimary = styled(Button) `
    background:  ${({ theme }) => theme.primaryColor || '#eee'};
    color:  ${({ theme }) => theme.white || '#eee'};
    border-color: ${({ theme }) => theme.primaryColor || '#eee'};
    width: ${props=>props.fluid ? '100%':''};
    font-width: 700;
    font-size: 24px;
    line-height: 48px;
    padding: 0  20px;
    border-radius: 6px;

    &:hover {
        background-color: #166fe5;
    }
`
export const ButtonSuccess = styled(Button) `
    background:  ${({ theme }) => theme.successColor || '#eee'};
    color:  ${({ theme }) => theme.white || '#eee'};
    border-color: ${({ theme }) => theme.successColor || '#eee'};
    width: ${props=>props.fluid ? '100%':''};
    font-width: 700;
    font-size: 24px;
    line-height: 48px;
    padding: 0  20px;
    border-radius: 6px;
    
    &:hover {
        background-color: #166fe5;
    }
`
export const ButtonSuccessLink = styled.a`
    outline: 0;
    cursor: pointer;
    display: inline-block;
    background:  ${({ theme }) => theme.successColor || '#eee'};
    color:  ${({ theme }) => theme.white || '#eee'};
    border-color: ${({ theme }) => theme.successColor || '#eee'};
    width: ${props=>props.fluid ? '100%':''};
    font-width: 700;
    font-size: 24px;
    line-height: 48px;
    padding: 0  20px;
    border-radius: 6px;
    text-decoration: none;

    &:hover {
        background-color: #36a420;
    }
`;

export const ButtonPrimaryRounded = styled(ButtonPrimary)`
    ${ButtonRounded}
`;

