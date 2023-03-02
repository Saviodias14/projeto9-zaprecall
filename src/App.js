import { useState } from 'react';
import styled from 'styled-components';
import Deck from './Deck';
import Rodape from './Rodape';
import Topo from './Topo';

function App() {
  const [numeroConclusao, setNumeroConclusao] = useState(0)
  function contador(n){
    setNumeroConclusao(n)
  }
  return (
    <Fundo>
      <Topo/>
      <Deck contador={contador}/>
      <Rodape numeroConclusao={numeroConclusao}/>
    </Fundo>
  );
}

export default App;

const Fundo = styled.div`
  width:100vw;
  height: 100%;
	background-color: #FB6B6B;
  padding-top: 48px;
  padding-bottom: 100px;
`;

