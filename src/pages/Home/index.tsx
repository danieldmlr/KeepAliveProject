import { useNavigate } from 'react-router-dom';
import Clock from '../../components/Clock';
import Countdown from '../../components/Countdown';
import { HomeSection, MissionDescription, MissionSubText, MissionText, MissionTextSm } from './styles';

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <HomeSection>
            <header>
                <p><Clock /></p>
            </header>
            <MissionDescription>
                <MissionTextSm>Our mission is</MissionTextSm>
                <MissionSubText>Nossa missão é</MissionSubText>
                <MissionText>to transform the world</MissionText>
                <MissionSubText>transformar o mundo</MissionSubText>
                <MissionText>building digital experiences</MissionText>
                <MissionSubText>construindo experiências digitais</MissionSubText>
                <MissionText>that enable our client’s growth</MissionText>
                <MissionSubText>que permitam o crescimento dos nossos clientes</MissionSubText>
            </MissionDescription>
            <footer>
                <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                <div>
                    <p>Application refresh in</p>
                <div>
                    <p><Countdown max={1000} /></p>
                    <p>seconds</p>
                </div>
                </div>
                <div>
                    <button type="button" onClick={() => navigate("/")}>Logout</button>
                </div>
            </footer>
        </HomeSection>
    )
}