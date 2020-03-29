import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBDYezEP5pk-w360Gh1-3t_asqwDgOW3hw",
//   authDomain: "expensify-test-8c784.firebaseapp.com",
//   databaseURL: "https://expensify-test-8c784.firebaseio.com",
//   projectId: "expensify-test-8c784",
//   storageBucket: "expensify-test-8c784.appspot.com",
//   messagingSenderId: "264041346589",
//   appId: "1:264041346589:web:e66148b7e39dc218cef8f4",
//   measurementId: "G-6RYTED3KES"
// };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (data) => {
//   const expenses = [];
//   data.forEach((expense) => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     })
//   })
//   console.log(expenses)
// }, (error) => console.log(error))

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'March Rent',
//   amount: 7000,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Groceries',
//   note: 'March Groceries',
//   amount: 4000,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Snacks',
//   note: 'March Snacks',
//   amount: 2000,
//   createdAt: 0
// });

// database.ref().on('value', (data) => {
//   const storedData = data.val();
//   console.log(`${storedData.name} is a ${storedData.job.title} at ${storedData.location.city}`)
// }, (error) => console.log(error));

// setTimeout(() => {
//   database.ref('name').set('Yaga Harshini')
// }, 3500);

// setTimeout(() => {
//   database.ref('location/city').set('Bangalore');
// }, 7000);

// setTimeout(() => {
//   database.ref('job/title').set('Manager')
// }, 10500);

// database.ref().once('value').then((data) => {
//   console.log(data.val())
// }).catch((e) => console.log(e))

// database.ref().set({
//   name: 'Harshini',
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'ADP'
//   },
//   isSingle: true,
//   location : {
//     city: 'Andhra Pradesh',
//     country: 'India'
//   }
// }).then(() => {
//   console.log("data is saved!")
// }).catch((e) => {
//   console.log("error", e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'CDK Global',
//   'location/city': 'Hyderabad'
// });

// database.ref('isSingle').remove().then(()=> {
//   console.log("removed key successfully")
// }).catch((e) => {
//   console.log("not able to remove key with error", e)
// })
