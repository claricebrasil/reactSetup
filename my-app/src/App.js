import './App.css';

function App() {
  return (
    <div className="container">
      <section>
        <div className="msg">
          <h1>Market Cubos</h1>
          <h3>Boas Vindas!</h3>
          <p>Use seu e-mail e senha para acessar a conta.</p>
        </div>
        <div className="cadastro">
          <p>E-mail</p>
          <input type="email"  placeholder="exemplo@email.com" ></input>
          <p>Senha</p>
          <input type="password" placeholder="Insira sua senha"></input>
        </div>
        
        <button>Fazer login</button>

        <div className="enviocadastro">
          <p>Não possui conta?</p>
          <a href="#">Cadastrar</a>
        </div>
        

      </section>
    </div>
  );
}

export default App;
