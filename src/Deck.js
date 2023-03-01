import cards from "./listaCards"
import styled from "styled-components"
export default function () {
    return (
        <Container>
            {cards.map(c => <li><div>{c.question}</div></li>)}
        </Container>
    )
}

const Container = styled.ul`
width:100%;
display:flex;
flex-direction:column;
align-items: center;
div{
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
}
`