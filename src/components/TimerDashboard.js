import React, {useState, useEffect} from 'react'
import Timer from './timer'

export default function TimerDashboard() {

    const [timers, setTimers] = useState([])
    const [sec, setSec] = useState('')
    const [minute, setMin] = useState('')
    const [hour, setHour] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [title, setTitle] = useState('')

    const dataDate = month+ ' '+ day + ' ' + year + ' ' + sec +':'+ minute +':'+ hour

    const createTimer =()=>{
        const newTimer = <Timer  dataDate={dataDate} deleteTimer={deleteTimer} title={title} />
        const newTimers = [...timers, newTimer]
        setTimers(newTimers)
    }


    const deleteTimer =(index)=>{
        const newTimers = [...timers]
        newTimers.splice(index,1)
        setTimers(newTimers)
    }

    const mappedTimers = timers.map((item, index) => (
        <li key={index}> {item}</li>
    ))


    return (
        <div>
            <input onChange={e => setDay(e.target.value)} value={day} placeholder='day'  />
            <input onChange={e => setMonth(e.target.value)} value={month} placeholder='month' />
            <input onChange={e => setYear(e.target.value)} value={year} placeholder='year'/>
            <h2> ---------------------------</h2>
            <input onChange={e => setSec(e.target.value)} value={sec} placeholder='hour'/>
            <input onChange={e => setMin(e.target.value)} value={minute} placeholder='minutes'/>
            <input onChange={e => setHour(e.target.value)} value={hour} placeholder='sec'/>
            <input onChange={e => setTitle(e.target.value)} value={title} placeholder='title'/>

            <button onClick={createTimer}> add timer</button>

            <ul>
                {mappedTimers}
            </ul>
        </div>
    )
}
