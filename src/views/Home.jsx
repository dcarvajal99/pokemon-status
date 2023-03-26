import {useState} from 'react';
import '../App.css'
import {useNavigate} from "react-router-dom"


const Home = () =>{
    return(
        <>
            <div 
            className="container vh-100 vw-100 my-4 border-bottom rounded" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">Bienvenido maestro Pokemón!</h1>
                
            </div>
        </>
    )
}
export default Home