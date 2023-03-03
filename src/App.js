import { useState } from 'react';
import styled from 'styled-components';
import Deck from './Deck';
import Rodape from './Rodape';
import TelaInicial from './TelaInicial';
import Topo from './Topo';

function App() {
  const [numeroConclusao, setNumeroConclusao] = useState(0)
  const [inicio, setInicio] = useState(false)
  const [sequencia, setSequencia] = useState([])
  function contador(n){
    setNumeroConclusao(n)
  }
  return (
    <Fundo inicio={inicio}>
      <TelaInicial inicio={inicio} setInicio={setInicio}/>
      <Topo inicio={inicio}/>
      <Deck setSequencia={setSequencia} sequencia={sequencia} inicio={inicio} contador={contador}/>
      <Rodape sequencia={sequencia} inicio={inicio} numeroConclusao={numeroConclusao}/>
    </Fundo>
  );
}

export default App;

const Fundo = styled.div`
  width:100vw;
  height: ${props=>props.inicio?'100%':'100vh'};
	background-color: #FB6B6B;
  padding-top: 48px;
  padding-bottom: 100px;
`