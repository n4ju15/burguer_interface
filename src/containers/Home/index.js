import React, { useState, useRef } from 'react'
import axios from 'axios'


import Logo from '../../assets/logo.svg'

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from './styles'

const Home = () => {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()


  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", { order: inputOrder.current.value, clientName: inputName.current.value })

    setOrders([...orders, newOrder])

    // Limpar os inputs após adicionar o pedido
    inputOrder.current.value = '';
    inputName.current.value = '';
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