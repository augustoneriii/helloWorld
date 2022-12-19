import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import { ICadastro } from './types/cadastro';

function App() {

  const [cadastro, setCadastro] = useState<ICadastro[]>([])

  return (
    <>
      <Cabecalho />
      <Formulario setCadastro={setCadastro} />
      <Tabela cadastro={cadastro} />
    </>
  );
}

export default App;
