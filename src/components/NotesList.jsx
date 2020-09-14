import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

export default function NotesList(props) {
  const {notes} = props;
  return (
    <div>
      <div className='notesHeader'>
        <h2>React - Redux - Firebase</h2>
      </div>
      <div className='notesBody'>
        <ul>
          {notes.map(note => (
            <Note key={note.id} id={note.id} content={note.content} />
          ))}
        </ul>
      </div>
      <div className='notesFooter'>
        <NoteForm />
      </div>
    </div>
  );
}
