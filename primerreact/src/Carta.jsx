const Carta=(props)=>{
    const estiloCard={
        width:"300px",
        marginBottom: "20px"
    }

    return <div className="card" style={estiloCard}>
        <img src={props.imagen}>
        </img>
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
        </div>
    </div>
}

export default Carta