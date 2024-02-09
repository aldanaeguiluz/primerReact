import FormularioImagen from "./FormularioImagen"

const FormularioImagenPage = () => {

    const guardarImagen= (url, titulo) => {
        console.log("Deberia almacenar una imagen con url: " + url + " y titulo: " + titulo)
    }

    return <div className="container">
        <h1>Formulario imagen</h1>
        <FormularioImagen guardar={guardarImagen}/>
    </div>
}

export default FormularioImagenPage