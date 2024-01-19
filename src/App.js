import React from "react";
import Logo from './assets/logo.svg'

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button, User } from './styles'

const App = () => {
  const users = [{ id: Math.random, name:"Ana", age:"20" }, { id: Math.random, name:"Maria", age:"17" }]

  return (
    <Container>
      <Image src={Logo} alt="Figura de hamburguer e fritas"/>
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Pedido"/>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <Button>Novo Pedido</Button>

        <ul>
          { users.map((user) => (
            <User key={user.id}>{user.name} - {user.age}</User>
          ))

          }
        </ul>
      </ContainerItems>
      
    </Container>
  )
}

export default App;