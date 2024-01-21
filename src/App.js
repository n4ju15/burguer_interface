import React, { useState, useRef } from 'react'


import Logo from './assets/logo.svg'
import Trash from './assets/trash.svg'

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, Order } from './styles'

const App = () => {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()


  function addNewOrder() {
    setOrders([
      ...orders, { id: Math.random(), foodOrder: inputOrder.current.value, name: inputName.current.value }])
  }

  function deleterOrder(orderId) {
    const newOrders = orders.filter( order => order.id !== orderId)

    setOrders(newOrders)
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

        <ul>
          {orders.map((orderItem) => (
            <Order key={orderItem.id}>
              <p>{orderItem.foodOrder}</p>
              <a>{orderItem.name}</a>
              <button onClick={() => deleterOrder(orderItem.id)}>
                <img src={Trash} alt='trash' />
              </button>
            </Order>
          ))

          }
        </ul>
      </ContainerItems>

    </Container>
  )
}

export default App;