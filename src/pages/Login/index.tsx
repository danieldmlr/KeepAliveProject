import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {

    const navigate = useNavigate();

    return (
        <section>

            <div>
                <p>Olá,</p>
                <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
            </div>

            <form>
                <label>Login</label>
                <input type="text" name="usuario" placeholder="Usuário" required></input>
                <input type="password" name="password" placeholder="Senha" required></input>
            </form>

            <button type="submit" onClick={() =>  navigate("/home")}>Continuar</button>
        </section>
    )
}