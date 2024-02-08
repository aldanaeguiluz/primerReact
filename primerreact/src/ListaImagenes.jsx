import Carta from "./Carta"

const ListaImagenes=(props)=>{

    return <div>
        {
            props.listaImagenes.map((elem) => {
                return <Carta
                    imagen={elem.imagen}
                    titulo={elem.titulo}
                />
            })
        }
    </div>
}

export default ListaImagenes