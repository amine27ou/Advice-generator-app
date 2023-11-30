import React,{useEffect,useState} from 'react'

export default function Advice() {
    const [adviceData,setAdviceData] = useState()
    const fetchAdvices = async () =>{
        const randomNbr = Math.floor(Math.random() * 224)
        console.log(randomNbr)
        const res = await fetch(`https://api.adviceslip.com/advice/${randomNbr}`)
        if(!res.ok){
            throw new Error('could not fetch data')
        }
        const data = await res.json()
        setAdviceData(data)
    }
    useEffect(()=>{
        fetchAdvices()
    },[])
    
  return (
    <div className='advice-container'>
            <h5 className='color-red-500'>Advice #{adviceData?.slip.id}</h5>
                <h2>"{adviceData?.slip.advice}"</h2>
                <div className="pattern">
                    <img src='./images/pattern-divider-desktop.svg' className='dice-icon' alt='dice'/>
                </div>
                <div onClick={fetchAdvices} className="dice-container">
                    <img src='./images/icon-dice.svg'  alt='dice'/>
                </div>
    </div>
  )
}
