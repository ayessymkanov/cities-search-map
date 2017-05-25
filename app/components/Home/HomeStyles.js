import styled from 'styled-components'

export const HomeContainer = styled.div`
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    width: 30rem;
    height: 100%;
`

export const Title = styled.h1`
    font: bold 24px/1.5 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    margin: 10px auto;
    text-align: center;
`

export const MapContainer = styled.div`
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100vw;
`
