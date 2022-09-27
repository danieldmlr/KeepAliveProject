import styled from "styled-components";
import { errorColor } from "../UI/variables";

export const ErrorContainer = styled.div`
    
`;

export const StyledErrorMessage = styled.p`
    width: 283px;
    padding-left: 50px;
    margin-top: -80px;
    margin-bottom: 47px;
    font-family: 'Mark Pro';
    font-size: 1rem;
    font-weight: 700;
    color: ${errorColor};
    text-align: center;
`;