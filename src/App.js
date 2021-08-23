import Item from './components/Item/index'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <h1>Primeira aplicação com React</h1>
      <ul>
        <Item texto='Página inicial'/>
        <Item texto='Cadastro'/>
      </ul>
      <Card/>
    </>
  )
}

export default App
