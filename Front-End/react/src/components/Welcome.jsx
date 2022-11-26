import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.css';
import Carousel from '../Carousel';

//creamos el componente
const Welcome = ()=>{
    //configuramos los hooks
    const [usuario, setUsuario] = useState('');
    
    const navigate = useNavigate();

    //método de redireccionamiento
    const elegir = (e)=>{
        e.preventDefault();
        if (usuario == 'admin'){
            navigate('/ListProduct')
        }
        else{
            navigate('/contact')
        }
    };


    return(
        <div className="main">
          <div className="box">
          <div className='box1'>
        <text className='title'>New book just released!</text>
        <p className='description'>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </div>
          <div className='box2'>
        <Carousel />
      </div> 
      </div>
            <div className="row justify-content-center py-5">
                    <form className="form-control-lg" onSubmit={elegir}>
                        <button type="submit" className="buttona" onClick={(e)=>setUsuario('admin')} ><i className="fa-solid fa-hammer fa-xl"></i> Administrador</button>
                        <button type="submit" className="buttonb" onClick={(e)=>setUsuario('client')}><i className="fa-solid fa-user fa-xl"></i> Cliente</button>
                    </form>
            </div>
                       
        </div>
    )
};

export default Welcome;