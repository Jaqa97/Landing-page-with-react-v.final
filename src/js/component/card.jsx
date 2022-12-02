import React from "react";

export default function Card(props){
    return(
        <div className="card bg-dark bg-gradient mb-5
        " style={{"width": "18rem"}}>
            <img src={props.img} className="card-img-top my-3" alt="..."/>
            <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">{props.titulo}</h5>
                <p className="card-text text-white">{props.descripcion}</p>
                <a href="#" className="btn btn-primary">Lo Quiero</a>
            </div>
        </div>
    
)
}