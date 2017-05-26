import styled from 'styled-components'

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    border-bottom: 1px solid #cecece;
    background-color: white;
    transition: all 150ms;
    cursor: pointer;
    &:hover {
        background-color: #3a329b;
        color: white;
    }
    & > div {
        flex: 1;
        &:first-child {
            flex: 3
        }
        &:last-child {
            text-align: right;
        }
    }
`
