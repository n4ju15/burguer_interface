import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'


import OrderLogo from '../../assets/order.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'

import { Container, Image, ContainerItems, Button, Order } from './styles'

const Orders = () => {
  const [orders, setOrders] = useState([])

  const history = useHistory()

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

  function goBackPage() {
    history.push('/')
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

        <Button onClick={goBackPage}>
          Voltar
        </Button>

      </ContainerItems>

    </Container>
  )
}

export default Orders;