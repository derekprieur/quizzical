import React from "react"
import Choice from "./Choice"

export default function Question(props) {

    function selectChoice(choice) {
        console.log(choice)
    }

    function DisplayButtons() {
        const buttonArray = []
        for (let i = 0; i < props.choices.length; i++) {
            buttonArray.push(
                <Choice
                    choice={props.choices[i]}
                    selectChoice={() => selectChoice(props.choices[i])} />
            )
        }
        return buttonArray
    }

    return (
        <div className="question-box">
            <h1 className="question">{props.question}</h1>
            {DisplayButtons()}
        </div>
    )
}