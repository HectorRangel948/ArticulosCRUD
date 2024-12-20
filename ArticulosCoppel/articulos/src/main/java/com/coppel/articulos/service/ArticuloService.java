package com.coppel.articulos.service;

import com.coppel.articulos.connection.Conexion;
import com.coppel.articulos.model.Articulo;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArticuloService {
    public List<Articulo> listarArticulos(){
        List<Articulo> articulos = new ArrayList<>();
        Connection con = Conexion.getConnection();
        PreparedStatement ps;
        ResultSet rs;

        String sql = "SELECT * FROM articulos";

        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                Articulo articulo = new Articulo();
                articulo.setId(rs.getLong("id"));
                articulo.setSku(rs.getString("sku"));
                articulo.setNombre(rs.getString("nombre"));
                articulo.setMarca(rs.getString("marca"));
                articulo.setCantidad(rs.getInt("cantidad"));
                articulo.setFechaCreacion(rs.getDate("fecha_creacion"));
                articulos.add(articulo);
            }

        }catch(Exception e){
            System.out.println(e);
        }finally{
            try{con.close();}catch(Exception e){
                System.out.println(e);}
        }

        return articulos;
    }
    public boolean  crearArticulo(Articulo articulo){
        Articulo nuevoArticulo = articulo;
        PreparedStatement ps;
        String sql = "INSERT INTO articulos(sku, nombre, marca, cantidad, fecha_creacion) VALUES (?,?,?,?,?)";
        Connection con = Conexion.getConnection();

        try{
            ps = con.prepareStatement(sql);
            ps.setString(1,nuevoArticulo.getSku());
            ps.setString(2,nuevoArticulo.getNombre());
            ps.setString(3,nuevoArticulo.getMarca());
            ps.setInt(4,nuevoArticulo.getCantidad());
            ps.setDate(5, nuevoArticulo.getFechaCreacion());
            ps.execute();
            return true;

        }catch(Exception e){
            System.out.println(e);
        }finally{
            try{
                con.close();
            }catch(Exception e){
                System.out.println(e);
            }
        }

        return false;
    }

    public boolean modificarArticulo(Articulo articulo){
        String sql="UPDATE articulos SET sku=?, nombre=?, marca=?, cantidad=?, fecha_creacion=? WHERE id = ?";
        PreparedStatement ps;
        Connection con = Conexion.getConnection();
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, articulo.getSku());
            ps.setString(2, articulo.getNombre());
            ps.setString(3, articulo.getMarca());
            ps.setInt(4, articulo.getCantidad());
            ps.setDate(5, articulo.getFechaCreacion());
            ps.setLong(6, articulo.getId());
            ps.execute();
            return true;
        }catch(Exception e){
            System.out.println(e);
        }finally{try{con.close();}catch(Exception e){
                System.out.println(e);
            }
        }
        return false;
    }

    public boolean eliminarArticulo(long id){
        String sql="DELETE FROM articulos WHERE id = ?";
        PreparedStatement ps;
        Connection con = Conexion.getConnection();
        try{
            ps = con.prepareStatement(sql);
            ps.setLong(1, id);
            ps.execute();
            return true;
        }catch(Exception e){
            System.out.println(e);
        }finally{try{con.close();}catch(Exception e){
            System.out.println(e);
        }
        }
        return false;
    }
}
