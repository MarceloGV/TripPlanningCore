export const GET_TRIPS = 'GET_TRIPS';
export const CREATE_TRIP = 'CREATE_TRIP';
​
export function getTrips(ids) {
  return { type: GET_TRIPS, ids }
}
​
export function createTrip(trip) {
  return { type: CREATE_TRIP, trip }
}