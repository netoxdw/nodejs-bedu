import mongoose, { connection } from 'mongoose';

const dbname= 'camposmx'
const password='zootycoon11';
const uri=`mongodb+srv://Netocdw:${password}@cluster0.egvin.mongodb.net/${dbname}myFirstDatabase?retryWrites=true&w=majority`

// (async ( ) => {
//     await mongoose.connect()
//     console.log(db,connection.name);
// })();


module.exports= ()=> mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

