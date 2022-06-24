import React from "react"
import OpenPage from "./OpenPage"
import QuizPage from "./QuizPage"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    function startQuiz() {
        setQuizStarted(prevQuizStarted => !prevQuizStarted)
    }

    return (
        !quizStarted ?
            <OpenPage startQuiz={startQuiz} /> :
            <QuizPage />

    )
}