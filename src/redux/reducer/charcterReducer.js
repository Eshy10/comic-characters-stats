const heroIDReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_CHARACTERS_ID':
        return action.payload;
        
      default:
        return state;
    }
  };
  
  export default heroIDReducer;