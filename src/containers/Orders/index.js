import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'


import OrderLogo from '../../assets/order.svg'
import Trash from '../../assets/trash.svg'

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, Order } from './styles'

const Orders = () => {
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

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders")
      setOrders(newOrders)
    }

    fetchOrders()
  }, [])


  async function deleterOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)

    setOrders(newOrders)
  }

  return (
    <Container>
      <Image src={OrderLogo} alt="logo-sacola-hamburguer" />
      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((orderItem) => (
            <Order key={orderItem.id}>
              <p>{orderItem.order}</p>
              <a>{orderItem.clientName}</a>
              <button onClick={() => deleterOrder(orderItem.id)}>
                <img src={Trash} alt='trash' />
              </button>
            </Order>
          ))
          }
        </ul>

        <Button onClick={addNewOrder}>
          Voltar
        </Button>

      </ContainerItems>

    </Container>
  )
}

export default Orders;