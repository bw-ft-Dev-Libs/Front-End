import styled from "styled-components";

const Navvy = styled.div `
    // border: #29ABA4 solid 3px;
    // background: #29ABA4;
    height: 150px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`

const Logo = styled.div `
    // border: green solid 2px;
    color: white;
    text-decoration: none;
    background: #354458;
    font-weight: bold;
    font-size: 50px;
    // float: left;
    height: 65px;
    padding: 15px;
    width: 200px;
    // top: 30;
    // display: flex;
`

const NavElems = styled.div `
    // border: yellow 2px solid;
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
`

// const NavTag = styled.a `
//     border: orange solid 1px;
// `

export { Navvy, Logo, NavElems };