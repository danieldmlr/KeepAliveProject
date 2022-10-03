import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { LoginSection, Welcome, LabelContainer, Label, LoginText, LoginContainer, ImgContainer, ButtonContinue, SpacingContainer, Logo, InputUser, InputPassword, PasswordContainer, UserContainer, ContainerIconPassword, ContainerIconUser, InputsContainer, LogoMedia } from './styles';
import logoCompass from "../../assets/Logo-Compasso-Branco.png";
import ErrorMessage from '../../components/ValidationError';
import { errorColor } from '../../components/UI/variables';

export default function LoginScreen() {

    const [focusedUser, setFocusedUser] = useState(false)
    const [focusedPassword, setFocusedPassword] = useState(false)
    const navigate = useNavigate();

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (user.length === 0 || password.length < 3) { setError(true) }
        else { setError(false); navigate("/home") }

    }

    return (
        <LoginSection>
            <LoginContainer>
                <SpacingContainer>
                <LogoMedia src={logoCompass} alt="Compass Logo" />
                    <Welcome>Olá,</Welcome>
                    <LoginText>Para continuar navegando de forma segura, efetue o login na rede.</LoginText>
                    <LabelContainer>
                        <Label>Login</Label>
                    </LabelContainer>
                    <InputsContainer>
                        <UserContainer>
                            <InputUser
                                type="text"
                                name="usuario"
                                autoComplete='off'
                                placeholder="Usuário"
                                value={user}
                                style={{ borderColor: `${error ? errorColor : "white"}` }}
                                onChange={({ target }) => {
                                    setUser(target.value)
                                    setError(false)
                                }}
                                onFocus={() => setFocusedUser(true)}
                                onBlur={(event) =>
                                    event.target.value.length > 0 ? setFocusedUser(true) : setFocusedUser(false)
                                }
                                required>
                            </InputUser>
                            <ContainerIconUser focused={focusedUser}>
                                <AiOutlineUser size={24} />
                            </ContainerIconUser>
                        </UserContainer>
                        <PasswordContainer>
                            <InputPassword
                                type="password"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                style={{ borderColor: `${error ? errorColor : "white"}` }}
                                onChange={({ target }) => {
                                    setPassword(target.value)
                                    setError(false)
                                }}
                                onFocus={() => setFocusedPassword(true)}
                                onBlur={(event) =>
                                    event.target.value.length > 0 ? setFocusedPassword(true) : setFocusedPassword(false)
                                }
                                required>
                            </InputPassword>

                            <ContainerIconPassword focused={focusedPassword}>
                                <AiOutlineLock size={24} />
                            </ContainerIconPassword>
                        </PasswordContainer>
                        {error && <ErrorMessage />}
                    </InputsContainer>
                    <ButtonContinue onClick={handleSubmit}>Continuar</ButtonContinue>
                </SpacingContainer>
            </LoginContainer>
            <ImgContainer>
                <Logo src={logoCompass} alt="Compass Logo" />
            </ImgContainer>
        </LoginSection>
    )
}

