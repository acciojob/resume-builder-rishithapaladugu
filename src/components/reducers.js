// store/reducers/profileReducer.js
const initialState = {
  fname: '',
  lname: '',
  phone: '',
  address: '',
  url: '', // Image URL
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default profileReducer;

// store/reducers/educationReducer.js
const initialState = []; // Array of education objects

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EDUCATION':
      return [...state, action.payload];
    case 'UPDATE_EDUCATION':
      return state.map((edu, index) =>
        index === action.payload.index ? { ...edu, ...action.payload.data } : edu
      );
    case 'DELETE_EDUCATION':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};
export default educationReducer;
