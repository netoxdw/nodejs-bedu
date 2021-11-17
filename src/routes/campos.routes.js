import {Router} from 'express';
const router= Router();
 const controller = require('../controlles/index.controlles').default

router.get('/', controller.index)

router.get('/campos', (req, res)=> {
    res.send('Campos Petroleros de México (routes)')
})



export default router;
