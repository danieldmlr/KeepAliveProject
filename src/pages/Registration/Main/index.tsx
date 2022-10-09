import { useState } from "react";
import { AiOutlineUser, AiOutlineCheck, AiOutlineLock } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { errorColor } from "../../../components/UI/variables"
import ErrorMessage from "../../../components/ValidationError"
import { InputsContainer, Label, Input, IconContainer, RegisterButton, InputContainer, InputContainerPassword, LoginGuide, LoginRedirectButton } from "./styles"


export default function Main() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    return (

        <>
            <InputsContainer>
                <Label>Cadastro</Label>
                <InputContainer>
                    <Input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Nome"
                        required
                        // value={email}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        // onChange={({ target }) => {
                        //     setEmail(target.value)
                        //     setError(false)
                        // }}
                    // onFocus={() => setFocusedEmail(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color = {"#00D100"} />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        name="lastname"
                        autoComplete="off"
                        placeholder="Sobrenome"
                        required
                        // value={email}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        // onChange={({ target }) => {
                        //     setEmail(target.value)
                        //     setError(false)
                        // }}
                    // onFocus={() => setFocusedEmail(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                        required
                        value={email}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setEmail(target.value)
                            setError(false)
                        }}
                    // onFocus={() => setFocusedEmail(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="off"
                        required
                        value={password}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setPassword(target.value)
                            setError(false)
                        }}
                    // onFocus={() => setFocusedPassword(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedPassword(true) : setFocusedPassword(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} />
                    </IconContainer>
                </InputContainer>
                <InputContainerPassword>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="off"
                        required
                        value={password}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setPassword(target.value)
                            setError(false)
                        }}
                    // onFocus={() => setFocusedPassword(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedPassword(true) : setFocusedPassword(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24}  />
                    </IconContainer>
                </InputContainerPassword>
                {/* {error && <ErrorMessage />} */}
            </InputsContainer>
            <RegisterButton onClick={() =>  navigate("/")}>Registrar</RegisterButton>
            <LoginGuide>Se você já possui um cadastro, clique <LoginRedirectButton onClick={() =>  navigate("/")}>aqui</LoginRedirectButton></LoginGuide>
        </> 
    )
}