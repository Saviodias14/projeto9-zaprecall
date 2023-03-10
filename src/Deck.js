import cards from "./listaCards"
import Botoes from "./Botoes"
import play from './assets/seta_play.png'
import turn from './assets/seta_virar.png'
import certo from './assets/icone_certo.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import styled from "styled-components"
import { useState } from "react"
import verificaArray from "./verificaArray"
function criaArray(tamanho){
    let array = []
    for(let i=0;i<tamanho; i++){
        array.push('')
    }
    return array
}
export default function (props) {
    const [texto, setTexto] = useState('')
    const [resposta, setResposta] = useState(criaArray(cards.length))

    function mostraPergunta(i) {

        if (!resposta[i] && verificaArray(resposta,'clicado') && verificaArray(resposta,'vira')) {
            let novoArray = [...resposta]
            novoArray[i] = "clicado"
            setResposta(novoArray)
            setTexto(cards[i].question)
        } else if(resposta[i]==='clicado') {
            let novoArray = [...resposta]
            novoArray[i] = "vira"
            setResposta(novoArray)
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
            if(r==='verde'||r==='vermelho'||r==='laranja'){
                contador++
            }
        })
        return contador
    }

    function escolheImagem(i){
        switch(resposta[i]){
            case '':
                return play
            case 'clicado':
                return turn
            case 'verde':
                return certo
            case 'laranja':
                return quase
            case 'vermelho':
                return erro
            default:
                return
        }
    }
    function escolheDataTest(i){
        switch(resposta[i]){
            case '':
                return 'play-btn'
            case 'clicado':
                return 'turn-btn'
            case 'verde':
                return 'zap-icon'
            case 'laranja':
                return 'partial-icon'
            case 'vermelho':
                return 'no-icon'
            default:
                return
        }
    }

    return (
        <Container inicio={props.inicio}>
            {cards.map((c, i) => <li data-test='flashcard' key={c.answer}>
                <Inicio resposta={resposta[i]}>
                    <p data-test='flashcard-text'>{!resposta[i] ||(resposta[i]!=='vira' && resposta[i]!=='clicado')? `Pergunta ${i + 1}` : texto}</p>
                    <img data-test={escolheDataTest(i)} onClick={() => mostraPergunta(i)} src={escolheImagem(i)} />
                    <Botoes setSequencia={props.setSequencia} sequencia={props.sequencia} pegaResposta={pegaResposta} indice={i} contador={props.contador(numeroDeRespostas())}></Botoes>
                </Inicio></li>)}
        </Container>
    )
}

const Container = styled.ul`
width:100%;
display:${props=>props.inicio?'flex':'none'};
flex-direction:column;
align-items: center;
`

const Inicio = styled.div`
width: 300px;
height: ${props => props.resposta==='vira' || props.resposta==='clicado'? '131px':'65px'};
background: ${props => props.resposta==='vira' || props.resposta==='clicado'? '#ffffd4':'#FFFFFF' };
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
box-sizing:border-box;
position:${props => props.resposta==='clicado' || props.resposta==='vira' ? 'relative' : ''};
p{
    position:${props => props.resposta==='clicado' || props.resposta==='vira' ? 'absolute' : ''};
    left:15px;
    top:18px;
    color: ${props=>{
        if(props.resposta==='verde'){
            return '#2FBE34'
        }else if(props.resposta==='vermelho'){
            return '#FF3030'
        }else if(props.resposta==='laranja'){
            return '#FF922E'
        }else{
            return '#333'
        }
    }};
    text-decoration:${props=>!props.resposta||props.resposta==='clicado'||props.resposta==='vira'?'':'line-through'}
}
img{
    position:${props => props.resposta==='clicado' || props.respos==='vira' ? 'absolute' : ''};
    right:15px;
    bottom:6px;
    display:${props => props.resposta==='vira'?'none':'flex'};
}
img:hover{
    cursor: ${props=>!props.resposta||props.resposta==='clicado'||props.resposta==='vira'?'pointer':''};
}
div{
    display: ${props => props.resposta!=='vira'? 'none' : 'flex'};
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