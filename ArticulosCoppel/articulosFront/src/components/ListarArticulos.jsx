import {useEffect, useState} from 'react'

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


    return (<>
    <div className="contenedorAgregarArticulo">
        <h2 className="subtitulo">Listar Articulos</h2>

        <div className="articulos">
           <ul>
            {articulos.map((articulo) => (
            <li key={articulo.id}>
             {articulo.id} - {articulo.sku} - {articulo.nombre} - {articulo.marca} - {articulo.cantidad} - {articulo.fechaCreacion}
            </li>
          ))}
           </ul>
        </div>
        </div>
    </>)
}

export default ListarArticulos;