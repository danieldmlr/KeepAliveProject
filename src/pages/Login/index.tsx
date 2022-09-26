import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { LoginSection, Welcome, LabelDiv, Label, LoginGuideText, TextDiv, ImageDiv, ButtonContinue, PaddingDiv, Logo, InputUser, InputPassword, DivPassword, DivIcon, DivUser } from './styles';
import logoCompass from "../../assets/Logo-Compasso-Branco.png";
export default function LoginScreen() {

    const navigate = useNavigate();

    return (
        <>
            <LoginSection>
                <TextDiv>
                    <PaddingDiv>
                        <Welcome>Olá,</Welcome>
                        <LoginGuideText>Para continuar navegando de forma segura, efetue o login na rede.</LoginGuideText>
                        <form>
                            <LabelDiv>
                                <Label>Login</Label>
                            </LabelDiv>
                            <DivUser>
                                <InputUser type="text" name="usuario" placeholder="Usuário" required></InputUser>
                                <div>
                                    <AiOutlineUser size={20}/>
                                </div>
                            </DivUser>
                            <DivPassword>
                                <InputPassword type="password" name="password" placeholder="Senha" required></InputPassword>
                                <DivIcon>
                                    <FiLock size={20}/>
                                </DivIcon>
                            </DivPassword>
                            <ButtonContinue type="submit" onClick={() => navigate("/home")}>Continuar</ButtonContinue>
                        </form>
                    </PaddingDiv>
                </TextDiv>
                <ImageDiv>
                    <Logo src={logoCompass} alt="Compass Logo" />
                </ImageDiv>
            </LoginSection>
        </>
    )
}