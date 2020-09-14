import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
// import store from './store/reducers/reducer';
import store from './store/store';
import NotesListContainer from './containers/NotesListContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NotesListContainer />
      </div>
    </Provider>
  );
}

export default App;
