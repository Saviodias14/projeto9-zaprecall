import styled from "styled-components"
export default function (props) {
    return (
        <div>
            <Vermelho onClick={()=>props.pegaResposta("vermelho", props.indice)}>Não lembrei</Vermelho>
            <Laranja onClick={()=>props.pegaResposta("laranja", props.indice)}>Quase não lembrei</Laranja>
            <Verde onClick={()=>props.pegaResposta("verde", props.indice)}>Zap!</Verde>
        </div>
    )
}

const Vermelho = styled.button`
background-color:#FF3030;
margin-right:8px;
`
const Laranja = styled.button`
background-color:#FF922E;
margin-right:8px;
`
const Verde = styled.button`
background-color:#2FBE34;
`