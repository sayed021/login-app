import React from 'react';
import styled from "styled-components";

const RadioLabel = styled.div `
 
`
const Wrap = styled.label `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #999;
    padding: 10px;
    width: 100%;

    &.disabled {
        opacity: 0.7;
    }

    input {
        order: 2;
    }
`

const inputRadio = styled.input `
    opacity: 0;
    height: 0;
`;

const RadioInput = props => {
    const { children, required, disabled, value, name } = props;

    let _props = {
        required: required,
        disabled: disabled,
        value: value,
        name: name,
    } 

    return (
        <Wrap className={disabled? 'disabled':''}>
            <input type="radio" {..._props}  />
            <RadioLabel>
                {children||'labeltext'}
            </RadioLabel>
        </Wrap>
    );
}

export default RadioInput;
