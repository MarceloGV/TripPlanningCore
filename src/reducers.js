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

const tripsApp = combineReducers({
  trips
});

export default tripsApp;