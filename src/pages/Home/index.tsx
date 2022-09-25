import { useNavigate } from 'react-router-dom';
import Clock from '../../components/Clock';
import Countdown from '../../components/Countdown';

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <section>
            <header>
                <Clock/>
            </header>
            <div>
                <p>Our mission is</p>
                <p>Nossa missão é</p>
                <p>to transform the world</p>
                <p>transformar o mundo</p>
                <p>building digital experiences</p>
                <p>construindo experiências digitais</p>
                <p>that enable our client’s growth</p>
                <p>que permitam o crescimento dos nossos clientes</p>
            </div>
            <footer>
                <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                <p>Application refresh in <Countdown max={10}/></p>
                <button type="button" onClick={() => navigate("/")}>Logout</button>
            </footer>
        </section>
    )
}