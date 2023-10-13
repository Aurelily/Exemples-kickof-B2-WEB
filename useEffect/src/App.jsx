/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './App.css'

export default function MyApp(){ 
  const [name,setName] = useState('');
  const [notif, setNotif] = useState('');

  const [isFetch, setIsFetch] = useState(true);
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        let test = await getAllUserList();
        setUserList(test);
        setIsFetch(false);
        console.log(test,'ccc')
    };
    if(isFetch)
      fetchData(); 
  
  }, [isFetch]); // On met isFetch pour que le useEffect fonctionne a chaque nouveau POST

  async function getAllUserList(){
    const response = await fetch('http://localhost/Exemples-kickof-B2-WEB/useEffect/traitement.php?getAllUsers', {
      method:'GET',
      mode: 'cors',
    })
    const result = await response.json()

    return result
  }

  async function registerName() {
    let formData = new FormData();
    formData.append('name', name)
    const response = await fetch('http://localhost/Exemples-kickof-B2-WEB/useEffect/traitement.php', {
      method:'POST',
      body: formData,
      mode: 'cors',
    })
    const result = await response.json()
    setNotif(result);
    setIsFetch(true)
    console.log(result,'cc')

}

  return (
    <div>
      <div>
      <form method="POST" >
          <label>Ajouter un pseudo</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" name="form_name" placeholder='a new pseudo in db'/>
          <button type='button' onClick={registerName}>Sauvegarder</button>
    </form>
      </div>
      <span>{notif}</span>
      
      {userList.length > 0 && userList.map((element,index) => {
        return (
          <div key={index}>
            <p>{element.name}</p>
          </div>
        )
      })}

    </div>
  )
}

