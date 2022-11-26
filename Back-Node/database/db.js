import mongoose from 'mongoose';

const MONGO_URL = "mongodb://localhost:27017/marketPlace";

const db = async () => {
    await mongoose
    .connect(MONGO_URL)
    .then(()=> console.log("DB FUNCIONANDO"))
    .catch((error)=> console.error(error));
};

export default db;