import React, { useState, useCallback } from 'react'

export default function Input(props) {
    const {onAdd} =props

    const [timers, setTimers] = useState([])
    const [sec, setSec] = useState('')
    const [minute, setMin] = useState('')
    const [hour, setHour] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [title, setTitle] = useState('')
    const [propDate, setPropDate] = useState('')

    const dataDate = {date: month+ ' '+ day + ' ' + year + ' ' + sec +':'+ minute +':'+ hour,
                        title: title}
    console.log(dataDate);

    const dayCallback = useCallback((e)=>{
        setDay(e.target.value)
    })
    const monthCallback = useCallback((e)=>{
        setMonth(e.target.value)
    })
    const yearCallback = useCallback((e)=>{
        setYear(e.target.value)
    })
    const secCallback = useCallback((e)=>{
        setSec(e.target.value)
    })
    const minCallback = useCallback((e)=>{
        setMin(e.target.value)
    })
    const hourCallback = useCallback((e)=>{
        setHour(e.target.value)
    })
    const titleCallback = useCallback((e)=>{
        setTitle(e.target.value)
    })

    const createTimer =()=>{
        setPropDate(dataDate)
        onAdd(propDate)
    }

    return (
        <div>
            <input onChange={dayCallback} value={day} placeholder='day'  />
            <input onChange={monthCallback} value={month} placeholder='month' />
            <input onChange={yearCallback} value={year} placeholder='year'/>
            <h2> ---------------------------</h2>
            <input onChange={secCallback} value={sec} placeholder='hour'/>
            <input onChange={minCallback} value={minute} placeholder='minutes'/>
            <input onChange={hourCallback} value={hour} placeholder='sec'/>
            <input onChange={titleCallback} value={title} placeholder='title'/>

            <button onClick={createTimer}> add timer</button>
        </div>
    )
}
