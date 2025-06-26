import React, { useState } from 'react'

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [important, setImportant] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description.trim()) return alert('La descripción es obligatoria')

    const newNote = {
      title,
      description,
      important,
    }

    onAddNote(newNote)
    setTitle('')
    setDescription('')
    setImportant(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Título (opcional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <textarea
          className="form-control"
          placeholder="Descripción *"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={important}
          id="important"
          onChange={(e) => setImportant(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="important">
          Importante
        </label>
      </div>
      <button type="submit" className="btn btn-success">
        Agregar Nota
      </button>
    </form>
  )
}

export default NoteForm

