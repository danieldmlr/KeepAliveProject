import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { LoginSection, Welcome, LabelDiv, Label, LoginGuideText, TextDiv, ImageDiv, ButtonContinue, PaddingDiv, Logo, InputUser, InputPassword, DivPassword, DivUser, ContainerIconPassword, ContainerIconUser } from './styles';
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
                <TextDiv>
                    <PaddingDiv>
                        <Welcome>Olá,</Welcome>
                        <LoginGuideText>Para continuar navegando de forma segura, efetue o login na rede.</LoginGuideText>
                        <LabelDiv>
                            <Label>Login</Label>
                        </LabelDiv>
                        <DivUser>
                            <InputUser
                                type="text"
                                name="usuario"
                                autoComplete='off'
                                placeholder="Usuário"
                                value={user}
                                style = {{borderColor: `${error? errorColor : "white"}`}}
                                onChange={({ target }) => {
                                    setUser(target.value)
                                    setError(false)
                                } }
                                onFocus={() => setFocusedUser(true)}
                                onBlur={(event) =>
                                    event.target.value.length > 0 ? setFocusedUser(true) : setFocusedUser(false)
                                }
                                required>
                            </InputUser>
                            <ContainerIconUser focused={focusedUser}>
                                <AiOutlineUser size={20} />
                            </ContainerIconUser>
                        </DivUser>
                        <DivPassword>
                            <InputPassword
                                type="password"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                style = {{borderColor: `${error? errorColor : "white"}`}}
                                onChange={({ target }) => {
                                    setPassword(target.value)
                                    setError(false)
                                } }
                                onFocus={() => setFocusedPassword(true)}
                                onBlur={(event) =>
                                    event.target.value.length > 0 ? setFocusedPassword(true) : setFocusedPassword(false)
                                }
                                required>
                            </InputPassword>

                            <ContainerIconPassword focused={focusedPassword}>
                                <AiOutlineLock size={20} />
                            </ContainerIconPassword>
                        </DivPassword>
                        {error && <ErrorMessage />}
                        <ButtonContinue onClick={handleSubmit}>Continuar</ButtonContinue>
                    </PaddingDiv>
                </TextDiv>
                <ImageDiv>
                    <Logo src={logoCompass} alt="Compass Logo" />
                </ImageDiv>
            </LoginSection>
        )
    }

