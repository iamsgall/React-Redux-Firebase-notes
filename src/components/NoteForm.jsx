import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNote} from '../store/actions/action';
import firebase from 'firebase';

export const NoteForm = props => {
  // const {addNote, notes} = props;

  const [note, setNote] = useState('');

  const handleSubmit = e => {
    // console.log(note);
    // addNote(note);
    firebase.database().ref('notes').push({content: note});
    setNote('');
    e.preventDefault();
  };

  const handleChange = e => {
    setNote(e.target.value);
  };

  return (
    <form className='NoteForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={note}
        onChange={handleChange}
        placeholder='Write a note'
      />
      <input type='submit' value='Add note' />
    </form>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = {
  addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
