import { useEffect, useState } from "react";

const ConsultaAPI = () => {

  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const consultarinfo = async () => {
      const response = await fetch(endpoint)
      await response.json().then((data)=>{
        setPokemon(data);
        console.log(data)
      })
      
    }
    consultarinfo()
  }, []);

}
export default ConsultaAPI;