import { useEffect, useState } from "react"

const ModificarArticulo =(art)=>{
    const fecha = new Date().toISOString().split("T")[0]; //Formatea la fecha yyyy-mm-dd

    //Objeto que almacena los datos de los inputs para la creación del artículo
    const [articulo, setArticulo] = useState(art.articulo);

    //Variables que registran los cambios en los inputs
    const {id,sku,nombre,marca,cantidad,fechaCreacion} = articulo;

    //Función que administra el almacenamiento de los valores de cada variable hacia el objeto articulo
    const inputChange =({target:{name,value}})=>{
        setArticulo({
            ...articulo, 
            [name]:value,
            fechaCreacion:fecha
        });
    }

    //Función que se encarga de hacer la conexión con la API para almacenar el objeto articulo
    const modificarArticulo =async ()=>{
        try{
            await fetch('http://localhost:8080/articulos/articulo',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify(articulo)
                })
                .then(response => response.json())
                .then(
                    data => {if(data){alert("Artículo modificado exitosamente");} else {alert("No se pudo modificar el articulo");}})
                }catch(Error){
                    alert("Hubo un problema con la conexión");
                }

                //Limpia el formulario sin recargar la página
                setArticulo({
                    id:'',
                    sku:'',
                    nombre:'',
                    marca:'',
                    cantidad:'',
                    fechaCreacion: ''
                })
        }

    return (<>
     <div className="contenedorAgregarArticulo">
            <h2 className="subtitulo">Agregar artículo</h2>
            <form>
                <label htmlFor="sku">SKU</label>
                <input type="text" id="sku" name="sku" onChange={inputChange} value={sku} maxLength={6}></input>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={inputChange} value={nombre}></input>

                <label htmlFor="marca">Marca</label>
                <input type="text" id="marca" name="marca" onChange={inputChange} value={marca}></input>

                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" id="cantidad" name="cantidad" onChange={inputChange} value={cantidad}></input>

                <div className="boton" onClick={modificarArticulo}>Modificar</div>

            </form>
        </div>
    </>)
}

export default ModificarArticulo