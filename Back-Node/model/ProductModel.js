import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        nombre: {type:String},
        clasificacion: {type:String},
        precio: {type: Intl},
        stock: {type:Intl}
    },
    {collection: 'products'}
);

export default mongoose.model('ProductModel', ProductSchema);