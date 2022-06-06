
import React from "react";
import Carousel from "../inc/Carousel";

function Home() {
  return (
    <div className="container_fluid">
        <Carousel/>
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h1>Home Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
