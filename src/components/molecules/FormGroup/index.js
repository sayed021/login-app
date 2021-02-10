import styled from "styled-components";

const FormGroup = styled.div `
    padding: 5px;
    margin-bottom: ${props=> props.noGap? '': '15px'} ;
`

export default FormGroup;