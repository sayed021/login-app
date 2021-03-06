import styled from 'styled-components';

const BasicCard = styled.div`
    box-shadow: 0 1px 2px ${({ theme }) => theme.cardShadow};
    margin-bottom: 10px;
    background: #fff;
    border-radius: 10px;
`

export default BasicCard;