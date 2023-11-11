import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const App = () => {
  const [chistes, setchistes] = useState([])
  const [ultimoChiste, setultimoChiste] = useState()

  const obtenerChiste = async () => {

    const response = await axios("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.data;
    data.status === 200 && setultimoChiste(data)
  }
 
  useEffect(() => {
    obtenerChiste()
  }, [])

  useEffect(() => {
    ultimoChiste !== undefined && setchistes([...chistes, ultimoChiste])
  }, [ultimoChiste])



  return (
    <div>
      <button onClick={obtenerChiste}>Añadir</button>
       <div>
        {chistes.map(chiste => (
          <h4 key={chiste.id}>{chiste.joke}</h4>
        ))}
      </div>
      
    </div>
  )
}