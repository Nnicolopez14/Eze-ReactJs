import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Kloudd."}/>
    </div>
  )
}

export default App
