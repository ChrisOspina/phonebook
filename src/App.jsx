import { useState} from 'react';
import InformationTable from './InformationTable';
import PhoneBookForm from './PhoneBookForm';
import Filter from './Filter';


function App(props){

  const usersObj = [];
  const [users, setUsers] = useState(usersObj);
  const [searchQuery,setSearchQuery] =useState('')

  
  const addUser = (user) =>{
    user.id = user.length +1;
    setUsers([...users, user]);
  }

  const handleSearch =(event) =>{
    setSearchQuery(event.target.value);
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <Filter searchQuery={searchQuery} handleSearch={handleSearch}/>
      <PhoneBookForm addUser={addUser}/>
      <InformationTable users={users} />
    </div>
  )
}

export default App