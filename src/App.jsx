import { useState, useEffect } from 'react'
import Filter from './Filter';
import Notification from './Notification';
import Form from './Form';
import noteService from './services/persons'
import Persons from './services/persons';

const App = () => {

    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState('');

    const [newNum, setNewNum] = useState('');

    const [searchQuery, setSearchQuery] = useState('')

    const [notification, setNotification] = useState('');

    const [notificationType, setNotificationType] = useState('');

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setPersons(initialNotes)
            })
    }, [])

    const showNotification = (message, type = 'success') => {
        setNotification(message);
        setNotificationType(type);
        setTimeout(() => setNotification(''), 3000);
  };

  const addInfo = (event) =>{
    event.preventDefault()

    if(newName.trim()===''){
        alert('enter a valid name')
        return;
    }

    if(newNum.trim()===''){
        alert('enter a valid number')
        return;
    }

   
    if (persons.some(person =>person.name===newName)){
      alert(`${newName} is  already added to the phonebook`)
      return;
    }

    const newObj ={
        name:newName,
        number:newNum,
        id: String(persons.length +1)
    }

    noteService
        .create(newObj)
        .then(returnedNote =>{
            setPersons(persons.concat(returnedNote))
            setNewName('')
            setNewNum('')
            showNotification(`Added ${newName}`)
        }
    )
  }

  const deleteInfo=(event,id)=>{
    event.preventDefault()
    const a = window.confirm('do you want to delete this record?')
    
    if(a){
        noteService
            .deleteRec(id)
            .then(()=>{
              setPersons(persons.filter(persons => persons.id !== id))
              showNotification(`Record deleted`, `error`)  
            })
     }
  }

  const handleNewNum = (event) =>{
    setNewNum(event.target.value)
  }

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleSearch = (event) =>{
    setSearchQuery(event.target.value)
  }

  const personsToShow = persons.filter(
    person=>person.name.toLowerCase()
        .includes(searchQuery.toLowerCase())
    )

    return(
        <div>
            <h1>Phonebook</h1>
            <Notification message ={notification} type={notificationType}/>
            <Filter searchQuery={searchQuery} handleSearch={handleSearch}/>
            <Form
                addInfo={addInfo} newName={newName}
                handleNewName={handleNewName} newNum={newNum}
                handleNewNum={handleNewNum}/>

            <h3>Numbers</h3>

            <Persons personsToShow={personsToShow} deleteInfo={deleteInfo}/>
        </div>
    )

}

export default App