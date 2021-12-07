import React, { useEffect, useState } from 'react'
import Nav from '../../nav'
import api from '../../services/api';
import { useNavigate, useLocation } from "react-router-dom";

export default function Update(props) {

  const navigate = useNavigate();
  const location = useLocation()
  
  const [nome, setNome] = useState(location.state.produto.nome);
  const [quantidade, setQuantidade] = useState(location.state.produto.quantidade);
  const [valor, setValor] = useState(location.state.produto.valor);
  

  useEffect(() => {
  }, [])

  function save(e) {
    e.preventDefault();
    api.put("/produto", {
      "id": location.state.produto.id,
      "nome": nome,
      "quantidade": quantidade,
      "valor": valor
    }).then(() => {
      alert('Produto editado com sucesso!');
      navigate('/');
    }).catch(err => {
      alert('Erro ao editar o produto.', err);
    })
  }

  return (
    <>
      <Nav />
      <div className="container">
        <form onSubmit={(e) => save(e)}>
          <div className="card text-center">
            <div className="card-header">
              Editar produto
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" value={nome} onChange={(text) => setNome(text.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="quantidade" className="form-label">Quantidade</label>
                <input type="number" className="form-control" id="quantidade" value={quantidade} onChange={(num) => setQuantidade(num.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="valor" className="form-label">Valor</label>
                <input type="number" className="form-control" id="valor" value={valor} onChange={(num) => setValor(num.target.value)} required />
              </div>        
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-primary">Editar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
