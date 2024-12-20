package com.coppel.articulos.model;

import java.sql.Date;

public class Articulo {

    //Propiedades
    private Long id;
    private String sku;
    private String nombre;
    private String marca;
    private int cantidad;
    private Date fechaCreacion;

    //Constructores
    public Articulo(){}
    public Articulo(Long id){
        this.id = id;
    }
    public Articulo(Long id, String sku, String nombre, String marca, int cantidad, Date fechaCreacion){
        this.id = id;
        this.sku=sku;
        this.nombre = nombre;
        this.marca = marca;
        this.cantidad = cantidad;
        this.fechaCreacion = fechaCreacion;
    }

    public Articulo(String sku, String nombre, String marca, int cantidad, Date fechaCreacion){
        this.sku=sku;
        this.nombre = nombre;
        this.marca = marca;
        this.cantidad = cantidad;
        this.fechaCreacion = fechaCreacion;
    }

    //Getters y setters
    public Long getId(){
        return this.id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getSku(){
        return this.sku;
    }

    public void setSku(String sku){
        this.sku = sku;
    }

    public String getNombre(){
        return this.nombre;
    }

    public void setNombre(String nombre){
        this.nombre=nombre;
    }

    public String getMarca(){
        return this.marca;
    }

    public void setMarca(String marca){
        this.marca =marca;
    }

    public int getCantidad(){
        return this.cantidad;
    }

    public void setCantidad(int cantidad){
        this.cantidad=cantidad;
    }

    public Date getFechaCreacion(){
        return this.fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion){
        this.fechaCreacion=fechaCreacion;
    }

}
