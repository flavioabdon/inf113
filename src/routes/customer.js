const router = require('express').Router();

const customerController = require('../controllers/customerController');

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

router.get('/ambiente/updateAmb/:id', customerController.editAmb);
router.get('/contrato/updateCon/:id', customerController.editCon);
router.get('/pago/updatePag/:id', customerController.editPag);
router.get('/inquilino/updateInq/:id', customerController.editInq)

router.post('/ambiente/updateAmb/:id', customerController.updateAmb);
router.post('/contrato/updateCon/:id', customerController.updateCon);
router.post('/Pago/updatePag/:id', customerController.updatePag);
router.post('/inquilino/updateInq/:id', customerController.updateInq);

module.exports = router;
