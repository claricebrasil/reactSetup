import { Link } from 'react-router-dom';
import '../Cadastro/Cadastro.css';


function Cadastro() {
  return (
    <div className='container'>
      
      <div className='apresentacao'>
          <h1>Market Cubos</h1>
          <h3>Cadastre-se</h3>
      </div>  

      <form className='cadastro'>  
        <label for="text">Nome da loja</label>
        <input id="text" type="text"></input>

        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="exemplo@email.com" required ></input>

        <label for="password">Senha</label>
        <input id="password" type="password" placeholder="Insira sua senha"></input>

        <label for="password"> Confirme sua senha</label>
        <input id="password" type="password" placeholder="Repita sua senha"></input>
        
        <div className="link">
          <p> Ao criar uma conta, você concorda com a nossa {<a href="https://cubos.academy/privacidade">Política de Privacidade</a>} e {<a href="#">Termos de serviço</a>}.</p>  
          <button type='submit'> Criar conta </button>
        </div>
        
      </form>

      <div className="fazerlogin">
        <p>Já tem uma conta?</p>
        <Link id="login" to="/login">Fazer login </Link>
      </div>

    </div>
  );
}

export default Cadastro;
