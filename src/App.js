import { useEffect, useState } from "react";
import "./App.css";
import IceCream from "./IceCream";

function App() {
  let [iceCreams, setIceCreams] = useState([]);

  async function getIceCream() {
    let response = await fetch(
      "https://backend-ice-cream-picker-2.herokuapp.com/ice_cream/"
    );
    response = await response.json();
    setIceCreams(response);
  }

  useEffect(() => {
    getIceCream();
  }, []);

  let iceCreamCards = iceCreams.map((entry) => {
    return <IceCream propsEntry={entry} key={entry.id} />;
  });
  return (
    <div>
      <header>
        <h1>Ice Cream</h1>
      </header>
      {iceCreamCards}
    </div>
  );
}

export default App;
