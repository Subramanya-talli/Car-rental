import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token: ", token)
    if (token) {
      try {
        const deCodeUser = jwtDecode(token);
        setUser(deCodeUser);
      } catch (error) {
        console.log("Invalid Token", error);
      }
    }
  }, []);
  return (
    <>
      <nav>
        {console.log(user)}
        {user ? <p>Welcome, {user.name}</p> : <a href="/user/signin">Sign In</a>}
      </nav>
    </>
  );
};
export default Home;
