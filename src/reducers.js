import { combineReducers } from 'redux';
import {
  CREATE_TRIP,
  GET_TRIPS
} from './actions';

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
          img: './DSCN3207.JPG',
          name: "Código rutero",
          description: "Viaje a lo largo de la arentina codeando y conociendo",
          cities: ["Sierra de la ventana", "Las grutas"],
          places : ["Cerro Bahía Blanca", "Piedras Rojas"],
        }
      ]
    default:
      return state
  }
}

function posts( state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action){
    switch (action.type) {
      case REQUEST_POSTS:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case RECEIVE_POSTS:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          items: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }

  function postsTrips(state = {}, action) {
    switch (action.type) {
      case RECEIVE_POSTS:
      case REQUEST_POSTS:
        return Object.assign({}, state, {
          [action.subreddit]: posts(state[action.subreddit], action)
        })
      default:
        return state
    }
  }

const tripsApp = combineReducers({
  trips,
  postsTrips
});

export default tripsApp;