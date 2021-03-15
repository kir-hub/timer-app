import React, {useState, useEffect, useRef} from 'react'

export default function Timer(props) {

    const {index, deleteTimer, dataDate, title} = props

    const [timerDays, setDays] = useState('00')
    const [timerHours, setHours] = useState('00')
    const [timerMins, setMins] = useState('00')
    const [timerSecs, setSecs] = useState('00')
    const [warning, setWarning] = useState(false)


    const removeTimer =()=>{
        return deleteTimer(index)
    }

    let interval = useRef()

    const timerStart =()=>{
        const startCountTime = new Date(dataDate).getTime()

        interval = setInterval(()=>{
            const currentTime = new Date().getTime()
            const leftTime = startCountTime - currentTime

            const days = Math.floor(leftTime / (1000*60*60*24))
            const hours = Math.floor(leftTime % (1000*60*60*24) / (1000*60*60))
            const mins = Math.floor(leftTime % (1000*60*60) / (1000*60))
            const secs = Math.floor(leftTime % (1000*60) / 1000) 

            if(leftTime < 0){
                clearInterval(interval.current)

            }else{
                setDays(days)
                setHours(hours)
                setMins(mins)
                setSecs(secs)
                if(days == 0 && hours == 0 && mins <= 15){
                    setWarning(true)
                }
            }
        }, 1000)
    }

    timerStart()
    useEffect(() =>{
        return ()=>{
            clearInterval(interval.current)
        }
    })

    return (
        <div>
            <h1 onClick={removeTimer}>X</h1>
            <div>
                {title} {warning && ' near by'}
            </div>
            <div>
                <span>days {timerDays}</span>
                <span> hours {timerHours}</span>
                <span> mins {timerMins}</span>
                <span> seconds {timerSecs}</span>
            </div>
        </div>
    )
}
