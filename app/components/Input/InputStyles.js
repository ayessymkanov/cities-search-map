import styled from 'styled-components'

export const SearchInput = styled.input`
    display: block;
    width: 100%;
    background-color: white;
    padding: 10px 20px;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
    font: 18px/1.5 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    color: #555;
    outline: none;
    transition: all 150ms;

    &::-webkit-input-placeholder {
        color: #ccc;
    }

    &:focus {
        border: 1px solid #3a329b;
        box-shadow: 0 0 5px 0 #3a329b;
    }
`

export const InputContainer = styled.div`
    position: relative;
    z-index: 1;
`

export const Clear = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    display: block;
    height: 20px;
    width: 20px;
    transform: translateY(-50%);
    z-index: 100;
    // border: 1px solid black;
    cursor: pointer;
    &::after,
    &::before {
        position: absolute;
        content: ''
        display: block;
        height: 2px;
        width: 28px;
        background-color: #ccc;
    }
    &::before {
        transform-origin: left center;
        transform: rotateZ(45deg);
    }
    &::after {
        right: 0;
        transform-origin: right center;
        transform: rotateZ(-45deg);
    }
`
