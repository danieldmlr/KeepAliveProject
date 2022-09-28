import { Time, Day, ClockAlign } from "./styles";
import { useEffect, useState } from 'react';

export default function Clock() {
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    return (
        <ClockAlign>
            <Time> {date.toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
            })}</Time>
            <Day> {date.toLocaleDateString('pt-BR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}</Day>
        </ClockAlign>
    )
}

