import styled from "styled-components"
import logo from './assets/logo.png'
export default function TelaInicial(props){
    return(
        <Container inicio={props.inicio}>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <button data-test='start-btn' onClick={()=>props.setInicio(true)}>Iniciar Recall!</button>
        </Container>
    )
}

const Container= styled.div`
width:250px;
display:${props=>!props.inicio?'flex':'none'};
flex-direction:column;
margin: 60px auto;
align-items:center;
img{
    width: 136px;
    height: 161px;
    margin-bottom:13px;
}
h1{
    color: #FFFFFF;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    margin-bottom:30px;
}
button{
    color:#D70900;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
}
button:hover{
    cursor: pointer;
    color: #FB6B6B; 
    background-color:#D3D3D3;
}
`