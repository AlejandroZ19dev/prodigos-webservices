import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (orientation: portrait) {
        justify-content: center;
    }
`;

export const PText = styled.div<{size: number}>`
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #F4BF00;
    font-size: ${props => props.size}vw;
    
    &:hover {
        cursor: pointer;
    }
    
    @media (orientation: portrait) {
        font-size: ${props => props.size + 3.5}vw;    
    }
`;

export const RestText = styled.div<{size: number}>`
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #0b43c4;
    font-size: ${props => props.size}vw;
    
    &:hover {
        cursor: pointer;
    }
    
    @media (orientation: portrait) {
        font-size: ${props => props.size + 3.5}vw;
    }
`;
