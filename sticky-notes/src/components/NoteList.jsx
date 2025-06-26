import React from 'react'
import NoteCard from './NoteCard'

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <div className="row">
      {notes.map((note, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <NoteCard note={note} onDelete={() => onDeleteNote(index)} />
        </div>
      ))}
    </div>
  )
}

export default NoteList
