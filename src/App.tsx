import React from 'react';
import { Container } from './components/Container'
import 'index.css'
import { Header } from './components/Header'
import { Search } from './components/Search'

function App() {
  return (
      <Container>
          <Header />
          <Search hasError onSubmit={()=>{}} />
      </Container>
  );
}

export default App;
