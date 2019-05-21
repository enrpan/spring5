package com.bolsadeideas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long> {
	
	@Query("select p from Producto p where p.nombre like %?1%")
	public List<Producto> findByNombre(String term);
	
	// Forma alternativa al metodo anterior sin usar Query. Se basa en los convenios de 
	// nombres de metodos de JPA (ver doc). El 'Containing' es para indicar que hay que buscar
	// que el campo 'Nombre' contenga el parametro (term). La palabra clave 'IgnoreCase' es para
	// ignorar mayusculas/minusculas
	public List<Producto> findByNombreContainingIgnoreCase(String term);
	
	// Similar al anterior pero busca nombres de productos que empiecen con el term en lugar de que lo contenga
	public List<Producto> findByNombreStartingWithIgnoreCase(String term);

}
