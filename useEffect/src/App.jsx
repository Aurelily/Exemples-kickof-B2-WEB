/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
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

function MyForm(props){

  return (
    <form method="POST" >
      <label>Ajouter un pseudo</label>
      <input onChange={(e)=>{props.handleSetName(e.target.value)}} type="text" name="form_name" placeholder='a new pseudo in db'/>
      <button type='button' onClick={props.registerName}>Sauvegarder</button>
    </form>
  )
}



export default function MyApp(){
  const [name,setName] = useState('');
  const [notif, setNotif] = useState('');
  const [isFetch, setIsFetch] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isFetch) {
        let test = await getAllUser();
        setUser(test);
        setIsFetch(true);
        console.log(test,'ccc')
      }
      console.log('useEffect', name);
    };
    if(!isFetch)
      fetchData(); // Appelez la fonction asynchrone immédiatement
  
  }, []); // Assurez-vous d'inclure les dépendances nécessaires (name et isFetch)

  async function getAllUser(){
    const response = await fetch('http://localhost/vite-project/traitement.php?getAllUsers', {
      method:'GET',
      mode: 'cors',
    })
    const result = await response.json()

    return result
  }

  function handleSetName(value){
    setName(value)
  }

  async function registerName() {
    // try {
      let formData = new FormData();
      formData.append('name', name)
      const response = await fetch('http://localhost/vite-project/traitement.php', {
        method:'POST',
        body: formData,
        mode: 'cors',

      })
      const result = await response.json()
      setNotif(result);
      setIsFetch(false)
      console.log(result,'cc')
    // } catch (error) {
    //   console.log(error, 'fakkk')
    // }
  }
  return (
    <div>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton myParam={'+'}/>
        <MyButton myParam={'-'}/>
        <MyButton myParam={'*'}/>
        <MyButton myParam={'/'}/>
        <MyButton myParam={'%'}/>
        <MyButton myParam={'='}/>
      </div>
      <div>
        <MyForm handleSetName={handleSetName} registerName={registerName} />
      </div>
      <span>{notif}</span>
      
      {user.length > 0 && user.map(element => {
        return (
          <UserElement key={element.id} user={element}/>
        )
      })}
    </div>
  )
}
function UserElement(props){
  return (
    <div>
      <p>{props.user.name}</p>
    </div>
  )
}