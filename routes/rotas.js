const router = require('express').Router();

const controller = require('../controllers/Controller');

router.get('/', controller.init);
router.post('/add', controller.post);
router.get('/list', controller.get);
router.get('/update/:id', controller.edit);
router.post('/update/:id', controller.put);
router.get('/delete/:id', controller.delete);

module.exports = router;

