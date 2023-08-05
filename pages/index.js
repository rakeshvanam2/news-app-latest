import React from "react";
import { auth } from "../Utils/firebaseConfig.js";
import Register from "../components/Register";
import Login from "../components/Login";
import News from "../components/News";

const Home = () => {
  const user = auth.currentUser;
  const isLoggedIn = !!user;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to the News App</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
          <News />
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
};

export default Home;
