//WELCOMEPAGE CREATED BY J.ATWOOD

import React from "react";
import { Welcome, Title, Blurb } from "../styles/WelcomeStyles";
import { ButtonFun } from "./Buttons";

export default function Welcomepage() {
    return (
        <div>
            <Welcome>
            <Title>Dev - Libs</Title>
                <Blurb>
                    Mad-Libs 
                    <br/>
                    for 
                    <br/>
                    Developers
                    </Blurb>
                <div>
                    <ButtonFun />
                </div>
            </Welcome>
        </div>
    )
}