import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: process.env.firebase_api_domain,
  databaseURL: process.env.firebase_api_database_url,
  projectId: process.env.firebase_api_project_id,
  storageBucket: process.env.firebase_api_storage_bucket,
  messagingSenderId: process.env.firebase_api_messaging_sender_id,
  appId: process.env.firebase_api_id,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase

// export const auth = app.auth()
export const database = firebase.database()
