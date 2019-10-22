//WELCOMEPAGE CREATED BY J.ATWOOD

import React from "react";
import { Landing, Title, Blurb } from "../styles/WelcomeStyles";
import { ButtonFun } from "./Buttons";

export default function Welcome() {
    return (
        <div>
            <Landing>
                <Title>Dev - Libs</Title>
                <Blurb>
                    Mad-Libs 
                    <br/>
                    for 
                    <br/>
                    Developers
                </Blurb>
                <ButtonFun />
            </Landing>
        </div>
    )
}