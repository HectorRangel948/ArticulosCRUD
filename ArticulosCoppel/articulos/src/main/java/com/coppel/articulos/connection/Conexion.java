package com.coppel.articulos.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    public static Connection getConnection(){
        Connection con = null;
        String url = "jdbc:mysql://localhost:3306/coppel";
        String username = "root";
        String password = "pass123";

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url,username,password);
        }catch(Exception e){
            System.out.println(e);
        }finally{
            return con;}
    }

    //Código para probar la conexión a la base de datos
    /*
    public static void main(String[] args) {
        Connection con = getConnection();
        try{
            if(con !=null){
                System.out.println("Éxito");
            }
            else{
                System.out.println("Falló la conexión");
            }
        }catch(Exception e){
            System.out.println(e);
        }finally{
            try{con.close();}catch(Exception e){
                System.out.println(e);
            }
            }
    }
    */
}
