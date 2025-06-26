import React, { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    setNotes(savedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    setNotes([note, ...notes])
  }

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index)
    setNotes(updatedNotes)
  }

  
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Notas Adhesivas</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  )
}

export default App

