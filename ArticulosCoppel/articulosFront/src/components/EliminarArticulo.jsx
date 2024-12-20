import {useState} from 'react';

const EliminarArticulo = ()=>{

        const [articuloEliminar, setArticuloEliminar] = useState({ id: '' });
    
        const Eliminar = async (id) => {
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
        };

    return (<>

        <div className="contenedorAgregarArticulo">
            <h2>Eliminar Articulo</h2>

            <form>
                <label htmlFor="id">Id del artículo a eliminar</label>
                <input type="number" id="id" name="id" onChange={(e) => setArticuloEliminar({ id: e.target.value })}></input>

                <div className="boton" onClick={()=>Eliminar(articuloEliminar.id)}>Eliminar</div>
            </form>
        </div>
    
    </>)
}

export default EliminarArticulo