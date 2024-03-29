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

export const Order = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    margin-top: 1rem;

    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 21rem;
    padding: 0.5rem;
    height: auto;
    border: none;
    outline: none;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        align-self: self-start; //Testar
        font-style: normal;
        font-weight: ${({ fontWeight400 }) => fontWeight400 ? '400' : '100'};
        font-size: 1.3rem;
        line-height: 3rem;
        width: 100%;
        color: #FFF;  
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`