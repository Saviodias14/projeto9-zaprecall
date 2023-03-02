import cards from "./listaCards"
import play from './assets/seta_play.png'
import turn from './assets/seta_virar.png'
import styled from "styled-components"
import { useState } from "react"
export default function () {
    const [clicado, setClicado] = useState(cards)
    console.log(clicado)

    function mostraPergunta(i){
        let novoArray = [...clicado]
        novoArray[i]=false
        console.log(novoArray)
        setClicado(novoArray)
    }

    return (
        <Container>
            {cards.map((c, i) => <li key={c.answer}>
                <Inicio estilo = {clicado[i]}>
                    <p>{clicado[i]?`Pergunta ${i + 1}`:c.question}</p>
                    <img onClick={()=>mostraPergunta(i)} src={clicado[i]?play:turn} />
                </Inicio></li>)}
        </Container>
    )
}

const Container = styled.ul`
width:100%;
display:flex;
flex-direction:column;
align-items: center;
img:hover{
    cursor: pointer;
}
`

const Inicio = styled.div`
width: 300px;
height: ${props=>props.estilo?'65px':'131px'};
background: ${props=>props.estilo?'#FFFFFF':'#ffffd4'};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
box-sizing:border-box;
`