import styled from "styled-components";
import { homeBackgroundColor, missionSubTextColor, missionTextColor, textColor } from "../../components/UI/variables";

export const HomeSection = styled.section`
    background: ${homeBackgroundColor};
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25) ;
`;

export const MissionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 166px 11.76% 262px 0;
    
`;

export const MissionText = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    color: ${missionTextColor};
`;

export const MissionTextSm = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    color: ${missionTextColor};
`;

export const MissionSubText = styled.p`
    font-size: 1.5rem;
    color: ${missionSubTextColor};
`;
