const initialState = {
  notes: [
    // {
    //   id: 0,
    //   content: 'lorem1',
    // },
    // {
    //   id: 1,
    //   content: 'lorem2',
    // },
  ],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_NOTE':
      const newNote = {
        id: state.notes.length,
        content: payload.note,
      };
      return {...state, notes: [...state.notes, newNote]};
    case 'DELETE_NOTE':
      console.log('delete-note');
      return {
        ...state,
        notes: state.notes.filter(elem => elem.id !== payload.id),
      };
    case 'SET_NOTE':
      return {
        ...state,
        notes: [...state.notes, payload.note],
      };

    default:
      return state;
  }
  // return state;
};

export default reducer;
