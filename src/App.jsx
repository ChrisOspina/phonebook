import { useState, useEffect } from 'react'
import noteService from './services/persons'

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

    

}