import React, {useState, useEffect, useCallback} from 'react'
import Input from './Input'
import Timer from './timer'

export default function TimerDashboard() {

    const [timers, setTimers] = useState([])
   




    const addTimer =(value)=>{
        const newTimer = <Timer  dataDate={value.date} deleteTimer={deleteTimer} title={value.title} />
        const newTimers = [newTimer, ...timers ]
        setTimers(newTimers)
    }

    const handleSubmit =(value)=>{
        if(!value) return;
        const newTimer = {component: <Timer  dataDate={value.date} deleteTimer={deleteTimer} title={value.title} />, 
        timestamp: Date.now()}
        const newTimers = [newTimer, ...timers ]
        setTimers(newTimers)

    }


    const deleteTimer =(timestamp, value)=>{
        const newTimers = [...timers]
        console.log(newTimers);
        // newTimers.splice(index,1)
        setTimers(newTimers)
    }

    
    return (
        <div>
            <Input onAdd={handleSubmit}/>

            <ul>
                {timers.map((item) => (
        <li key={item.timestamp}> {item.component}</li>
    ))}
            </ul>
        </div>
    )
}
