import styled from "styled-components";
import { borderColor, buttonColor, textColor } from "../../components/UI/variables";
import notebookImg from "../../assets/Notebook.png";

export const LoginSection = styled.section`
    background-color: #222222;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
`;

export const TextDiv = styled.div`
    width: 50%;
    
`;

export const PaddingDiv = styled.div`
    padding: 20.53% 0 0 29.9%;

`;

export const Welcome = styled.h3`
    font-size: 3.75rem;
    margin-bottom: 2.53%;
    width: 17.54%;
`;

export const LoginGuideText = styled.p`
    width: 44.73%;
`;

export const LabelDiv = styled.div`  
    margin-top: 20.07%;
`;

export const Label = styled.label`
    font-size: 1.875rem;
    
`;

export const DivUser = styled.div`
    display: flex;
`;

export const InputUser = styled.input`
    width: 52.745%;
    height: 3.75rem;
    background-color: transparent;
    color:${textColor};
    border: 1px solid ${borderColor};
    border-radius: 50px;
    margin: 4.77% 2.98% 0 0;
    padding-left: 2.98%;
    &::placeholder { 
        color:${textColor}; 
        font-family: 'Mark Pro';
        };
`;

export const DivPassword = styled.div`
    display: flex;
`;

export const InputPassword = styled.input`
    width: 52.745%;
    height: 3.75rem;
    background-color: transparent;
    color:${textColor};
    border: 1px solid ${borderColor};
    border-radius: 50px;
    margin: 4.91% 2.98% 16.2% 0;
    padding-left: 2.98%;
    &::placeholder { 
        color:${textColor}; 
        font-family: 'Mark Pro';
    };

`;

export const DivIcon = styled.div`
    margin-top: 50px;
`;

export const ButtonContinue = styled.button`
    width: 56.32%;
    height: 4.188rem;
    background: ${buttonColor};
    border-radius: 50px;
    border: none;
    color: ${borderColor};
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));

`;

export const ImageDiv = styled.div`
    background-image: url(${notebookImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    text-align: center;
`;

export const Logo = styled.img`
   margin-top: 3.65%;
`;