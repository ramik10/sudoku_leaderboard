"use client"
import  { useEffect, useState } from 'react'

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
  
  return (
    <div>
      <h1>Leaderboard</h1>
        {data.map((w:any) => {
          return (
            <Card key={w._id} name={w.name} image={w.image}/>
          )
        })}
    </div>
  )
}

function Card(props: {name: string, image: string, key: string}) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image}/>
    </div>
  )
}
