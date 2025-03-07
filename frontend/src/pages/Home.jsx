import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);


axios.get('/')

  return (
    <>
      {loggedIn ? (
        <main>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Rent A Car</a>
              </li>
              <li>
                <a href="/user/signup">Sign Up</a>
              </li>
              <li>
                <a href="/user/signin">Sign In</a>
              </li>
            </ul>
          </nav>
        </main>
      ) : (
        <main>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">Rent A Car</a>
              </li>
              <li>
                <a href="">Log Out</a>
              </li>
            </ul>
          </nav>
        </main>
      )}
    </>
  );
};

export default Home;
