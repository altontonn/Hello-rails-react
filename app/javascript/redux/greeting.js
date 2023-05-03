const url = 'http://127.0.0.1:3000/api/v1/messages';

export const fetchMessages = () => async(dispatch) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    dispatch({type: "FETCH_MESSAGES", payload: json})
  } catch(error) {
    console.error(error)
  }
}

const initialState = {greetings: ''}

export const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MESSAGES':
    return {greetings: action.payload.greetings}
    default: 
    return state;
  }
}