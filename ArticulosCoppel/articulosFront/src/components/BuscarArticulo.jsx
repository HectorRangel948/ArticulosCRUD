import { useState } from "react";

const BuscarArticulo =()=>{

    const[sku, setSku] = useState("");
    const [articuloEncontrado, setArticuloEncontrado] = useState({});

    const buscar =async()=>{
        try{
            await fetch(`http://localhost:8080/articulos/articulo/${sku}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                .then(response => response.json())
                .then(
                    data => {if(data.id !=null){setArticuloEncontrado(data)} else {alert("No se encontró el articulo");}})
                }catch(Error){
                    alert("Hubo un problema con la conexión");
                }
        }

    return (<>
        <div className="contenedorAgregarArticulo">
        <h2 className="subtitulo">Buscar artículo</h2>
            <form>
                <label htmlFor="sku">SKU</label>
                <input type="text" id="sku" onChange={(e)=>setSku(e.target.value)}></input>
                <div className="boton" onClick={(e)=>buscar(e.target.value)}>Enviar</div>
            </form>

            <div className="articulos">
           <table>
            <th>ID</th>
            <th>SKU</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Fecha de creación</th>
           
            <tr key={articuloEncontrado.id}>
                <td>{articuloEncontrado.id} </td>
                <td>{articuloEncontrado.sku} </td>
                <td>{articuloEncontrado.nombre} </td>
                <td>{articuloEncontrado.marca} </td>
                <td>{articuloEncontrado.cantidad} </td>
                <td>{articuloEncontrado.fechaCreacion} </td>
            </tr>
           </table>
        </div>
        </div>
    
    </>)
}

export default BuscarArticulo;