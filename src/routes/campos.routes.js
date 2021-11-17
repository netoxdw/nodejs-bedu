import {Router} from 'express';
const router= Router();
 



router.get('/campos', (req, res)=> {
    res.send('Campos Petroleros de México (routes)')
})



export default router;
