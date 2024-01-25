import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import api from '../../services/api';

export default function Animes(){

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
              <th scope="col">##</th>
              <th scope="col">##</th>
              <th scope="col">##</th>
              <th scope="col">##</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
                <td></td>
                <td></td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

  );

}