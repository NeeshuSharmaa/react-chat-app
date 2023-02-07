import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [users, setUsers] = useState(null);
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
  //data reference
  const colRef = collection(db, "users");
  console.log(colRef);

  useEffect(() => {
    // let usersList=[] difference while putting here
    getDocs(colRef)
      .then((snapshot) => {
        let usersList = []; //and here, how it processes?
        snapshot.docs.forEach((doc) => usersList.push({ ...doc.data() }));
        setUsers(usersList);
      })
      .catch((err) => console.log("getDocs error:", err.message));
  }, []);
  console.log(users);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <SignupPage colRef={colRef} users={users} setUsers={setUsers} />
          }
        ></Route>
        <Route path="/login" element={<LoginPage colRef={colRef} />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
