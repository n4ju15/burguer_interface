import React from "react";

import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from './styles'

const App = () => {

  return (
    <Container>
      <Image />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Pedido"/>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <Button>Novo Pedido</Button>
      </ContainerItems>
      
    </Container>
  )
}

export default App;