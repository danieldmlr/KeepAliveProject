import styled from "styled-components";
import logoCompass from "../../assets/bola-LogoCompasso-Home.png";
import { borderColor, buttonTextColor, homeBackgroundColor, homeFooterColor, missionSubTextColor, missionTextColor, textColor } from "../../components/UI/variables";

export const HomeSection = styled.section`
    background: ${homeBackgroundColor};
    background-image: url(${logoCompass});
    background-repeat: no-repeat;
    background-position: 0 90%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const HomeHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 1.3%;
    height: 12.95vh;
`;


export const LogoContainer = styled.div`
    padding-left: 2.1%;
`;

export const WeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2.14%;
`;

export const City = styled.p`
    font-size: 0.875rem;
    color: ${missionSubTextColor};
    text-align: center;
`;

export const WeatherDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Temperature = styled.p`
    font-size: 3rem;
    font-weight: 700;
    color: ${missionSubTextColor};
    text-align: center;
`;

export const MissionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 7.03%;
    height: 77.6vh;
`;

export const MissionText = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    color: ${missionTextColor};
    margin-top: 1.25%;
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

export const HomeFooter = styled.footer`
    background: ${homeFooterColor};
    display: flex;
    justify-content: end;
    align-items: center;
    height: 9.25vh;
`;

export const FooterText = styled.p`
    width: 28.18%;
    font-size: 0.75rem;
    padding: 0 1.83% 0 18.44%;
    text-align: end;
`;

export const VBar = styled.p`
    border: 1px solid #FFFFFF;
    width: 0;
    height: 5.64vh;
    margin-right: 6.4vw; 
`

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 19.4%;
`;

export const TimerText = styled.p`
    width: 49%;
    font-size: 0.875rem;
    text-align: end;
    padding-right: 33px;
    
`;

export const Seconds = styled.p`
    font-size: 0.875rem;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const FooterButtonContinue = styled.button`
    
    width: 131px;
    height: 100%;
    background: ${borderColor};
    color: ${buttonTextColor}; 
    border: none;
    font-family: 'Mark Pro';
    font-size: 0.75rem;
`;

export const FooterButtonLogout = styled.button`
    width: 131px;
    height: 100%;
    background: transparent;
    color: ${borderColor};
    border: none;
    font-family: 'Mark Pro';
    font-size: 0.75rem;
`;