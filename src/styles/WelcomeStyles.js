//Profile CREATED BY J.ATWOOD
//Styles Welcome.js, 

import styled from "styled-components";

//Main display box on Welcome
const Landing = styled.div `
    width: 70%;
    height: 450px;
    background: #D6E3F3;
    // border: solid red 2px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
`

//Smaller Title/Header Box within Landing
const Title = styled.h1 `
    width: 400px;
    height: 75px;
    background: #E0FFFF;
    // border: solid red 2px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    font-size: 2.5rem;
    color: #354458;
    font-weight: normal;
`

//description h2's within the Landing on welcome
const Blurb = styled.h2 `
    text-align: center;
    color: #354458;
    font-weight: normal;
    line-height: 2.5;
    // border: solid magenta 2px;
`

export { Landing, Title, Blurb };