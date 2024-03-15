const express = require('express');
const router = express.Router();


const motocicletasController = require('../controllers/motocicletas.controller');

router.get('/motocicletas', (request, response) => {
    response.render('motocicletas', { 
        motocicletas: motocicletas,
        tituloPagina: 'Lista de Motocicletas' 
    });
});

const motociletasController = require('../controllers/motocicletas.controller')

router.get('/motocicletas', motociletasController.get_moto);

router.post('motocicletas', motociletasController.post_motocicleta)
router.get('/', motociletasController.get_root)


router.get('/editar-moto/:motoId', (request, response) => {
    const motoId = request.params.motoId;
    const moto = motocicletas.find(m => m.id.toString() === motoId);
    if (!moto) {
        return response.status(404).render('includes/404', {
            tituloPagina: 'Moto no encontrada'
        });
    }
    response.render('editarMoto', {
        tituloPagina: 'Editar Motocicleta',
        moto
    });
});

router.post('/editar-moto', (request, response) => {
    const { id, nombre, imagen } = request.body;
    let motoIndex = motocicletas.findIndex(m => m.id.toString() === id);
    if (motoIndex >= 0) {
        motocicletas[motoIndex] = { id, nombre, imagen };
    }
    response.redirect('/motocicletas');
});

router.get('/eliminar-moto/:motoId', (request, response) => {
    const motoId = request.params.motoId;
    motocicletas = motocicletas.filter(m => m.id.toString() !== motoId);
    response.redirect('/motocicletas');
});

module.exports = router;
