import React from "react";
import { Link } from "react-router-dom";

const OwnerDashBorad = ({handleLogout }) => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to='/api/car/add'>Add a Vehicle</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OwnerDashBorad;
