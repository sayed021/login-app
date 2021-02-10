import styled from 'styled-components';

const BasicCard = styled.div`
    box-shadow: 0 1px 2px ${({ theme }) => theme.cardShadow}
`

export default BasicCard;