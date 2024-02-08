import ListaImagenes from "./ListaImagenes"

const ListaImagenesPage=()=>{
    const listaImagenes=[
        {
            imagen:"https://www.nme.com/wp-content/uploads/2024/02/Lana-Del-Rey@2000x1270-1-696x442.jpg",
            titulo:"The queen herself at the G****** (2024)"
        },
        {
            imagen:"https://www.aljazeera.com/wp-content/uploads/2024/02/AFP__20240205__34HP8XN__v1__HighRes__66thGrammyAwardsShow-1707109457.jpg?resize=1800%2C1800",
            titulo:"She was snubbed once again..."
        },
        {
            imagen:"https://i.imgur.com/sTD5HbC.jpg",
            titulo:":)"
        }
    ]

    return <div>
        <h1>Listado de imagenes</h1>
        <ListaImagenes
            listaImagenes={listaImagenes}
        />
    </div>
}

export default ListaImagenesPage