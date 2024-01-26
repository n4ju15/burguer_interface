import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Logo from '../../assets/logo.svg'

import H1 from '../../components/Title'
import Button from '../../components/Button'

import { Container, Image, ContainerItems, InputLabel, Input } from './styles'

const Home = () => {
  const [orders, setOrders] = useState([])
  const history = useHistory()

  const inputOrder = useRef()
  const inputName = useRef()


  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", { order: inputOrder.current.value, clientName: inputName.current.value })

    setOrders([...orders, newOrder])

    // Limpar os inputs após adicionar o pedido
    inputOrder.current.value = '';
    inputName.current.value = '';

    // Navegar para a próxima tela
    history.push('/orders')
  }

  return (
    <Container>
      <Image src={Logo} alt="logo-hamburguer" />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>

      </ContainerItems>

    </Container>
  )
}

export default Home;