var express = require('express');
var router = express.Router();

const itemtrackController = require("../controllers/itemtrackController");

/* GET home page. */


router.post('/add', itemtrackController.add)
router.post('/tezos', itemtrackController.tezos)
router.get('/tezos/:key', itemtrackController.tezosRead)
router.get('/read/:name', itemtrackController.read)

module.exports = router;
