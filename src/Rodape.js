import styled from 'styled-components';
import cards from './listaCards';
export default function(props){
    return(
        <Container inicio={props.inicio}>
            <Concluidos>{props.numeroConclusao}/{cards.length} concluídos</Concluidos>
        </Container>
    )
}
const Container = styled.div`
background-color: #fff;
position: fixed;
bottom:0;
left:0;
width: 100%;
height: 70px;
display:${props=>props.inicio?'flex':'none'};
align-items: center;
justify-content: center;
`

const Concluidos = styled.p`
color: #333;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`