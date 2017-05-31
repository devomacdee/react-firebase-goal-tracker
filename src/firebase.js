import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBgAY2JI80vCxPbElCAJpi5q2JbIg90TiQ",
  authDomain: "goalcoach-2d9a6.firebaseapp.com",
  databaseURL: "https://goalcoach-2d9a6.firebaseio.com",
  projectId: "goalcoach-2d9a6",
  storageBucket: "goalcoach-2d9a6.appspot.com",
  messagingSenderId: "1007277987604"
}

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')
