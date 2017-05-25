import styled from 'styled-components'

export const Mark = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #3a329b;
    opacity: 0.75;
    &::after {
        display: block;
        content: '';
        position: absolute;
        top: 75%;
        left: 9%;
        width: 17px;
        height: 17px;
        border: 17px solid transparent;
        border-top: 17px solid #3a329b;

    }
`
