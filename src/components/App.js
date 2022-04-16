import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [themeMode, setMode] = useState("App light")
  const [buttonMode, setTheme] = useState("Dark Mode")

  function singleClick() {
    setMode("App dark")
    setTheme("Light Mode")
  }
  function doubleClick() {
    setMode("App light")
    setTheme("Dark Mode")
  }
  return (
    <div className={themeMode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={singleClick} onDoubleClick={doubleClick}>{buttonMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
