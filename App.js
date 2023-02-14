import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const travels = data.map(travel => 
    <Card
    key={travel.id}
    {...travel} />)
    return (
        <div>
        <Navbar />
        <section className="card--section">
        {travels}
        </section>
        </div>
    )
}