import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import NotesList from '../components/NotesList';
import firebase from 'firebase';
import {setNote} from '../store/actions/action';

export const NotesListContainer = props => {
  const {notes, deleteNote, setNote} = props;

  useEffect(() => {
    firebase
      .database()
      .ref('notes/')
      .on('child_added', snapshot => {
        setNote({
          id: snapshot.key,
          content: snapshot.val().content,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = {
  setNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesListContainer);
