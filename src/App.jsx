import { useState } from 'react'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import LlamadaApi from './components/LlamadaApi'

function App() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <>
      <h1>Ciclo de Vida</h1>
      <LlamadaApi />
      <div id="ball" className="ball"></div>
      <button onClick={() => setMostrar(!mostrar)}>
        {(mostrar ? 'Cambiar Functional' : 'Cambiar Class') + ' component'}
      </button>
      {mostrar ? <ClassComponent /> : <FunctionalComponent />}
    </>
  )
}

export default App
