import React, { useState } from 'react'
import Nav from '../../nav'
import api from '../../services/api';
import { useNavigate } from "react-router-dom";

export default function Create() {

  let navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(null);
  const [valor, setValor] = useState(null);

  function save(e) {
    e.preventDefault();
    api.post("/produto", {
      "nome": nome,
      "quantidade": quantidade,
      "valor": valor
    }).then(() => {
      alert('Produto salvo com sucesso!');
      navigate('/');
    }).catch(err => {
      alert('Erro ao salvar o produto.', err);
    })
  }

  return (
    <>
      <Nav />
      <div className="container">
        <form onSubmit={(e) => save(e)}>
          <div className="card text-center">
            <div className="card-header">
              Novo produto
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" onChange={(text) => setNome(text.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="quantidade" className="form-label">Quantidade</label>
                <input type="number" className="form-control" id="quantidade" onChange={(num) => setQuantidade(num.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="valor" className="form-label">Valor</label>
                <input type="number" className="form-control" id="valor" onChange={(num) => setValor(num.target.value)} required />
              </div>        
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
