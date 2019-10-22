import styled from "styled-components";

const Test = styled.div `
    // border: teal dashed 1px;
    width: 28%;
    display: flex;
    margin: 0 auto;
    padding: 30px;
    margin-bottom: 20px;
`
const Fun = styled.div `
    // border: solid 2px magenta;
    width: 200px;
    height: 50px;
    background: #29ABA4;
    text-align: center;
    margin: 0 auto;
    padding: 15px;
    font-size: 1.3rem;
    border-radius: 10px;
`

const Button = styled.button `
    border: solid 2px magenta;
    color: white;
    width: 100px;
    height: 25px;
    background: #29ABA4;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    margin-top: 20px;
`

const A = styled.a `
    color: white;
    text-decoration: none;
    font-family: Libre Baskerville;
    font-style: normal;
    font-weight: normal;
    border: none;
    // border: solid 2px green;
`

export { Button, A, Test, Fun };