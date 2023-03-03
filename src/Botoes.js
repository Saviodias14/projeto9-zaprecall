import styled from "styled-components"
export default function (props) {
    function criaSequencia(sequencia, cor) {
        let ultimasCores = [...sequencia]
        ultimasCores.push(cor)
        return ultimasCores
    }
    return (
        <div>
            <Vermelho data-test='no-btn' onClick={() => {
                props.pegaResposta("vermelho", props.indice)
                props.setSequencia(criaSequencia(props.sequencia, 'vermelho'))
            }}>Não lembrei</Vermelho>
            <Laranja data-test='partial-btn' onClick={() => {
                props.pegaResposta("laranja", props.indice)
                props.setSequencia(criaSequencia(props.sequencia, 'laranja'))
            }}>Quase não lembrei</Laranja>
            <Verde data-test='zap-btn' onClick={() => {
                props.pegaResposta("verde", props.indice)
                props.setSequencia(criaSequencia(props.sequencia, 'verde'))
            }}>Zap!</Verde>
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