import {Router} from 'express';
const router= Router();
const controller= require('../controllers/index.controller')



router.get('/campos', (req, res)=> {
    res.send('Campos Petroleros de México (routes)')
    res.send('/', router.index)
})

export default router;
