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

router.get('/ambiente/deleteAmb/:id', customerController.deleteAmb);
router.get('/contrato/deleteCon/:id', customerController.deleteCon);
router.get('/pago/deletePag/:id', customerController.deletePag);
router.get('/inquilino/deleteInq/:id', customerController.deleteInq);

router.post('/ambiente/addAmb', customerController.saveAmb);
router.post('/contrato/addCon', customerController.saveCon);
router.post('/pago/addPag', customerController.savePag);
router.post('/inquilino/addInq', customerController.saveInq);

//router.get('/ambiente/update/:id', customerController.edit);
//router.get('/contrato/update/:id', customerController.edit);
//router.get('/pago/update/:id', customerController.edit);
//router.get('/inquilino/update/:id', customerController.edit);

module.exports = router;
