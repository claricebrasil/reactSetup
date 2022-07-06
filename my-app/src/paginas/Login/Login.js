import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
    
        <div className="msg">
          <h1>Market Cubos</h1>
          <h3>Boas Vindas!</h3>
          <p>Use seu e-mail e senha para acessar a conta.</p>
        </div>

        <div className="cadastro">
          <form className='email'>
            <label for= "email">E-mail</label>
            <input id="email" type="email"  placeholder="exemplo@email.com" required ></input>
          </form>

          <form className='senha'>
            <label for="password">Senha</label>
            <input id="password" type="password" placeholder="Insira sua senha" minlenght="8" required></input>
            <button type='submit'>Fazer login</button>
          </form>        
        </div>
                
        <div className="enviocadastro">
          <p>Não possui conta?</p>
          <Link to="/cadastro">Cadastrar</Link>
        </div>
        
    </div>
  );
}

export default Login;
