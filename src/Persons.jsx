const Persons = ({personsToShow, deleteInfo}) =>{
    return(
        <ul>
            {personsToShow.map(person =>(
                <li key={person.id}>
                    {person.name} : {person.number}
                    <button onClick={(event)=> deleteInfo(event,person.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}
export default Persons
