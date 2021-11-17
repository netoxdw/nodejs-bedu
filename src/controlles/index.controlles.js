const controller ={}
const connection= require ('../dbconnection/database')

controller.index = async(req, res) => {
    try{
    const title = 'index desde el servidor con una variable'
    await connection()
    console.log('conection ok')
    res.send('index', {title})
    }catch(err){
        console.error(err)
    }
}
(controller.index)
export default controller


