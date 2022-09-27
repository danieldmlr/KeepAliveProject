import { Time, Day, ClockAlign } from "./styles";

var hours, minutes

const dayOfWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
const currentMonth = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

export default function Clock() {

    const data = new Date();

    hours = data.getHours().toString().length < 2 ? "0" + data.getHours() : data.getHours();
    minutes = data.getMinutes().toString().length < 2 ? "0" + data.getMinutes() : data.getMinutes();

    const currentTime = hours + ":" + minutes;
    const currentDate = dayOfWeek[data.getDay()] + ", " + data.getDate() + " de " + currentMonth[data.getMonth()] + " de " + data.getFullYear();

    return (

        <ClockAlign>
            <Time>{currentTime}</Time>
            <Day>{currentDate}</Day>
        </ClockAlign>

    )
}

