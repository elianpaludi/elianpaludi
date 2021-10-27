import React from 'react'
import '../styles/Windows/windows.css'
const Windows = () => {
    return (
        <div className="container-windows">
            <div className="windows">
                <div className="carpeta"></div>
                    <p className="texto-carpeta">Proyectos</p>
                

                <footer>
                    <div className="iconowindows"></div>
                    <input 
                    type="text" 
                    placeholder="Escribe aqui para buscar"/>
                </footer>
            </div>

            <div className="carpeta_expanded-proyectos">
                
            </div>
        </div>
    )
}

export default Windows
