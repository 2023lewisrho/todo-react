import dayjs from "dayjs";
import { useState, useEffect } from "react";

function Time() {
    const [date, setDate] = useState(dayjs());

    function tick() {
        setDate(dayjs());
    }

    useEffect(() => {
        const timer_id = setInterval(tick, 1000);
        return function cleanup() {
          clearInterval(timer_id);
        };
      }, []);

    return (
        <div>
            <h1>{date.format('YYYY-MM-DD')}</h1>
            <h3>{date.format('dddd hh:mm:ss A')}</h3>
        </div>
    );
}

export default Time;