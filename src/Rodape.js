import styled from 'styled-components';
import cards from './listaCards';
import certo from './assets/icone_certo.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'

export default function (props) {
    function imagem(cor){
        if(cor==='verde'){
            return certo
        }else if(cor==='laranja'){
            return quase
        }
        return erro
    }
    return (
        <Container data-test='footer' inicio={props.inicio}>
            <Concluidos>{props.numeroConclusao}/{cards.length} concluídos</Concluidos>
            <div>
                {props.sequencia.map((s)=>(<img data-test={s==='vermelho'?'no-icon':s==='laranja'?'partial-icon':'zap-icon'} src={imagem(s)}/>))}
            </div>
        </Container>
    )
}
const Container = styled.div`
background-color: #fff;
position: fixed;
bottom:0;
left:0;
width: 100%;
min-height: 70px;
display:${props => props.inicio ? 'flex' : 'none'};
flex-direction:column;
align-items: center;
justify-content: space-between;
box-sizing:border-box;
padding:9px;
div{
    display:flex;
    flex-wrap:wrap;
}
img{
    margin:5px;
}
`

const Concluidos = styled.p`
color: #333;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`