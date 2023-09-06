import React from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Prix";
import Description from "./Description";
import Image from "./image";

function App() {
  const firstName = "Ababacar SECK"; 

  return (
    <div>
      
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <h1>Bonjour, {firstName || "là"} !</h1> {firstName && <Image />}
      
    </div>
  );
}


export default App;