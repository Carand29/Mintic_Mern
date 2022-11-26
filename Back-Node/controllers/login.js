import bcrypt from 'bcrypt'
import Usuario from '../model/usuario.js'
// const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        // const data = {
        //   id,
        //   nombre,
        // };

        // const token = jwt.sign(data, "secreto", {
        //   expiresIn: 86400 /* 24hs */,
        // });

        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

export default login;