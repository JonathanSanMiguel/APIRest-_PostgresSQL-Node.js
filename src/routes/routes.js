const { Router } = require('express');
const router = Router();

const { getAllUsers, getOneUser, createUser, upDateUser, deleteUser } = require('../controllers/controller');

//Rutas para las consultas
//Ruta para taer todos los usuarios
router.get('/usuarios', getAllUsers);
//Ruta para traer un solo usuario
router.get('/usuario/:id', getOneUser);
//Ruta para crear un nuevo usario
router.post('/insertar', createUser);
//Ruta para actualizar un usuario
router.put('/update/:id', upDateUser);
//Ruta para eliminar un usuario
router.delete('/delete/:id', deleteUser);

module.exports = router;