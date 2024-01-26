import styled from 'styled-components'


export const Button = styled.button`
    width: 21rem;
    height: 4rem;
    margin-top: 2rem;

    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    border: none;

    color: #FFF;
    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`