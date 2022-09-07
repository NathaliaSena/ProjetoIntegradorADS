import logo from './logo.svg';
import './App.css';
import { Button } from './button';
import { produtos } from './map';
import Form from './form/Form';
import FlavorForm from './FlavorForm';
import { ButtonClick } from './buttonClick';

function App() {
  const precoTotal = produtos.listaDeProdutos.map(p => Number(p.preco.replace("R$ ", ""))).reduce((a,b) => a+b); //retira o que não for número e soma os valores
  const quantidade = produtos.listaDeProdutos.map(q => Number(q.quantidade)).reduce((a,b) => a + b)
  const quantidade2 = produtos.listaDeProdutos.filter( f => f.nome === "caneta");
  const qCaneta = quantidade2.map(m => Number(m.quantidade)).reduce((a,b) => a + b); //soma todos os valores
  const prod = produtos.listaDeProdutos.map(l => l.nome); //seleciona todos os valores da lista com o atributo "nome".
  const values = prod.filter(function (k, i) { return prod.indexOf(k) === i}); //retira os valores duplicados da lista
  console.log(values)

  return (
    <><div className="App">
      <h1>Compre agora mesmo!!</h1>
      <Button />
      <p>{precoTotal}</p>
      <ul>
        {produtos.listaDeCompras.map((p) => (<li  key={p}>{p}</li>))}
      </ul>
      <ul>
        {values.map(nome => <li key={nome}>{nome}</li>)}
      </ul>
      <Form/>
      <FlavorForm></FlavorForm>
      <ButtonClick/>
    </div></>
  );
}

export default App;
