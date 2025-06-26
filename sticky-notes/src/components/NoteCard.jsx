import React from 'react'

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className={`note-card ${note.important ? 'important' : ''}`}>
      <span className="close-btn" onClick={onDelete}>×</span>
      <h5>{note.title}</h5>
      <p>{note.description}</p>
    </div>
  )
}

export default NoteCard
