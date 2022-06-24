import React from "react"

export default function OpenPage(props) {
    return (
        <div className="open-page">
            <h1 className="open-title">Quizzical</h1>
            <p className="open-desc">Come and test your knowledge</p>
            <button className="open-btn" onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}