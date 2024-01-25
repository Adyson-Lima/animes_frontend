import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Animes(){

  const [my_animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/animes',{})
    .then(response => {setAnimes(response.data)})
  }, []);

  // update, navega para tela newupdate
  async function updateAnime(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('erro ao navegar para NewUpdate');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Animes Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_animes.map(anime => (
            <tr key={anime.id}>
                <th scope="row">{anime.id}</th>
                <td>{anime.name}</td>
                <td>{anime.age}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateAnime(anime.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                </td>
            </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}