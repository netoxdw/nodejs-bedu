const controller= {}
const connection = require('../database/databases')

controller.index=async(req, res) => {
    try{
    await connection()
    console.log('connection ok')
    res.send('Conexion controllers')
}catch(err){
    console.error(err)
}
}

export default controller


