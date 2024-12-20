package com.coppel.articulos.controller;

import com.coppel.articulos.model.Articulo;
import com.coppel.articulos.service.ArticuloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
@RequestMapping("/articulos")
@CrossOrigin(origins = "http://localhost:5173") // Reemplaza con la URL de tu frontend
public class ArticuloController {
    @Autowired
    ArticuloService articuloService;

    @GetMapping("articulo")
    public List<Articulo> listarArticulos(){
        return articuloService.listarArticulos();
    }


    @PostMapping("articulo")
    public ResponseEntity<Boolean> agregarArticulo(@RequestBody Articulo articulo){
        boolean response = articuloService.crearArticulo(articulo);
        return ResponseEntity.ok(response);
    }

    @PutMapping("articulo")
    public boolean modificarArticulo(@RequestBody Articulo articulo){
        return articuloService.modificarArticulo(articulo);
    }

    @GetMapping("/articulo/{sku}")
    public Articulo buscarArticulo(@PathVariable String sku){
        Articulo articulo = new Articulo();
        try{
            articulo = articuloService.buscarArticulo(sku);
        }catch(Exception e){
            System.out.println(e);}

        return articulo;
    }

    @DeleteMapping("/articulo/{id}")
    public ResponseEntity<?> eliminarArticulo(@PathVariable Long id) {
        try {
            articuloService.eliminarArticulo(id);
            return ResponseEntity.ok().body("Artículo eliminado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se pudo eliminar el artículo");
        }
    }

}
