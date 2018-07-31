import { combineReducers } from 'redux';
import {
  CREATE_TRIP,
  GET_TRIP
} from './actions'
​

function trips(state = [], action) {
  switch (action.type) {
    case CREATE_TRIP:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case GET_TRIPS:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}
​
const tripsApp = combineReducers({
  trips
});
​
export default tripsApp;