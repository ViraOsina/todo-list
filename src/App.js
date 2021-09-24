import React from 'react';
import background from './Wave-10s-1348px.svg';
import styled from 'styled-components';
import './App.css';
import TodoList from './components/TodoList'

const Background = styled.div `
  background-image: url(${background});
  width: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  padding-top: 40px;
`

function App() {
  return (
    <Background>
      
        <TodoList />
      
    </Background>
  );
}

export default App;
