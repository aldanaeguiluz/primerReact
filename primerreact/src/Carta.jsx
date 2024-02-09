import { useState } from "react"

const Carta=(props)=>{
    const [color, setColor]= useState("#FFFFFF")

    const estiloCard={
        width:"300px",
        marginBottom: "20px",
        backgroundColor: color
    }

    const cardOnClick=()=>{
        if(color == "#FFFFFF") setColor("#FFE9F2")
        else setColor("#FFFFFF")
    }

    return <div 
                className="card" 
                style={estiloCard}
                onClick={cardOnClick}>
        <img src={props.imagen}>
        </img>
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
        </div>
    </div>
}

export default Carta