import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LlamadaApi() {
  const [character, setCharacter] = useState(null)
  const [count, setCount] = useState(1)

  const incrementCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    /*    fetch('https://rickandmortyapi.com/api/character/1')
      .then((res) => res.json())
      .then((res) => setCharacter(res)) */
    axios
      .get(`https://rickandmortyapi.com/api/character/${count}`)
      .then((res) => setCharacter(res.data))
  }, [count])

  return (
    <div>
      <h2>El personaje es: {character?.name}</h2>
      <img src={character?.image} alt={character?.name} />
      <button onClick={incrementCount}>Incrementar contador</button>
    </div>
  )
}
