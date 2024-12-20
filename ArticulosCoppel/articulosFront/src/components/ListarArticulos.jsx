import {useEffect, useState} from 'react'
import ModificarArticulo from './ModificarArticulo';

const ListarArticulos = ()=>{

    const [articulos, setArticulos] =useState([]);

   
    const responseInfo = (data) => {
        const nuevosArticulos = data.map((info) => ({
          id: info.id,
          sku: info.sku,
          nombre: info.nombre,
          marca: info.marca,
          cantidad: info.cantidad,
          fechaCreacion: info.fechaCreacion,
        }));
    
        setArticulos(nuevosArticulos);
        console.log(articulos);
    }

    const pedirArticulos =async()=>{
        try{
            await fetch('http://localhost:8080/articulos/articulo',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                .then(response => response.json())
                .then(
                    data => {if(data){responseInfo(data)} else {alert("No se pudo cargar la lista de articulos");}})
                }catch(Error){
                    alert("Hubo un problema con la conexión");
                }
        }

        useEffect(() => {
            pedirArticulos();
          }, []);

        const [articuloEliminar, setArticuloEliminar] = useState({ id: '' });


        const EliminarArticulo = async (id) => {
        
                try {
                    const response = await fetch(`http://localhost:8080/articulos/articulo/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (response.ok) {
                        alert("Artículo eliminado exitosamente");
                        setArticuloEliminar({ id: '' }); // Limpia el formulario
                    } else {
                        alert("No se pudo eliminar el artículo");
                    }
                } catch (error) {
                    alert("Hubo un problema con la conexión");
                }
    }

    const [editar, setEditar] = useState(false);

    const [articuloAModificar, setArticuloAModificar] = useState({});

    const Editar =(articulo)=>{
        setEditar(true);
        setArticuloAModificar(articulo);
    }


    return (<>
    <div className="contenedorAgregarArticulo">
        <h2 className="subtitulo">Listar Articulos</h2>

        <div className="articulos">
           <table>
            <th>ID</th>
            <th>SKU</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Fecha de creación</th>
            <th>Eliminar</th>
            <th>Editar</th>

            {articulos.map((articulo) => (
            <tr key={articulo.id}>
                <td>{articulo.id} </td>
                <td>{articulo.sku} </td>
                <td>{articulo.nombre} </td>
                <td>{articulo.marca} </td>
                <td>{articulo.cantidad} </td>
                <td>{articulo.fechaCreacion} </td>
                <td><button value={articulo.id} onClick={(e)=>EliminarArticulo(e.target.value)}>Eliminar</button></td>
                <td><button onClick={()=>Editar(articulo)}>Editar</button></td>
            </tr>
          ))}
           </table>
        </div>
        </div>

        {editar == true ? <ModificarArticulo articulo={articuloAModificar}/> : <></>}
    </>)
}

export default ListarArticulos;