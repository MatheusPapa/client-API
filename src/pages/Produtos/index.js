import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../nav";
import api from "../../services/api";

export default function App() {

  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    getProdutos();
  }, [produtos]);

  function getProdutos() {
    api.get('/produtos').then(result => {
      setProdutos(result.data);
    }).catch(err => {
      console.log(err);
    })
  }

  function excluir(produto) {
    let resultado = window.confirm('Deseja realmente excluir o produto?');
    if (resultado) {
      api.delete('/produto', { data: produto }).then(() => {
        alert('Produto deletado com sucesso!');
        getProdutos();
      }).catch(err => {
        alert('Erro ao excluir o produto.');
      });
    }
  }

  return (
    <>
      <Nav />
      <div className="container" style={{ marginTop: 10 }}>
        <Link to="/produto" className="btn btn-success" style={{ width: '100%', marginBottom: 10 }}>
          <i className="bi bi-plus-circle"></i> Novo produto
        </Link>
        <table className="table table-hover" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>

          <tbody>
            { 
              (produtos) &&
              produtos.map(produto => {
                return (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.quantidade}</td>
                    <td>R$ {produto.valor}</td>
                    <td>
                      <Link to='/produto/editar' state={{ produto }} className="btn btn-warning">
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => excluir(produto)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              }) 
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
}