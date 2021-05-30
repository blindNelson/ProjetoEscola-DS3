import React from 'react';
import Menu from './components/Menu';
import ListagemAlunos from './components/ListagemAlunos'

function App() {
  return (
    <div className="App">
      <Menu/>
      <h1>Projeto escolar</h1>
      <ListagemAlunos/>
    </div>
  );
}

export default App;
