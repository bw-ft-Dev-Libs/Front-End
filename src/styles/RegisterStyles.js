import styled from "styled-components";

const AcctLink = styled.div `
    text-align: center;
    font-size: 15px;
    line-height: 4;
`

//Register/Login Form Boxes
const Box = styled.div `
    border: magenta solid 2px;
    display: flex;
    flex-direction: column;
    height: 100%
    padding: 12px;
    
`

//Register and Login Form Cards
const Card = styled.div `
    border: teal solid 2px;
    display: flex;
    width: 20%;
    flex-direction: column;
    height: 400px;
    margin: 0 auto;
    padding: 40px;
    justify-content: space-around;
`

export { AcctLink, Card, Box };