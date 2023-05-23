import React, { Component } from 'react';
import { Container } from './styles';

export default class Main extends Component{

  render() {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <text>Teste</text>
      </Container>
    );
  }
}