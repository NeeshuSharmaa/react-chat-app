import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDgeYKOCA6WGrCzUbrL__j5nRVWLjxRa_A",
    authDomain: "chat-app-6b0f6.firebaseapp.com",
    projectId: "chat-app-6b0f6",
    storageBucket: "chat-app-6b0f6.appspot.com",
    messagingSenderId: "13178661576",
    appId: "1:13178661576:web:c61a1b98f1d7d4a76d13fd",
  };
  //init app
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, "users");
  console.log(colRef);

  getDocs(colRef).then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => users.push({ ...doc.data() }));
    console.log(users);
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
