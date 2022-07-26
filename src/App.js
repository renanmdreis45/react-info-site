import React from "react"
import Nav from "./components/Nav.js"
import MainContent from "./components/MainContent.js"

export default function App() {
    return (
        <div className="container">
            <Nav/>
            <MainContent />
        </div>
    )
}