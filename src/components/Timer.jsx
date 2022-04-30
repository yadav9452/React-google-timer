import { useEffect, useRef, useState } from "react";

const Timer = () => {
   const[min,setMin]= useState(5);
   const [sec,setsec] = useState(59);
   const timerRef = useRef(null)

    const startInterval=()=>{
       
        timerRef.current = setInterval(()=>{
            setsec((sec)=>{
                if(min===0 && sec===0){
                    clearInterval(x);
                }
                if(sec===0){
                    setsec(59);
                    setMin((min)=>{
                      return  min-1;
                    })
                }
               return sec-1
            });
        },1000)
    }

   useEffect(()=>{
       startInterval()
       return ()=>{
        clearInterval(timerRef.current)
       }
   },[])

  return (
    <>
    <br />
      <input type="number" placeholder="Min" onChange={(e)=>{setMin(e.target.value)}} />
      <input type="number" placeholder="sec" onChange={(e)=>{setsec(e.target.value)}} />
      <br />
      <h1>Timer {min}:{sec}</h1>
      <button onClick={()=>{startInterval()}}>Start</button>
      <button onClick={()=>{clearInterval(timerRef.current)}}>Stop</button>
      <button onClick={()=>{clearInterval(timerRef.current);setMin(5);setsec(59)}}>Reset</button>
    </>
  );
};

export default Timer;
