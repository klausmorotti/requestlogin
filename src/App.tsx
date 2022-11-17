//HOOKS
import { ChangeEvent, useEffect, useState } from "react";

// ESTILO DA TELA
import { Container } from "./pages/tableCompanies/styles";

// TIPO DO OBJETO EMPRESA
import { typeObjectCompanies } from "./types/typeObjectCompanies";

// REDUCER
import { reducerFilters } from "./reducers/reducerFilters";

const App = () => {
  // STATE QUE ARMEZENA O ARRAY DE EMPRESAS PARA ACESSAR E FILTRAR NA TELA
  const [stateCompanies, setStateCompanies] = useState<typeObjectCompanies[]>([]);
  const [state, dispatch] = reducerFilters();
  // FAZENDO A REQUISIÇÃO AO ABRIR A TELA
  useEffect(() => {
    getCompanies();
  }, []);

  // FUNÇÃO QUE FAZ A REQUISIÇÃO
  const getCompanies = async () => {
    let request = await fetch('http://localhost/audax/php/empresas.php');
    let json = await request.json();
    setStateCompanies(json.Empresas);
  }

    // FILTROS
    // ORDEM ALFABÉTICA
  const filterAlphabeticalOrder = () => {
    let newState = [...stateCompanies];
    newState.sort((a,b) => ( a.razao_social > b.razao_social ) ? 1 : -1);
    setStateCompanies(newState)
  }

  // ORDEM POR TIPO DE EMPRESA
  const filterTypeCompanieOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    let newState = [...stateCompanies];
    switch(e.target.value) {
      case '0':
        newState = newState.filter( uf => uf.id_categoria == e.target.value );
        console.log(newState)
        return newState;
      break;
      case '1':
        newState = newState.filter( uf => uf.id_categoria == e.target.value );
        console.log(newState)
        return newState;
      break;
    }
    
    return newState;
  }


  // ORDEM POR ESTADO DO PAÍS
  const filterUFCompanie = (e: ChangeEvent<HTMLSelectElement>) => {
    let newState = [...stateCompanies];
    switch(e.target.value) {
      case 'PI':
        newState = newState.filter( uf => uf.end_uf == e.target.value );
        console.log(newState)
        return newState;
      break;
      case 'SP':
        newState = newState.filter( uf => uf.end_uf == e.target.value );
        console.log(newState)
        return newState;
      break;
    }

    return newState;
  }

  // ORDEM POR DATA DE CADASTRO
  const filterDataRegisterCompanie = (e: ChangeEvent<HTMLInputElement>) => {
    let dateSelected = e.target.value;
    let newState = [...stateCompanies];
    let dateCompanie = newState.filter( item => item.data_edicao.split(' ')[0] == dateSelected)
    console.log(dateCompanie)
  }


  return (
    <Container>
      <div className="filtersArea">
        <div className="titleTable">
          <h1>Tabela de Empresas</h1>
        </div>

        <div className="filters">
          <nav>
            <ul>
              <li onClick={filterAlphabeticalOrder}>Ordem Alfabética</li>
              <select name="" id="" onChange={filterTypeCompanieOrder}>
                <option value="">Filtrar por</option>
                <option value="0">Distribuidora</option>
                <option value="1">Ótica</option>
              </select>
              <input type="date" onChange={filterDataRegisterCompanie}/>
              <select name="" id="" onChange={filterUFCompanie}>
                <option value="">Selecionar estado</option>
                <option value="SP">SP</option>
                <option value="PI">PI</option>
              </select>
            </ul>
          </nav>
        </div>
      </div>

      <div className="tableArea">

        <table>
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>Razão Social</th>
              <th>E-mail para contato</th>
              <th>Categoria</th>
              <th>Estado</th>
              <th>Data de cadastro</th>
            </tr>
          </thead>

          <tbody>
            {stateCompanies.map((companie, index) => (
              <tr key={index}>
                <td> {companie.cnpj} </td>
                <td> {companie.razao_social} </td>
                <td> {companie.email} </td>
                <td> {companie.id_categoria} </td>
                <td> {companie.end_uf} </td>
                <td> {companie.data_edicao} </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </Container>
  )
}

export default App;