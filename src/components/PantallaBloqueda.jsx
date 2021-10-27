import {React, useState} from 'react'
import '../styles/Index/index.css'
const PantallaBloqueda = () => {
        const hora = new Date().getHours() //Hora actual
        const minutos = new Date().getMinutes()  //Minutos   
        let dia = new Date().getDay() //Dia de la semana (Lunes, Martes, etc)
        const mes = new Date().getMonth() + 1; //Mes + 1 para que de el actual
        const fecha = new Date().getDate() //Obtenemos la fecha del mes (22, 24, 27, etc)
    

            if(dia === 1){ //Transformamos el dia de la semana a letras
                dia='Lunes,'
            }
            if(dia === 2){//Transformamos el dia de la semana a letras
                dia='Martes,'
            }
            if(dia === 3){//Transformamos el dia de la semana a letras
                dia='Miercoles,'
            }
            if(dia === 4){//Transformamos el dia de la semana a letras
                dia='Jueves,'
            }
            if(dia === 5){//Transformamos el dia de la semana a letras
                dia='Viernes,'
            }
            if(dia === 6){//Transformamos el dia de la semana a letras
                dia='Sabado,'
            }
            if(dia === 0){//Transformamos el dia de la semana a letras
                dia='Domingo,'
            }
            
           

    ////////////////////////////////////////////////////////////////////////////////

    //Usuario y cambio de usuario 

            let usuario = "Elian Rodriguez"
    ////////////////////////////////////////////////////////////////////////////////

            //Trabajamos con el fondo de la pantalla

        

            function backgroundUno(){
                let backgroundUno = document.getElementById('backgroundUno')
                    backgroundUno.classList.add('animacion-arriba')
            }

    ////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////
            //Trabajo con la contraseña de ingreso a windows10
                
                const [pass, setPass] = useState('')
                let errorPIN = document.getElementById('#errorPIN');
                console.log(errorPIN)
                if(pass === '1234'){
                    window.location.href = 'http://localhost:3000/windows'
                }else{
                    // errorPIN.classList.remove('none')
                }

    ////////////////////////////////////////////////////////////////////////////////

    function helper(){
        let helperEsp = document.getElementById('helperEsp')
        let helperEng = document.getElementById('helperEng')
        helperEsp.classList.toggle('none');
    }

    return (
        <div className="container">
            <div onClick={backgroundUno} id="backgroundUno" className="background">
                <div className="container-block">

                <div className="hora">
                    <p id="parrafoHora">{hora}</p>
                    <p>:</p>
                    <p id="parrafoMinutos">{minutos}</p>
                </div>

                <div className="dia">
                    <p>{dia}</p>
                    <p>{mes} </p>
                    <p>{fecha}</p>
                </div>
                </div>
            </div>

            <div className="backgroundIngreso">
                <div className="ingreso">
                    <div className="imagenDeUsuario"></div>
                    <h2>{usuario}</h2>
                        <p id="errorPIN" class="none">1234</p>
                    <div className="contenedorDeIngreso">
                        <input 
                        onChange={(e) => setPass(e.target.value)}
                        type="password" id="inputIngreso"
                        minLength="4"
                        maxLength="4"
                        placeholder="Enter your password"
                        />
                        
                        <div onClick={helper}className="pregunta">?</div>
                        
                    </div>
                        <p id="helperEsp" class="helper none">Intenta con 1234</p>
                </div>
            </div>

        </div>
    )
}

export default PantallaBloqueda
