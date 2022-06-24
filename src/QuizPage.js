import React from "react"
import Question from "./Question"

export default function QuizPage(props) {

    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        setQuestions(StoreQuestions())
    }, [])

    function StoreQuestions() {
        return [
            {
                question: "How would one say goodbye in Spanish?",
                choices: ["Adios", "Hola", "Au Revoir", "Salir"]
            },
            {
                question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
                choices: ["Cabbage Patch Kids", "Transformers", "Care Bears", "Rubik's Cube"]
            },
            {
                question: "What is the hottest planet in our Solar System?",
                choices: ["Mercury", "Venus", "Mars", "Saturn"]
            },
            {
                question: "In which country was the caesar salad invented?",
                choices: ["Italy", "Portugal", "Mexico", "France"]
            },
            {
                question: "How Many Hearts Does An Octopus Have?",
                choices: ["One", "Two", "Three", "Four"]
            },
        ]
    }

    function DisplayQuestions() {
        const questionElementArray = []
        for (let i = 0; i < questions.length; i++) {
            questionElementArray.push(
                <Question
                    key={i}
                    question={questions[i].question}
                    choices={questions[i].choices}
                    id={i} />)
        }
        return (
            <div>
                {questionElementArray}
            </div>
        )
    }

    return (
        <div>
            {DisplayQuestions()}
            <button className="quiz-btn">Check answers</button>
        </div>

    )
}