import { useState } from "react"

const FormularioImagen = (props) => {

    const [url, setUrl] = useState("")
    const [titulo, setTitulo] = useState("")

    const changeUrlHandler = (e) => {
        setUrl(e.target.value)
    }

    const changeTituloHandler = (e) => {
        setTitulo(e.target.value)
    }

    const guardarImagen = () => {
        props.guardar(url, titulo)
    }

    return <form>
        <div className="mb-3">
            <label htmlFor="urlimagen" className="form-label">
                URL Imagen
            </label>
            <input 
                type="text" 
                className="form-control"
                value={url} 
                onChange= { changeUrlHandler }
                id="urlimagen"/>
        </div>
        <div className="mb-3">
            <label htmlFor="tituloimagen" className="form-label">
                Titulo
            </label>
            <input 
                type="text" 
                className="form-control" 
                value={titulo}
                onChange={changeTituloHandler}
                id="tituloimagen"/>
        </div>
        <button type="button" 
                className="btn btn-primary"
                onClick={guardarImagen}>Guardar</button>
    </form>
}

export default FormularioImagen