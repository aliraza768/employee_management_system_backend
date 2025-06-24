import  mongoose from 'mongoose';

async function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(conn => console.log(`DB Connected With ${conn.connection.host}`))
    .catch(err => console.log(`DB Connection Is Failed.... ${err.message}`));
    }
export default connectDB