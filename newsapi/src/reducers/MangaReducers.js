const defaultState = {
  mangalist: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MANGA': 
      return {
        ...state,
        mangalist: action.payload.mangalist
      }
    default: 
        return state
  }
}