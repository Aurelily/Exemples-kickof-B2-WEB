/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButton(props){
  return (
    <button>
      {props.myParam}
    </button>
  )
}

export default function MyApp(){

   const [tab,setTab] = useState(['+','-','*','/','%','='])

  return (
    <div>
      <div>
        <h1>Sans le map</h1>
        <MyButton myParam={'+'}/>
        <MyButton myParam={'-'}/>
        <MyButton myParam={'*'}/>
        <MyButton myParam={'/'}/>
        <MyButton myParam={'%'}/>
        <MyButton myParam={'='}/>
      </div>
      <div>
        <h1>Avec Map</h1>
        {tab.length > 0 && tab.map((element,index)=> {
          return <MyButton key={index} myParam={element}/>
        })

        }
       
      </div>
    </div>
  )
}
