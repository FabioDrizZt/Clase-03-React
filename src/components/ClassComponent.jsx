import { Component } from 'react'
const names = ['Pedro', 'Juan', 'Camilo']

export default class ClassComponent extends Component {
  state = {
    name: null,
    count: 0,
    message: ''
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMouseMove = (event) => {
    window.ball.style.display = 'block'
    const ball = document.getElementById('ball')
    if (ball) {
      const x = event.pageX
      const y = event.pageY
      ball.style.left = x + 'px'
      ball.style.top = y + 'px'
      ball.style.backgroundColor = 'red'
    }
  }

  componentDidMount() {
    //1ER METODO DEL CICLO DE VIDA - AL MONTARSE EL COMPONENTE
    console.log('el componente de clase se monto')
    window.addEventListener('mousemove', this.handleMouseMove)
    this.setState({
      message: 'Saludos desde Arg Programa',
      name: 'Profe Fabio'
    })
    // LLAMADOS INICIALES A UNA API
  }

  componentDidUpdate(prevProps, prevState) {
    //2DO METODO DEL CICLO DE VIDA - AL ACTUALIZARSE EL COMPONENTE
    if (this.state.count !== prevState.count) {
      this.setState({ name: names[this.state.count % names.length] })
    }
  }

  componentWillUnmount() {
    //3ER METODO DEL CICLO DE VIDA - AL DESMONTARSE EL COMPONENTE
    console.log('Desmontando el componente de clase')
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.ball.style.display = 'none'
  }

  render() {
    return (
      <div>
        <h1>Componente de Clase</h1>
        <h2>El nombre es: {this.state.name}</h2>
        <p>La cuenta va en: {this.state.count}</p>
        <p>El mensaje es: {this.state.message}</p>
        <button onClick={() => this.incrementCount()}>
          Incrementar contador
        </button>
      </div>
    )
  }
}
