import styled from "styled-components";

const Input = styled.input `
    background: ${props=> {
        if(props.disabled) {
            return '#eeeeee'
        } else {
            return '#fff'
        }
    }};
    border: 2px solid ${props => {
        if(props.error){
            return '#f00'
        }
        if(props.warning){
            return "#ff9800"
        }
        if(props.readOnly) {
            return '#eee'
        }
        
        else {
            return '#999'
        }
    }};

    height: 42px;
    width: 100%;
    display: block;
    padding: 0 15px;
    border-radius: 5px;
    opacity: ${props=> props.readOnly? '0.5': '' }
`

export default Input;