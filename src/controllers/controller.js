const { Pool } = require('pg');

//Cadena de conexion a la base de datos
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'apirest'
});

//Metodo para obtener todos los usuarios
const getAllUsers = async(req, res) => {
    //Query para traer todos los usuarios 
    const response = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(response.rows);
};

//Metodo para obtener un usuario
const getOneUser = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id=$1', [id]);
    res.json(response.rows);
};

//Metodo para insertar un nuevo usuario
const createUser = async(req, res) => {
    const { nombre, email } = req.body;
    //Query para insertar los datos a la base de datos
    const response = await pool.query(
        'INSERT INTO usuarios (nombre, email) VALUES ($1, $2)', [nombre, email]
    );
    console.log(response);
    res.json({
        message: 'Usuario creado satisfactoriamente',
        body: {
            usuario: { nombre, email }
        }
    });
};

//Metodo para actualizar un usuario
const upDateUser = async(req, res) => {
    const id = req.params.id;
    const { nombre, email } = req.body;
    const response = await pool.query(
        'UPDATE usuarios SET nombre=$1, email=$2 WHERE id=$3', [nombre, email, id]
    );
    console.log(response);
    res.json('Usuario actualizado satisfactoriamente')
};

//Metodo para eliminar un usuario de la base de datos
const deleteUser = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios WHERE id=$1', [id]);
    console.log(response);
    res.json(`Usuario ${id} borrado satisfactoriamente`);
};

//Metodo para exportar los metodo
module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    upDateUser,
    deleteUser,
};