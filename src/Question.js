import React from "react"

export default function Question(props) {

    function DisplayButtons() {
        const buttonArray = []
        for (let i = 0; i < props.choices.length; i++) {
            buttonArray.push(
                <button className="choice">{props.choices[i]}</button>
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