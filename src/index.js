import { createStore } from 'redux';
import tripsApp from './reducers';

export const store = createStore(tripsApp);