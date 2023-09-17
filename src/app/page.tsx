"use client"
import  { useEffect, useState } from 'react'
import Button from '@mui/material/Button';

export default function Home() {
  const [data, setData] = useState([])
 
  
    useEffect(() => {
      setInterval(() => {
      fetch('/api/winners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(async (res) => {
       const winners = await  res.json()
       setData(winners)
      }
       )
      }, 3000)
    }, [])
  let i = 0;
  return (
    <div style={{marginTop:"30px"}}>
        {data.map((w:any) => {
          i++;
          return (
            <Card key={w._id} name={w.name} image={w.image} timeTaken={w.timeTaken} gameMode={w.gameMode} moves={w.moves} number={i}/>
          )
        })}
    </div>
  )
}

function Card(props: {name: string, image: string, key: string, moves: number, timeTaken: String, gameMode: string, number: number}) {
  return (
    <div style={{display:"flex", marginTop:"20px"}}>
      <h1 style={{marginLeft:"10px", color:"white"}}>{props.number}.</h1>
      <img style={{marginLeft:"10px", borderRadius:"50px", width:"4%"}} src={props.image}/>
      <h2 style={{marginLeft:"10px", color:"white"}}>{props.name}</h2>
      <Button variant="contained" sx={{height:"100%", marginLeft:"50px", borderRadius:"16px", backgroundColor:"#22d3ee", color:"black", marginTop:"20px"}}>{props.gameMode}</Button>
      <Button variant="contained" sx={{height:"100%", marginLeft:"50px", borderRadius:"16px", backgroundColor:"#4b5563", color:"white", marginTop:"20px"}}>{props.moves}</Button>
      
      
    </div>
  )
}
