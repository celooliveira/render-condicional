import { useState } from 'react'
import './App.css'

function App() {
  const [signed,setSignet] = useState(false);
  const [userName, setIsername] = useState("celooliveira")
  return (
    <div>
      <button onClick={()=>setSignet(true)} >Entrar</button>
      <br /><br />
      {signed?(
        <h1>Bem vindo Marcelo</h1>
      ):(
        <h1>Nenhum usuário online!</h1>
      )}

      {signed && <h1>Bem vindo Marcelo</h1>}

      {signed &&(
        <div>
          <h1>Bem vindo Marcelo Martins de Oliveira</h1>
          <p>Usuário conectado!</p>
          <button onClick={()=>setSignet(false)}>Sair</button>
        </div>
      )}

      <br />

      <dir>
        {userName.length >= 5 && <h1>UserName muito grande</h1>}
      </dir>
    </div>
  )
}

export default App
