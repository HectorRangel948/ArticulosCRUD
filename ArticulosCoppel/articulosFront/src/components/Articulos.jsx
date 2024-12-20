import {useState} from 'react'
import AgregarArticulo from "./AgregarArticulo";
import ListarArticulos from './ListarArticulos';
import BuscarArticulo from './BuscarArticulo';

const Articulos = ()=>{

    const [opcion, setOpcion] = useState("agregarArticulo");
    const opcionOnChange =(e)=>{
        setOpcion(e.target.value);
        console.log(e.target.value);
    }
    return (<>
        <h1 className="titulo" >Artículos</h1>

        <div className="opcionContenedor">
            <input name="opcion" id="agregarArticulo" value="agregarArticulo" type="radio" defaultChecked="true" onChange={opcionOnChange}></input>
            <label className="opcionLabel" htmlFor="agregarArticulo">Agregar articulo</label>
        </div>
        <div className="opcionContenedor">
            <input name="opcion" id="listarArticulos" value="listarArticulos" type="radio" onChange={opcionOnChange}></input>
            <label className="opcionLabel" htmlFor="listarArticulos">Listar articulos</label>
        </div>

        <div className="opcionContenedor">
            <input name="opcion" id="buscarArticulo" value="buscarArticulo" type="radio" onChange={opcionOnChange}></input>
            <label className="opcionLabel" htmlFor="buscarArticulo">Buscar articulo por SKU</label>
        </div>

        <div className="seleccion">
            {opcion=="agregarArticulo" ? <AgregarArticulo/> : <></>}
            {opcion=="listarArticulos" ? <ListarArticulos/> : <></>}
            {opcion=="buscarArticulo" ? <BuscarArticulo/> : <></>}
        </div>
    </>)
}

    

export default Articulos;