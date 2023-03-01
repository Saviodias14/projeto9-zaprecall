import styled from 'styled-components'
import logo from './assets/logo.png'
export default function () {
    return (
        <Container>
            <Logo src={logo} />
            <Titulo>ZapRecall</Titulo>
        </Container>
    )
}
const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 51px;
`

const Logo = styled.img`
width: 52px;
height: 60px;
`

const Titulo = styled.h1`
color: #fff;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em
`