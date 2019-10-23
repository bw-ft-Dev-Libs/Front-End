import styled from "styled-components";

const CardCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: lightblue;
  justify-content: space-around;
`;

const Card = styled.div`
width: 45%;
border-radius: 20px;
border: 3px black solid;
box-shadow black 0 4px 4px 0;
background-color: white;
padding: 5px;
margin: 10px;
`;

export { Card, CardCont };
