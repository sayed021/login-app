import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
export const Col = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
export const Col4 = styled(Col)`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
`





