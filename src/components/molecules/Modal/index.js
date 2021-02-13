import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalBody } from './ModalBody';
import { Wrapper } from './Wrapper';

const _noContent = styled.div`
    color: ${({theme})=> theme.warningColor };
    font-style: italic;
    padding: 0 30px 0 0;
`;

const _closeIcon = styled.div `
    position: relative;
    display: block;
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 5px;
    zIndex: 3;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 30px;
    line-height: 30px;
    color: #000;
    text-align: center;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEX///9gZ3BgZ3BgZ3BgZ3D////w8GybAAAABHRSTlMAAHCf/ByRuQAAAAFiS0dEAIgFHUgAAAAHdElNRQfjAhoXIBCIOqYkAAAAWElEQVQY053PwQ0AIQgEQFtYqcDkGiChgmP7r+mC+JDkPsrLMWSB1q6qDwDoY+LxgL0JKiBMCB0w6kQ84iMhdKMuwBidC8LI+MPeVgL26DK0rFMWLScc1we7GBNDvVDd4AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0yN1QwNzozMjoxNi0wODowMNWQPX4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMjdUMDc6MzI6MTYtMDg6MDCkzYXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: center center;    
    &:hover {
        background-color: #eee;
    }
`;

const Modal = props => {
    const { show, maxWidth, children } = props;
    const [_show, setShow] = useState(true);

    useEffect(() => {
        setShow(show)        
    }, [show]);

    return (
        <Wrapper show={_show}>
            <ModalBody maxWidth={maxWidth}>
                <_closeIcon onClick={props.closeModal} />
                {children||<_noContent>Content not available</_noContent>}
            </ModalBody>
        </Wrapper>
    );
}

export default Modal;   
