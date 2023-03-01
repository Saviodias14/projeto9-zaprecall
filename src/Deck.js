import cards from "./listaCards"
import play from './assets/seta_play.png'
import styled from "styled-components"
export default function () {
    return (
        <Container>
            {cards.map((c, i) => <li>
                <div>
                    <p>Pergunta {i+1}</p>
                    <img src={play}/>
                </div></li>)}
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing:border-box;
}
`