import styled from "styled-components";



const ButtonRounded = `
    border-radius: 25px;
`

// base button
export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    min-height: 45px;
    border: 2px solid transparent;
`

// I used props primary, secondary .....
// and decleard static value and asign them


// extend Primary button name is ButtonPrimary
export const ButtonPrimary = styled(Button) `
    background:  ${({ theme }) => theme.primaryColor || '#eee'};
    color:  ${({ theme }) => theme.white || '#eee'};
    border-color: ${({ theme }) => theme.primaryColor || '#eee'}
`
export const ButtonPrimaryRounded = styled(ButtonPrimary)`
    ${ButtonRounded}
`;

