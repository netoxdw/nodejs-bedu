
import express from 'express';
import Campos from './routes/campos.routes'
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=>{
    res.json({message: "Petroleros Mx"})
})

// routes
 app.use(Campos)


export default app;