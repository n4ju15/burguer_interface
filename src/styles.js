import styled from 'styled-components'

export const Container = styled.div`
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 2rem;
    height: 15rem;
`

export const ContainerItems = styled.div`
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    /*height: 100vh;*/
`

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5rem;
`

export const InputLabel = styled.p`
    color: #EEE;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3rem;
    letter-spacing: -0.408px;
    margin-left: 1.5rem;
`

export const Input = styled.input`
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 21rem;
    height: 3.5rem;
    border: none;
    outline: none;
    padding-left: 1.5rem;
    margin-bottom: 2rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
`

export const Button = styled.button`
    width: 21rem;
    height: 4rem;
    margin-top: 2rem;

    background: #D93856;
    border-radius: 14px;
    border: ${props => props.isBack ? 'border: 1px solid #FFF;' : 'none'};

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

export const Order = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    margin-top: 1rem;

    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 21rem;
    padding: 1rem;
    /*height: 3.5rem;*/

    border: none;
    outline: none;

    p {
        align-self: flex-start;
        font-style: normal;
        font-weight: 100;
        font-size: 1.3rem;
        line-height: 1rem;
        width: 16rem;
        color: #FFF;  
        margin-bottom: 2rem;
    }

    a {
        align-self: flex-start;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
        width: 16rem;
        color: #FFF;  
    }

    button {
        align-self: flex-end;
        background: none;
        border: none;
        cursor: pointer;
    }
`