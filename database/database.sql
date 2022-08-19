CREATE DATABASE apirest;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    email TEXT
);

INSERT INTO usuarios (nombre, email) VALUES 
('jose', 'exaple@emial.com'),
('jonathan', 'jona@email.com'),
('nahomi', 'na@email.com'),
('eliana', 'eli@email.com');