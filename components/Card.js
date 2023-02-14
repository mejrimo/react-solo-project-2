import React from "react"

export default function Card(props) {
    return(
        <div>
        
        <div className="card">
        <img src={props.imageUrl} className="panorama"/>
        <div>
        <div className="positions">
        <img src="../img/pathIcon.png" />
        <p className="location">{props.location}</p>
        <a href={props.googleMapsUrl} className="google--maps">View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <h6 className="card--date">{props.startDate} - {props.endDate}</h6>
        <p className="card--description">{props.description}</p>
        </div>
        </div>
        <hr />
        </div>
    )
}