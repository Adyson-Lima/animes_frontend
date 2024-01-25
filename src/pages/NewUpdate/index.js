import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  // anime_id definido na rota NewUpdate
  const {anime_id} = useParams();

  // recebe e manipula eventos do form
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, age};

    if (anime_id === '0') {
      try {
        await api.post('api/v1/animes', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/animes/${anime_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('erroao atualizar');        
      }      
    }
  }

  // busca registro especifico e seta dados para atualização
  async function loadAnime(){
    try {
      const response = await api.get(`api/v1/animes/${anime_id}`,{});
      setName(response.data.name);
      setAge(response.data.age);
    } catch (error) {
      alert('erro ao buscar registro');
      navigate('/');      
    }
  }

  // chama loadAnime e preenche o form
  useEffect(() => {
    if (anime_id === '0') {
      return;      
    } else {
      loadAnime();      
    }
  },[anime_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Animes Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="age">Idade</label>
            <input data-testid="input2" id="age" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Idade" value={age}
            onChange={e => setAge(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}