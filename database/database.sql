CREATE DATABASE apirest;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    email TEXT
);

INSERT INTO usuarios (nombre, email) VALUES 
('jose', 'exaple@emial.com'),
('jonathan', 'jona@email.com'),
('juan', 'ja@email.com'),
('maria', 'ma@email.com');