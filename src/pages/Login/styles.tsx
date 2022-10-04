import styled from "styled-components";
import { borderColor, buttonColor, textColor } from "../../components/UI/variables";
import notebookImg from "../../assets/Notebook.png";

interface ButtonProps {
    focused: boolean
}

export const LoginSection = styled.section`
    background-color: #222222;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;

    /* @media screen and (max-width: 320px)  {
        min-height: 480px;
        height: 100%;
    } */

    @media screen and (max-width: 768px) , (max-height: 426px){
        min-height: 800px;
    }

`;

export const LoginContainer = styled.div`
    width: 50%;
    
    @media screen and (max-width: 768px), (max-height: 426px)  {
        width: 100%;
        
    }
`;

export const SpacingContainer = styled.div`
    padding: 20.53% 0 0 29.9%;
    
    @media screen and (max-width: 1024px) {
        padding-left: 16%;
        padding-top: 30%;
    }

    
    @media screen and (max-width: 1023px) {
        padding-top: 10%;
        padding-left: 27%;
    }

    @media screen and (max-width: 768px) {
        padding-top: 10%;
        padding-left: 27%;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px) {
        padding: 10% 0 0 10%;
        /* border: 1px solid red; */
    }
`;

export const LogoMedia = styled.img`
    display: none;
    position: top center;

    @media screen and (max-width: 768px){
        display: block;
        margin-bottom: 10%;
    }

    @media screen and (max-width: 426px){
        margin-bottom: 30%;
    }
    
    @media screen and (max-width: 376px){
        width: 80%;
    }

    @media screen and (max-width: 321px){
        width: 75%;
    }
`;

export const Welcome = styled.h3`
    font-size: 3.75rem;
    margin-bottom: 2.53%;
    width: 17.54%;

    @media screen and (max-width: 281px) {
        font-size: 2.75rem;
    }
`;

export const LoginText = styled.p`
    width: 42%;
    margin-bottom: 20.07%;

    @media screen and (max-width: 1440px){
        width: 56%;
    }
    
    @media screen and (max-width: 1024px){
        width: 79.3%;
    }
    
    @media screen and (max-width: 901px) {
        width: 80%;
    }

    @media screen and (max-width: 901px), (max-height: 769px) {
        width: 86%;
    }
    
    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 53%;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px){
        width: 79%;
    }

    @media screen and (max-width: 376px) {
        width: 67%;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 321px) {
        width: 75%;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 281px) {
        width: 89%;
        /* border: 1px solid red; */
    }
    
`;

export const LabelContainer = styled.div`  
    /* margin-top: 20.07%; */
`;

export const Label = styled.label`
    font-size: 1.875rem;
    
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4.76%;
    margin-bottom: 17.1%;

    @media screen and (max-width: 426px) {
        margin-bottom: 23.1%;
    }

    @media screen and (max-width: 321px) {
        margin-top: 6%;
    }
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4.91%;

    @media screen and (max-width: 321px) {
        margin-bottom: 10%;
    }
`;

export const InputUser = styled.input`
    width: 52.745%;
    height: 56px;
    background-color: transparent;
    color:${textColor};
    font-size: 1.125rem;
    border: 1px solid ${borderColor};
    border-radius: 50px;
    /* margin: 4.77% 2.98% 0 0; */
    padding-left: 2.98%;
    transition: 0.5s transform;
    
    &::placeholder { 
        color:${textColor}; 
        font-family: 'Mark Pro';
        font-size: 1.125rem;
    };
    
    @media screen and (max-width: 1024px){
        width: 70%;
        height: 46px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 52.745%;
        height: 56px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px) {
        width: 70%;
        height: 52px;
    }

    @media screen and (max-width: 376px) {
        width: 70%;
        height: 52px;
    }

    @media screen and (max-width: 321px) {
        width: 70%;
        height: 56px;
    }
`;

export const ContainerIconUser = styled.div<ButtonProps>`
    margin-left: 2.5%;

    transition: 0.3s transform;
    ${(props) =>
        props.focused ? "transform: translate(-250%)" : "transform: translate(0)"}
`;

export const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

export const InputPassword = styled.input`
    width: 52.745%;
    height: 56px;
    background-color: transparent;
    color:${textColor};
    font-size: 1.5rem;
    border: 1px solid ${borderColor};
    border-radius: 50px;
    /* margin: 4.91% 2.98% 16.2% 0; */
    padding-left: 2.98%;
    &::placeholder { 
        color:${textColor}; 
        font-family: 'Mark Pro';
        font-size: 1.125rem;
    }
    @media screen and (max-width: 1024px) {
        width: 70%;
        height: 46px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 52.745%;
        height: 56px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px) {
        width: 70%;
        height: 52px;
    }

    @media screen and (max-width: 376px) {
        width: 70%;
        height: 46px;
    }
    

    @media screen and (max-width: 321px) {
        width: 70%;
        height: 56px;
    }

`;

export const ContainerIconPassword = styled.div<ButtonProps>`
    margin-left: 2.5%;

    transition: 0.3s transform;
    ${(props) =>
        props.focused ? "transform: translate(-250%)" : "transform: translate(0)"}
`;

export const ButtonContinue = styled.button`
    width: 56.32%;
    height: 67px;
    
    background: ${buttonColor};
    color: ${borderColor};

    font-family: 'Mark Pro';
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    
    border: none;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    
    @media screen and (max-width: 1024px) {
        width: 74%;
        height: 57px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 56.32%;
        height: 67px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px)  {
        width: 74%;
        height: 57px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 376px)  {
        width: 74%;
        height: 57px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 321px)  {
        width: 74%;
        height: 67px;
        /* border: 1px solid red; */
    }

`;

export const ImgContainer = styled.div`
    background-image: url(${notebookImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    text-align: center;
    
    @media screen and (max-width: 1024px) {
        background-position: center;
    }
    
    @media screen and (max-width: 768px), (max-height: 426px) {
      display : none;
    }

`;

export const Logo = styled.img`
   margin-top: 3.65%;
`;