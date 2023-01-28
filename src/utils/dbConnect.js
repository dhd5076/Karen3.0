import mongoose from 'mongoose'

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    mongoose.set('strictQuery', true);
    
    const db = await mongoose.connect("mongodb://karen/karen", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connection
}

export default dbConnect;
