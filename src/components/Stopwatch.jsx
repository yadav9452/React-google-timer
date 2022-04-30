import { useEffect, useRef, useState } from "react"

const Stopwatch=()=>{
    const[sec,setsec] = useState(0);
    const[ms,setms] = useState(0);
    const[min,setmin] = useState(0)
    const stopRef = useRef(null);

    useEffect(()=>{
        startInterval()
        return ()=>{
            clearInterval(stopRef.current)
        }
    },[])

    const startInterval=()=>{
        stopRef.current = setInterval(()=>{
            setms((ms)=>{
                if(ms===99){
                    setms(0);
                    setsec((sec)=>{
                        if(sec===59){
                            setsec(0);
                            setmin((min)=>{
                                return min+1;
                            })
                        }
                        return sec+1;
                    })
                }
                return ms+1
            })
        },10)
    }

    return(
        <>
        <br />
        <input type="number" placeholder="Min" onChange={(e)=>{setmin(Number(e.target.value))}} />
        <input type="number" placeholder="Sec" onChange={(e)=>{setsec(Number(e.target.value))}} />
        <input type="number" placeholder="Ms" onChange={(e)=>{setms(Number(e.target.value))}} />
        <h1>Stopwatch {min}:{sec}:{ms}</h1>
        <button onClick={()=>{startInterval()}}>Start</button>
        <button onClick={()=>{clearInterval(stopRef.current)}}>Stop</button>
        <button onClick={()=>{clearInterval(stopRef.current);setmin(0);setms(0);setsec(0)}}>Reset</button>
        </>
     )
}

export default Stopwatch