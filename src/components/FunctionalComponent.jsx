import { useState, useEffect } from 'react'

const names = ['Pedro', 'Juan', 'Camilo']

export default function FunctionalComponent({ prop1, prop2, prop3 }) {
  const [name, setName] = useState(null)
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const incrementCount = () => {
    setCount(count + 1)
  }

  const handleMouseMove = (event) => {
    window.ball.style.display = 'block'
    const ball = document.getElementById('ball')
    if (ball) {
      const x = event.pageX
      const y = event.pageY
      ball.style.left = x + 'px'
      ball.style.top = y + 'px'
      ball.style.backgroundColor = 'green'
    }
  }

  //1ER METODO DEL CICLO DE VIDA - AL MONTARSE EL COMPONENTE
  useEffect(() => {
    console.log('el componente funcional se monto')
    window.addEventListener('mousemove', handleMouseMove)
    setMessage('Saludos desde Arg Programa')
    setName('Profe Fabio')
  }, [])

  //2DO METODO DEL CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
  useEffect(() => {
    setName(names[count % names.length])
  }, [count])

  //3ER METODO DEL CICLO DE VIDA - AL DESMONTARSE EL COMPONENTE
  useEffect(() => {
    return () => {
      console.log('Desmontando el componente funcional')
      window.removeEventListener('mousemove', handleMouseMove)
      window.ball.style.display = 'none'
    }
  })

  return (
    <div>
      <h1>Componente Funcional</h1>
      <h2>El nombre es: {name}</h2>
      <p>La cuenta va en: {count}</p>
      <p>El mensaje es: {message}</p>
      <button onClick={incrementCount}>Incrementar contador</button>
    </div>
  )
}
