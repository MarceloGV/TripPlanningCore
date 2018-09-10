import fetch from 'cross-fetch'

export const GET_TRIPS = 'GET_TRIPS';
export function getTrips() {
  return { type: GET_TRIPS }
}

export const CREATE_TRIP = 'CREATE_TRIP';
export function createTrip(trip) {
  return { type: CREATE_TRIP, trip }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS
  }
}
​
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(trips){
  return function(dispatch){
    dispatch(requestPosts(trips));
    return fetch('localhost:9000')
    .then(response => response.json, error => console.log('Error'))
    .then(json => {
      dispatch(receivePosts(trips, json));
    });
  }
}