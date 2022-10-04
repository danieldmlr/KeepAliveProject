import styled from "styled-components";
import { missionSubTextColor } from "../UI/variables";

export const ClockAlign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 426px) {
        display: none;
    }
`;

export const Time = styled.p`
    font-size: 9rem;
    font-weight: 700;
    color: ${missionSubTextColor};
    text-align: center;
    width: 84.4%;
    
    @media screen and (max-width: 1025px){
        font-size: 7rem;
    }
`;

export const Day = styled.p`
    font-size: 0.875rem;
    color: ${missionSubTextColor};
    text-align: center;
    width: 67%;
    margin-top: -5.1%;
    margin-left: 10.5%;

    @media screen and (max-width: 1025px){
        width: 92%;
    }
`;