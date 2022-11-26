import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nombre: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
});

export default mongoose.model('Usuario', UsuarioSchema);