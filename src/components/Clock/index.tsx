var hours, minutes

const dayOfWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
const actualMonth = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

export default function Clock() {
    
    const data = new Date();

    hours = data.getHours().toString().length < 2 ? "0" + data.getHours() : data.getHours();
    minutes = data.getMinutes().toString().length < 2 ? "0" + data.getMinutes() : data.getMinutes();

    const actualTime = hours + ":" + minutes;
    const actualDate = dayOfWeek[data.getDay()] + ", " + data.getDate() + " de " + actualMonth[data.getMonth()] + " de " + data.getFullYear();

    return (
        <div>
            {actualTime}
            {actualDate}
        </div>
    )
}

