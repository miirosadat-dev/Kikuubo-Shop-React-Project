import React from "react";
import { Categories } from "../assets/MockData";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
            <ul>
            {Categories.map((category, index) => (
              <li key={index}>
                <div></div>
                {category}
              </li>
            ))}
          </ul>
          </div>
          
          <div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
