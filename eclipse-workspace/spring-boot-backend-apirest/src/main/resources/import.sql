INSERT INTO regiones (id, nombre) VALUES(1, 'Sudamerica');
INSERT INTO regiones (id, nombre) VALUES(2, 'Centroamerica');
INSERT INTO regiones (id, nombre) VALUES(3, 'Norteamerica');
INSERT INTO regiones (id, nombre) VALUES(4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES(5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES(6, 'Africa');

/* Populate tabla clientes */
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(4, 'Enrique', 'Paniego', 'mail@gmail.com', '2018-01-01');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(1, 'Username2', 'Apellido2', 'user2@gmail.com', '2018-01-02');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(2, 'Username3', 'Apellido3', 'user3@gmail.com', '2018-01-03');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(3, 'Username4', 'Apellido4', 'user4@gmail.com', '2018-01-04');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(4, 'Username5', 'Apellido5', 'user5@gmail.com', '2018-01-05');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(5, 'Username6', 'Apellido6', 'user6@gmail.com', '2018-01-06');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(6, 'Username7', 'Apellido7', 'user7@gmail.com', '2018-01-07');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(1, 'Username8', 'Apellido8', 'user8@gmail.com', '2018-01-08');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(2, 'Username9', 'Apellido9', 'user9@gmail.com', '2018-01-09');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(3, 'Username10', 'Apellido10', 'user10@gmail.com', '2018-01-10');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(4, 'Username11', 'Apellido11', 'user11@gmail.com', '2018-01-11');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(5, 'Username12', 'Apellido12', 'user12@gmail.com', '2018-01-12');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(6, 'Username13', 'Apellido13', 'user13@gmail.com', '2018-01-13');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES(2, 'Username14', 'Apellido14', 'user14@gmail.com', '2018-01-14');

/* Usuarios con sus roles */
/* Las passwords son 12345 encriptadas con BCrypt */
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('enrique', '$2a$10$EH/N2v4F13ydK3zM0.6HNu05fW7R7P2rQYfDHohKTCdGN8SpUt9AS', 1, 'Enrique', 'Paniego', 'eps@gmail.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin', '$2a$10$ULshhtxKv74TCVZjMRv7XODmGq7b8rHxdQC4T5GmmTTnz4FvTqktW', 1, 'User2', 'Apellido2', 'user2@gmail.com');

/* El prefijo ROLE_ es obligatorio */
INSERT INTO roles (nombre) VALUES ('ROLE_USER');	
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 1);

/* Populate table productos */
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto1', 111111, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto2', 222222, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto3', 333333, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto4', 444444, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto5', 555555, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto6', 666666, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto7', 777777, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto8', 888888, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES('Producto9', 999999, NOW());

/* Creamos algunas facturas */
INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura equipos de oficina', null, 1, NOW());
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 1);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(2, 1, 4);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 5);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 7);

INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura Bicicleta', 'Alguna nota importante!', 1, NOW());
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(3, 2, 6);



