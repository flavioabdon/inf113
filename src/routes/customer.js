const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

router.get('/ambiente/', customerController.listarAmb);
router.get('/contrato/', customerController.listarCon);
router.get('/pago/', customerController.listarPag);
router.get('/inquilino/', customerController.listarInq);
module.exports = router;
