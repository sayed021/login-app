import styled from 'styled-components';
const LoginWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
    flex-wrap: wrap;
`

const ContentCard = styled.div `
    padding: 20px 15px;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
const CenterText = styled.div `text-align: center`;


const LoginCard = styled.div `
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    margin: 40px 0 0;
    padding: 20px 15px 28px;
    width: 450px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 15px;
    }
}    
`
export {
    LoginWrap,
    LoginCard,
    ContentCard,
    CenterText
}