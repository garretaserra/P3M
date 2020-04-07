let express = require('express');
let proyectoRouter = express.Router();

let proyectoScripts = require('../controllers/proyectoScripts');

proyectoRouter.post('', proyectoScripts.addProyecto);
proyectoRouter.get('', proyectoScripts.getProyecto);
proyectoRouter.delete('', proyectoScripts.deleteProyecto);
proyectoRouter.get('/getAll', proyectoScripts.getAllProyecto);

module.exports = proyectoRouter;
