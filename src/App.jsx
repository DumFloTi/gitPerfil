import Perfil from "./components/Perfil";
import Fomulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";

function App() {
  const [nomeUtilizador, setNomeUtilizador] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUtilizador(e.target.value)} />

      {nomeUtilizador.length > 3 && (
        <>
        <Perfil nomeUsutiluizador={nomeUtilizador} />
        <ReposList nomeUtilizador={nomeUtilizador}/>
        </>
      )}
      <Fomulario />
    </>
  )
}

export default App
