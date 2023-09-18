"use client"
import  { useEffect, useState } from 'react'
import Button from '@mui/material/Button';

export default function Home() {
  const [data, setData] = useState([])
 
  function padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToMinutesSeconds(milliseconds:number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
  
    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${padTo2Digits(seconds)}`;
  }
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
            <Card key={w._id} name={w.name} image={w.image} timeTaken={w.timeTaken} gameMode={w.gameMode} moves={w.moves} number={i} time={w.timeTaken} convert={convertMsToMinutesSeconds}/>
          )
        })}
    </div>
  )
}

function Card(props: {name: string, image: string, key: string, moves: number, timeTaken: String, gameMode: string, number: number, time:number, convert: Function}) {
  const timeTaken = props.time;
  const time = props.convert(timeTaken);
  return (
    <div className="grid grid-cols-12 mt-10">
      <h1 className=" col-span-1 text-white ml-5 md:ml-20 mt-6 font-extrabold md:text-3xl text-sm">{props.number}.</h1>
      <img className="rounded-full col-span-2 lg:col-span-1" src={props.image}/>
      <h2 className="col-span-4 lg:col-span-1 text-white mt-6 md:mt-7 font-extrabold ml-0.5 md:ml-3">{props.name}</h2>
      <div className="flex col-span-3 mt-7 ml-5 md:ml-7">
      <p className="hidden lg:block text-white w-1/3">Game Mode: </p>
      <Button variant="contained" className="bg-cyan-500 rounded-full h-1/2 md:h-1/3">{props.gameMode}</Button>
      </div>
      <div className="flex col-span-2 mt-7 ml-1 md:ml-2">
      <p className="hidden lg:block text-white  w-1/3">Moves Taken: </p>
      <Button variant="contained" className="ml-1 lg:ml-2 bg-slate-700 rounded-full h-1/2 md:h-1/3">{props.moves}</Button>
      </div>
      <div className="flex col-span-2 mt-7 ml-2">
      <p className="hidden lg:block text-white  w-1/3">Time Taken: </p>
      <Button variant="contained" className="ml-2 md:ml-2 rounded-full h-1/2 md:h-1/3 bg-green-600">{time}</Button>
      </div>
    </div>
  )
}
