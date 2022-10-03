import styled from "styled-components";
import { missionSubTextColor } from "../UI/variables";

export const ClockAlign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Time = styled.p`
    font-size: 9rem;
    font-weight: 700;
    color: ${missionSubTextColor};
    text-align: center;
    width: 327px;
   
`;

export const Day = styled.p`
    font-size: 0.875rem;
    color: ${missionSubTextColor};
    text-align: center;
    width: 264px;
    margin-top: -20px;
    margin-left: 40px;
`;