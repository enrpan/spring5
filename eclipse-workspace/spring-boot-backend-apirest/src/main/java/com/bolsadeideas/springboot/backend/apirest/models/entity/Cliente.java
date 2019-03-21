package com.bolsadeideas.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="clientes")
public class Cliente implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) // Autogenerado. SEQUENCE se usa con Oracle
	private Long id;
	
	// Para estos tres siguientes datos no se usa @Column porque el atributo tiene
	// el mismo nombre que el campo de BD. Se puede usar también para indicar 
	// caracteristicas como el tamaño, si es nullable, etc...
	
	@NotEmpty(message = "no puede ser vacio")
	@Size(min=4, max=12, message="el tamaño tiene que ser entre 4 y 12")
	@Column(nullable=false)
	private String nombre;
	
	@NotEmpty(message = "no puede ser vacio")
	private String apellido;
	
	@NotEmpty(message = "no puede ser vacio")
	@Email(message = "no es una dirección de correo bien formada")
	@Column(nullable=false, unique=false)
	private String email;
	
	@NotNull(message = "no puede ser vacio")
	@Column(name="create_at")
	@Temporal(TemporalType.DATE)  // Tipo de fecha: date, timestamp, ...
	private Date createAt;
	
	private String foto;
	
	// El metodo PrePersist es propio de los @Entity y se ejecuta justo antes
	// de hacer persistente (de guardar) el objeto.
	//@PrePersist
	//public void prePersist() {
	//	createAt = new Date();
	//}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}
	
	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
