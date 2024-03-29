package com.bolsadeideas.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {
	
	// Spring-Data. El metodo debe llamarse findBy<campo, empezando en mayuscula>. Esto automaticamente
	// hace la siguiente consulta: select u from Usuario u where u.username=?1
	// Para buscar por mas parametro se usa lo suguiente: findBy<campo1>And<campo2>
	public Usuario findByUsername(String username);
	
	@Query("select u from Usuario u where u.username=?1")
	public Usuario findByUsername2(String username);

}
