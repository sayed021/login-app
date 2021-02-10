import styled from "styled-components";

const Input = styled.input `
    background: ${props=> {
        if(props.disabled) {
            return '#eeeeee'
        } else {
            return '#fff'
        }
    }};
    
    border: 1px solid ${props => {
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
            return '#dddfe2'
        }
    }};

    width: 100%;
    display: block;
    padding: 0 15px;
    border-radius: 5px;
    outline: 0;
    opacity: ${props=> props.readOnly? '0.5': '1' };

    font-size: 17px;
    font-width: 500;
    padding: 14px 16px;

    &:focus {
        border-color: #1877f2;
        box-shadow: 0 0 0 2px #e7f3ff;
    }

    &::placeholder {
        opacity: 0.7;
    }
`

export default Input;