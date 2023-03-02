import cards from "./listaCards"
import Botoes from "./Botoes"
import play from './assets/seta_play.png'
import turn from './assets/seta_virar.png'
import styled from "styled-components"
import { useState } from "react"
function criaArray(tamanho){
    let array = []
    for(let i=0;i<tamanho; i++){
        array.push('')
    }
    return array
}
export default function (props) {
    const [clicado, setClicado] = useState(cards)
    const [vira, setVira] = useState(cards)
    const [texto, setTexto] = useState('')
    const [resposta, setResposta] = useState(criaArray(cards.length))

    function mostraPergunta(i) {

        if (clicado[i]) {
            let novoArray = [...clicado]
            novoArray[i] = false
            setClicado(novoArray)
            setTexto(cards[i].question)
        } else {
            console.log(vira)
            setVira(clicado)
            setTexto(cards[i].answer)
        }
    }

    function pegaResposta(cor, indice){
        let aux = [...resposta]
        aux[indice] = cor
        setResposta(aux)
    }

    function numeroDeRespostas(){
        let contador = 0
        resposta.find((r)=>{
            if(r){
                contador++
            }
        })
        return contador
    }

    return (
        <Container>
            {cards.map((c, i) => <li key={c.answer}>
                <Inicio  virar={vira[i]} começar={clicado[i]} resposta={resposta[i]}>
                    <p>{(clicado[i] && vira[i])||resposta[i] ? `Pergunta ${i + 1}` : texto}</p>
                    <img onClick={() => mostraPergunta(i)} src={clicado[i] ? play : turn} />
                    <Botoes pegaResposta={pegaResposta} indice={i} contador={props.contador(numeroDeRespostas())}></Botoes>
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
height: ${props => props.começar || props.resposta ? '65px' : '131px'};
background: ${props => props.começar || props.resposta ? '#FFFFFF' : '#ffffd4'};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
box-sizing:border-box;
position:${props => !props.começar && !props.resposta? 'relative' : ''};
p{
    position:${props => !props.começar && !props.resposta? 'absolute' : ''};
    left:15px;
    top:18px;
}
img{
    position:${props => !props.começar && !props.resposta? 'absolute' : ''};
    right:15px;
    bottom:6px;
    display:${props => props.virar?'flex':'none'};
}
div{
    display: ${props => props.virar || props.resposta? 'none' : 'flex'};
    box-sizing: border-box;
    justify-content:space-between;
    align-items: center;
    position: absolute;
    bottom: 10px;
}
button{
    color: #fff;
    width: 85px;
    height: 37px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center;
}
`