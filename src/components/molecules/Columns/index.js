import styled from "styled-components";

 const Row = styled.div`
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
`;
const Col = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
`;

const Col1 = styled(Col)`
    width: ${100/12}%;
`;
const Col33 = styled(Col)`
    width: ${100/3}%;
`;

const Col50 = styled(Col)`
    width: ${100/2}%;
`;

const Col25 = styled(Col)`
    width: ${100/4}%;
`;

export {
    Row,
    Col,
    Col33,
    Col50,
    Col25,
    Col1
}

