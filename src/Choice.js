import React from "react"

export default function Choice(props) {
    return <button className="choice" onClick={props.selectChoice}>{props.choice}</button>
}