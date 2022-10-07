import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import ErrorMessage from '../../../components/ValidationError';
import { errorColor } from '../../../components/UI/variables';
import { InputsContainer, Label, EmailContainer, Input, IconContainer, PasswordContainer, ContinueButton } from './styles';

export default function Inputs() {

    const [focusedEmail, setFocusedEmail] = useState(false)
    const [focusedPassword, setFocusedPassword] = useState(false)
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (email.length === 0 || password.length < 3) { setError(true) }
        else { setError(false); navigate("/home") }

    }

    return (
        <>
            <InputsContainer>
                <Label>Login</Label>
                <EmailContainer>
                    <Input
                        type="text"
                        name="email"
                        autoComplete='off'
                        placeholder="Email"
                        required
                        value={email}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setEmail(target.value)
                            setError(false)
                        }}
                        onFocus={() => setFocusedEmail(true)}
                        onBlur={(event) =>
                            event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                        }
                    >
                    </Input>
                    <IconContainer focused={focusedEmail}>
                        <AiOutlineUser size={24} />
                    </IconContainer>
                </EmailContainer>
                <PasswordContainer>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        required
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
                    >
                    </Input>

                    <IconContainer focused={focusedPassword}>
                        <AiOutlineLock size={24} />
                    </IconContainer>
                </PasswordContainer>
                {error && <ErrorMessage />}
            </InputsContainer>
            <ContinueButton onClick={handleSubmit}>Continuar</ContinueButton>
        </>
    )

}