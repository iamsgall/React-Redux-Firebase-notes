import React from 'react';
import {connect} from 'react-redux';
import {deleteNote} from '../store/actions/action';
import firebase from 'firebase';

export function Note(props) {
  const {id, content, deleteNote} = props;

  const handleRemove = id => {
    firebase.database().ref('notes').child(id).remove();
  };

  return (
    <li className='Note'>
      <span
        className='X'
        style={{float: 'right'}}
        onClick={() => handleRemove(id)}
      >
        X
      </span>
      <p>{content}</p>
    </li>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
